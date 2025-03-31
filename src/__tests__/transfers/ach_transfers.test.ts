import {expect, test} from "vitest";
import {sdk, timeout} from "../utils/sdk";
import * as components from "../../models/components";
import {createLegalNaturalPerson, createAccount, enrollAccount, affirmAgreement} from "../accounts";
import {createBankRelationship, correctMicroDeposits, verifyMicroDeposits, createACHDeposit, createACHWithdrawal} from "./index";
import {beforeAll} from "vitest";

let lnp_id: string | undefined;
let account_id: string | undefined;
let enrollment_ids: string[] | undefined;
let bank_relationship_id: string | undefined;
let microDeposits: string[] | undefined;
let ach_deposit_id: string | undefined;
let ach_withdrawal_id: string | undefined;

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
  bank_relationship_id = await createBankRelationship(account_id);
  if (typeof bank_relationship_id !== "string") {
    throw new Error('bank_relationship_id is undefined.');
  }
  await timeout(5000);
  microDeposits = await correctMicroDeposits(account_id, bank_relationship_id);
  if (typeof microDeposits !== "object") {
    throw new Error('microDeposits is undefined.');
  }
  await timeout(5000);
  await verifyMicroDeposits(account_id, bank_relationship_id, microDeposits);
  await timeout(5000);
  ach_deposit_id = await createACHDeposit(account_id, bank_relationship_id);
  if (typeof ach_deposit_id !== "string") {
    throw new Error('ach_deposit_id is undefined.');
  }
  await timeout(5000);
  ach_withdrawal_id = await createACHWithdrawal(account_id, bank_relationship_id);
  if (typeof ach_withdrawal_id !== "string") {
    throw new Error('ach_withdrawal_id is undefined.');
  }
  await timeout(5000);
}, 60000);

test("ACH Transfers Transfers Create ACH Deposit Create ACH Deposit1", async () => {
  expect(ach_deposit_id).not.toBe(undefined);
});

test("ACH Transfers Transfers Get ACH Deposit Get ACH Deposit1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof ach_deposit_id !== "string") {
    throw new Error('ach_deposit_id is undefined.');
  }
  const result = await sdk.achTransfers.getAchDeposit(account_id, ach_deposit_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("ACH Transfers Transfers Cancel ACH Deposit Cancel ACH Deposit1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof ach_deposit_id !== "string") {
    throw new Error('ach_deposit_id is undefined.');
  }
  const request: components.CancelAchDepositRequestCreate = {
    name: `accounts/${account_id}/achTransfers/${ach_deposit_id}`
  }
  const result = await sdk.achTransfers.cancelAchDeposit(request, account_id, ach_deposit_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("ACH Transfers Transfers Create ACH Withdrawal Create ACH Withdrawal1", async () => {
  expect(ach_withdrawal_id).not.toBe(undefined);
});

test("ACH Transfers Transfers Get ACH Withdrawal Get ACH Withdrawal1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof ach_withdrawal_id !== "string") {
    throw new Error('ach_withdrawal_id is undefined.');
  }
  const result = await sdk.achTransfers.getAchWithdrawal(account_id, ach_withdrawal_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("ACH Transfers Transfers Cancel ACH Withdrawal Cancel ACH Withdrawal1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof ach_withdrawal_id !== "string") {
    throw new Error('ach_withdrawal_id is undefined.');
  }
  const request: components.CancelAchWithdrawalRequestCreate = {
    name: `accounts/${account_id}/achTransfers/${ach_withdrawal_id}`
  }
  const result = await sdk.achTransfers.cancelAchWithdrawal(request, account_id, ach_withdrawal_id);
  expect(result.httpMeta.response.status).toBe(200);
});
