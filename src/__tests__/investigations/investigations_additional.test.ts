import { expect, test } from "vitest";
import { sdk } from "../utils/sdk";
import * as components from "../../models/components";
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
    throw new Error("Failed to get identity verification results or results array is empty");
  }

  const first_id_result = results[0];

  if (!first_id_result?.customerIdentificationId) {
    throw new Error("Customer Identification ID is missing in the first identity verification result");
  }

  const result = await sdk.investigations.getCustomerIdentification(
    process.env["CORRESPONDENT_ID"] || "",
    first_id_result?.customerIdentificationId || "",
  );
  expect(result.httpMeta.response.status).toBe(200);
});
