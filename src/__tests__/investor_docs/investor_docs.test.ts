import { expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import { createLegalNaturalPerson, createAccount } from "../accounts";
import { beforeAll } from "vitest";

let lnp_id: string | undefined;
let account_id: string | undefined;

beforeAll(async () => {
  lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
}, 60000);

test("Investor Docs Investor Docs Batch Create Upload Links Batch Create Upload Links1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  const request: components.BatchCreateUploadLinksRequestCreate = {
    createDocumentUploadLinkRequest: [
      {
        accountDocumentUploadRequest: {
          correspondentId: process.env["CORRESPONDENT_ID"] ?? "",
          documentType: components.DocumentType.FdicSweepProgramAgreement,
          accountId: account_id,
        },
        clientBatchSourceId: "cda89bd0-a6bc-4acc-89da-d35bde30cbf4",
        mimeType: "image/jpeg",
      },
    ],
  };
  const result = await sdk.investorDocs.batchCreateUploadLinks(request);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Investor Docs Investor Docs List Documents List Documents1", async () => {
  const result = await sdk.investorDocs.listDocuments(
    50,
    undefined,
    `correspondent_id=="${process.env["CORRESPONDENT_ID"]}"`,
  );
  expect(result.httpMeta.response.status).toBe(200);
});
