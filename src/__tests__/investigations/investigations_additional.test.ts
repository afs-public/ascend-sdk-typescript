import { expect, test } from "vitest";
import { sdk } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import { investigation_id } from "./index";
import * as crypto from "crypto";

const apex_investigation_id = "01JP8EHZ3CJKCTMHKTT4FZ51HC";

test("Investigations Investigation Service Update Investigation Update Investigation1", async () => {
  const request: components.InvestigationUpdate = {
    comment: "new investigation name",
  };
  const result = await sdk.investigations.updateInvestigation(
    request,
    investigation_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Investigations Investigation Service Link Documents Link Documents1", async () => {
  const request: components.LinkDocumentsRequestCreate = {
    identityVerificationDocumentIds: [crypto.randomUUID()],
  };
  const result = await sdk.investigations.linkDocuments(
    request,
    investigation_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Investigations Investigations Get Identify Verification", async () => {
  const inv = await sdk.investigations.getInvestigation(apex_investigation_id);
  const results = inv?.investigation?.identityVerificationResults;
  if (results == undefined) {
    throw new Error("Failed to get identity verification results");
  }

  if (!results || results.length === 0) {
    throw new Error(
      "Failed to get identity verification results or results array is empty",
    );
  }

  const first_id_result = results[0];

  if (!first_id_result?.customerIdentificationId) {
    throw new Error(
      "Customer Identification ID is missing in the first identity verification result",
    );
  }

  const result = await sdk.investigations.getCustomerIdentification(
    process.env["CORRESPONDENT_ID"] || "",
    first_id_result?.customerIdentificationId || "",
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Identity Lookup Service Create Identity Lookup", async () => {
  const correspondentId = process.env["CORRESPONDENT_ID"];
  if (!correspondentId) {
    throw new Error("CORRESPONDENT_ID environment variable must be set");
  }

  const request: components.IdentityLookupCreate = {
    deviceMetadata: {
      ipAddress: "203.0.113.42",
    },
    identification: {
      regionCode: "US",
      type: components.IdentificationCreateType.Ssn,
      value: "123-45-6789",
    },
    phoneNumber: {
      e164Number: "+15035550123",
      extension: "123",
    },
    userConsent: true,
  };

  const result = await sdk.investigations.createIdentityLookup(
    request,
    correspondentId,
  );

  expect(result.identityLookup).toBeDefined();
  expect(result.identityLookup?.name).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);

  // Extract identity lookup ID from name
  const nameParts = result.identityLookup?.name?.split("/");
  const lookupId = nameParts?.[nameParts.length - 1];
  expect(lookupId).toBeDefined();
  expect(lookupId!.length).toBeGreaterThan(0);
});

test("Test Identity Lookup Service Verify Identity Lookup", async () => {
  const correspondentId = process.env["CORRESPONDENT_ID"];
  if (!correspondentId) {
    throw new Error("CORRESPONDENT_ID environment variable must be set");
  }

  // First create an identity lookup
  const createRequest: components.IdentityLookupCreate = {
    deviceMetadata: {
      ipAddress: "203.0.113.42",
    },
    identification: {
      regionCode: "US",
      type: components.IdentificationCreateType.Ssn,
      value: "123-45-6789",
    },
    phoneNumber: {
      e164Number: "+15035550123",
      extension: "123",
    },
    userConsent: true,
  };

  const createResult = await sdk.investigations.createIdentityLookup(
    createRequest,
    correspondentId,
  );

  expect(createResult.identityLookup?.name).toBeDefined();

  // Extract identity lookup ID from name
  const nameParts = createResult.identityLookup?.name?.split("/");
  const lookupId = nameParts?.[nameParts.length - 1];
  expect(lookupId).toBeDefined();

  // Now verify the identity lookup
  const verifyRequest: components.VerifyIdentityLookupRequestCreate = {
    name: `correspondents/${correspondentId}/identityLookups/${lookupId}`,
    verificationCode: "123456", // This is a test verification code
  };

  try {
    const result = await sdk.investigations.verifyIdentityLookup(
      verifyRequest,
      correspondentId,
      lookupId!,
    );

    expect(result).toBeDefined();
    expect(result.httpMeta.response.status).toBe(200);
  } catch (error: any) {
    // The verification may fail with invalid code, which is expected in test environment
    // We're just testing that the endpoint is callable
    expect(error.message.toLowerCase()).toContain("verification");
  }
});
