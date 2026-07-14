import { describe, expect, it, vi, afterEach } from "vitest";
import {
  ApexAccessTokenHook,
  resolveServerBaseUrl,
} from "../hooks/apexaccesstokenhook.js";

describe("resolveServerBaseUrl", () => {
  it("preserves path prefixes from the configured base URL", () => {
    expect(
      resolveServerBaseUrl(
        "https://example.com/proxy/apex/",
        "https://example.com/proxy/apex/accounts/v1/accounts"
      )
    ).toBe("https://example.com/proxy/apex");
  });

  it("accepts URL objects", () => {
    expect(
      resolveServerBaseUrl(
        new URL("https://example.com/proxy/apex/"),
        "https://example.com/proxy/apex/accounts/v1/accounts"
      )
    ).toBe("https://example.com/proxy/apex");
  });

  it("falls back to request origin when base URL is missing", () => {
    expect(
      resolveServerBaseUrl(
        null,
        "https://example.com/proxy/apex/accounts/v1/accounts"
      )
    ).toBe("https://example.com");
  });
});

describe("ApexAccessTokenHook.generateServiceAccountToken", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("joins the token path onto a base URL that includes a path prefix", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ access_token: "token", expires_in: 3600 }), {
        status: 200,
      })
    );
    vi.stubGlobal("fetch", fetchMock);

    const hook = new ApexAccessTokenHook();
    await hook.generateServiceAccountToken(
      "https://example.com/proxy/apex",
      "test-api-key",
      "test-jws"
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0]?.[0]).toBe(
      "https://example.com/proxy/apex/iam/v1/serviceAccounts:generateAccessToken"
    );
  });

  it("joins the token path onto a root base URL", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ access_token: "token", expires_in: 3600 }), {
        status: 200,
      })
    );
    vi.stubGlobal("fetch", fetchMock);

    const hook = new ApexAccessTokenHook();
    await hook.generateServiceAccountToken(
      "https://uat.apexapis.com",
      "test-api-key",
      "test-jws"
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0]?.[0]).toBe(
      "https://uat.apexapis.com/iam/v1/serviceAccounts:generateAccessToken"
    );
  });
});
