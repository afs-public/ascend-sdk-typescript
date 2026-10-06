import {expect, test} from "vitest";
import {sdk, timeout} from "../utils/sdk";
import {createEnrolledAccount} from "../accounts";
import {create_account_transfer_id} from "./index";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import * as operations from "@apexfintechsolutions/ascend-sdk/models/operations";
import {beforeAll} from "vitest";

let account_id: string | undefined;
let transfer_id: string | undefined;

beforeAll(async () => {
  account_id = await createEnrolledAccount();
  transfer_id = await create_account_transfer_id(account_id);
  if (typeof transfer_id !== "string") {
    throw new Error('accept_transfer_id is undefined.');
  }
}, 120000);

test("Account Transfers Account Transfers Create Transfer Create Transfer1", async () => {
  expect(transfer_id).not.toBe(undefined);
});

test("Account Transfers Account Transfers List Transfers List Transfers1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
  if (!correspondentId) {
    throw new Error('CORRESPONDENT_ID is undefined or empty.');
  }

  const request : operations.AccountTransfersListTransfersRequest = {
    correspondentId: correspondentId,
    accountId: account_id,
  }

  const result = await sdk.accountTransfers.listTransfers(request);
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.listTransfersResponse?.transfers?.length).toBeGreaterThan(0);
});

test("Account Transfers Account Transfers Reject Transfer Reject Transfer1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
  if (!correspondentId) {
    throw new Error('CORRESPONDENT_ID is undefined or empty.');
  }
  if (typeof transfer_id !== "string") {
    throw new Error('transfer_id is undefined.');
  }

  const request: components.RejectTransferRequestCreate = {
    name: `correspondents/${correspondentId}/accounts/${account_id}/transfers/${transfer_id}`,
  };

  const result = await sdk.accountTransfers.rejectTransfer(request, correspondentId, account_id, transfer_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test ("Account Transfers Account Transfers Accept Transfer Accept Transfer1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
  if (!correspondentId) {
    throw new Error('CORRESPONDENT_ID is undefined or empty.');
  }

  // Use a dedicated account: rejecting the earlier transfer restricts its
  // deliverer account (ACAT_PARTIAL_OUTBOUND entitlement) for an unbounded
  // window, so a second transfer on the same account is rejected as
  // "Account not entitled".
  const accept_account_id = await createEnrolledAccount();
  const accept_transfer_id = await create_account_transfer_id(accept_account_id);
  if (typeof accept_transfer_id !== "string") {
    throw new Error('accept_transfer_id is undefined.');
  }

  const request: components.AcceptTransferRequestCreate = {
    name: `correspondents/${correspondentId}/accounts/${accept_account_id}/transfers/${accept_transfer_id}`,
  };

  const result = await sdk.accountTransfers.acceptTransfer(request, correspondentId, accept_account_id, accept_transfer_id);
  expect(result.httpMeta.response.status).toBe(200);
}, 180000);

test("Account Transfers Account Transfers Get Transfer Get Transfer1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof transfer_id !== "string") {
    throw new Error('accept_transfer_id is undefined.');
  }
  const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
  if (!correspondentId) {
    throw new Error('CORRESPONDENT_ID is undefined or empty.');
  }
  const result = await sdk.accountTransfers.getTransfer(correspondentId, account_id, transfer_id);
  expect(result.httpMeta.response.status).toBe(200);
});
