import {expect, test} from "vitest";
import {sdk, timeout} from "../utils/sdk";
import {createLegalNaturalPerson, createAccount, enrollAccount, affirmAgreement} from "../accounts";

import {
  createIctDeposit, createIctWithdrawal
} from "./index";

import {beforeAll} from "vitest";
import {ProgramDateFilterProgram} from "../../models/operations";

let lnp_id: string | undefined;
let account_id: string | undefined;
let enrollment_ids: string[] | undefined;

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
}, 60000);

test("Test Instant Cash Transfer Transfers Create Ict Deposit Create Ict Deposit1", async () => {
  const deposit_id = await createIctDeposit(account_id || '');
  expect(deposit_id).toBeDefined();
  expect(deposit_id.length).greaterThan(0);
})

test("Test Instant Cash Transfer Transfers Get Ict Deposit Get Ict Deposit1", async () => {
  const deposit_id = await createIctDeposit(account_id || '');
  const result = await sdk.instantCashTransferICT.getIctDeposit(account_id || '', deposit_id);
  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
})

test("Test Instant Cash Transfer Transfers Cancel Ict Deposit Cancel Ict Deposit1", async () => {
  const deposit_id = await createIctDeposit(account_id || '');
  const result = await sdk.instantCashTransferICT.cancelIctDeposit({
    name: "accounts/"
        + account_id
        + "ictDeposits/"
        + deposit_id
        + ":cancel",
  },
  account_id || '',
  deposit_id);

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
})

test("Test Instant Cash Transfer Transfers Create Ict Withdrawal Create Ict Withdrawal1", async () => {
  const withdrawal = await createIctWithdrawal(account_id || '');
  expect(withdrawal).toBeDefined();
  expect(withdrawal.length).greaterThan(0);
})

test("Test Instant Cash Transfer Transfers Get Ict Withdrawal Get Ict Withdrawal1", async () => {
  const withdrawal = await createIctWithdrawal(account_id || '');
  const result = await sdk.instantCashTransferICT.getIctWithdrawal(account_id || '', withdrawal);

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
})

test("Test Instant Cash Transfer Transfers Cancel Ict Withdrawal Cancel Ict Withdrawal1", async () => {
  const withdrawal = await createIctWithdrawal(account_id || '');
  await timeout(5000);

  const request = {
    name: "accounts/"
    + account_id
    + "/ictWithdrawals/"
    + withdrawal
    + ":cancel",
    reason: "User requested",
  }

  const result = await sdk.instantCashTransferICT.cancelIctWithdrawal(
    request,
    account_id || '',
    withdrawal
  )

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
})

test("Test Instant Cash Transfer Transfers Locate Ict Report Locate Ict Report1", async () => {
  const result = await sdk.instantCashTransferICT.locateIctReport(process.env["CORRESPONDENT_ID"] ?? '', undefined, ProgramDateFilterProgram.BrokerPartner);

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
})
