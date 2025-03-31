import {expect, test} from "vitest";
import {sdk, timeout} from "../utils/sdk";
import {createLegalNaturalPerson, createAccount, enrollAccount, affirmAgreement} from "../accounts";
import {create_account_transfer_id} from "./index";
import {beforeAll} from "vitest";

let lnp_id: string | undefined;
let account_id: string | undefined;
let enrollment_ids: string[] | undefined;
let transfer_id: string | undefined;

beforeAll(async () => {
  lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error('lnp_id is undefined.');
  }
  await timeout(5000);
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  await timeout(5000);
  enrollment_ids = await enrollAccount(account_id);
  if (typeof enrollment_ids !== "object") {
    throw new Error('enrollment_ids is undefined.');
  }
  await timeout(5000);
  affirmAgreement(account_id, enrollment_ids);
  await timeout(5000);
  transfer_id = await create_account_transfer_id(account_id);
  if (typeof transfer_id !== "string") {
    throw new Error('transfer_id is undefined.');
  }
  await timeout(5000);
}, 60000);

test("Account Transfers Account Transfers Create Transfer Create Transfer1", async () => {
  expect(transfer_id).not.toBe(undefined);
});

test("Account Transfers Account Transfers Get Transfer Get Transfer1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof transfer_id !== "string") {
    throw new Error('transfer_id is undefined.');
  }
  const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
  if (!correspondentId) {
    throw new Error('CORRESPONDENT_ID is undefined or empty.');
  }
  const result = await sdk.accountTransfers.getTransfer(correspondentId, account_id, transfer_id);
  expect(result.httpMeta.response.status).toBe(200);
});
