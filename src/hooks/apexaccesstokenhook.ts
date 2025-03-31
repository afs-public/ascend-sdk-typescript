import { createPrivateKey } from "crypto";
import { sign, SignOptions } from "jsonwebtoken";
import {
  Security$outboundSchema,
  ServiceAccountCreds,
} from "../models/components";
import { BeforeRequestContext, BeforeRequestHook } from "./types";

export class ApexAccessTokenHook implements BeforeRequestHook {
  private accessToken: string;
  private accessTokenExpiration: Date | undefined;

  constructor() {
    this.accessToken = "";
  }

  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request
  ): Promise<Request> {
    // Get the security object from the security source which can be the value directly from the user or a callback function
    let sec = hookCtx.securitySource;
    // request.url
    if (typeof sec === "function") {
      sec = await sec();
    }
    if (!sec) {
      throw new Error("security source is not defined");
    }

    // Use the zod schema to parse the security object
    const customSec = Security$outboundSchema.parse(sec);

    // Access the values from the parsed object and add them to the request headers
    if (customSec.apiKey) {
      request.headers.set("x-api-key", customSec.apiKey);
    } else {
      throw new Error("apiKey is not defined");
    }
    if (customSec.serviceAccountCreds) {
      const serverUrl = new URL(request.url).origin;
      const accessToken = await this.getAccessToken(
        serverUrl,
        customSec.apiKey,
        customSec.serviceAccountCreds
      );
      request.headers.set("Authorization", "Bearer " + accessToken);
    } else {
      throw new Error("serviceAccountCredsJson is not defined");
    }
    return request;
  }

  async getAccessToken(
    serverUrl: string,
    apiKey: string,
    serviceAccountCreds: ServiceAccountCreds
  ): Promise<string> {
    if (this.accessTokenStillValid()) {
      return this.accessToken;
    }

    this.accessTokenExpiration = new Date();
    const resp = await this.generateServiceAccountToken(
      serverUrl,
      apiKey,
      this.getJws(serviceAccountCreds)
    );

    if (resp.status != 200) {
      const errMsg = `Error generating service account token [url: ${resp.url}, status: ${resp.status}, statusText: ${resp.statusText}]`;
      throw new Error(errMsg);
    }

    const data = await resp.json();
    if (!data?.access_token) {
      throw new Error("No access_token returned");
    }
    if (!data?.expires_in) {
      throw new Error("No expires_in returned");
    }

    this.accessToken = data.access_token;
    this.accessTokenExpiration.setMinutes(
      this.accessTokenExpiration.getMinutes() + data.expires_in / 60
    );

    return this.accessToken;
  }

  async generateServiceAccountToken(
    serverURL: string,
    apiKey: string,
    jws: string
  ): Promise<Response> {
    const url = `${serverURL}/iam/v1/serviceAccounts:generateAccessToken`;
    // Prepare headers
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    });

    try {
      return await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          jws,
        }),
      });
    } catch (error) {
      console.error(`Failed to fetch access token from ${serverURL}:`, error);
      throw error;
    }
  }

  private getJws(creds: ServiceAccountCreds): string {
    try {
      const privateKeyContent = creds.privateKey
        .replace(/\n/g, "")
        .replace(/\\n/g, "")
        .replace(/\r/g, "")
        .replace(/\\r/g, "")
        .replace(/-----BEGIN PRIVATE KEY-----/g, "")
        .replace(/-----END PRIVATE KEY-----/g, "");

      const privateKeyBuffer = Buffer.from(privateKeyContent, "base64");
      const privateKey = createPrivateKey({
        key: privateKeyBuffer,
        format: "der",
        type: "pkcs8",
      });

      const nowIsoDateTime = new Date().toISOString();

      const payload = {
        iss: "issuer",
        sub: "subject",
        name: creds.name,
        organization: creds.organization,
        datetime: nowIsoDateTime,
      };

      const signOptions: SignOptions = {
        algorithm: "RS256",
      };

      return sign(
        payload,
        privateKey.export({
          format: "pem",
          type: "pkcs1",
        }),
        signOptions
      );
    } catch (error) {
      console.error("Error generating JWS:", error);
      throw error;
    }
  }

  private accessTokenStillValid() {
    if (!this.accessToken) {
      return false;
    }
    //  Confirm token expiration is "after now"
    return (
      this.accessTokenExpiration != null &&
      this.accessTokenExpiration > new Date()
    );
  }
}
