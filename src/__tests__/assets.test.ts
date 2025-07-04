/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Apexascend } from "../index.js";

test("Assets Assets List Assets 1 Assets List Assets 1", async () => {
  const apexascend = new Apexascend({
    serverURL: "https://uat.apexapis.com",
    security: {
      apiKey: process.env["API_KEY"] ?? "",
      serviceAccountCreds: {
        privateKey: process.env["SERVICE_ACCOUNT_CREDS_PRIVATE_KEY"] ?? "",
        name: process.env["SERVICE_ACCOUNT_CREDS_NAME"] ?? "",
        organization: process.env["SERVICE_ACCOUNT_CREDS_ORGANIZATION"] ?? "",
        type: "serviceAccount",
      },
    },
  });
  const result = await apexascend.assets.listAssets();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Assets Assets Get Asset Assets Get Asset1", async () => {
  const apexascend = new Apexascend({
    serverURL: "https://uat.apexapis.com",
    security: {
      apiKey: process.env["API_KEY"] ?? "",
      serviceAccountCreds: {
        privateKey: process.env["SERVICE_ACCOUNT_CREDS_PRIVATE_KEY"] ?? "",
        name: process.env["SERVICE_ACCOUNT_CREDS_NAME"] ?? "",
        organization: process.env["SERVICE_ACCOUNT_CREDS_ORGANIZATION"] ?? "",
        type: "serviceAccount",
      },
    },
  });
  const result = await apexascend.assets.getAsset("8395");
  expect(result.httpMeta.response.status).toBe(200);
});
