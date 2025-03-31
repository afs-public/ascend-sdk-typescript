import { expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import { createLegalNaturalPerson, createAccount } from "../accounts";
import { beforeAll } from "vitest";
import {
  createWireWithdrawal,
  wire_deposit_id,
  withdrawal_account_id,
} from "./index";
import { CancelWireWithdrawalRequestCreate } from "../../models/components";

let lnp_id: string | undefined;
let account_id: string | undefined;
let wire_withdrawal_id: string | undefined;

beforeAll(async () => {
  lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  await timeout(5000);
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  await timeout(5000);
  wire_withdrawal_id = await createWireWithdrawal(account_id);
}, 60000);

test("Wires Transfers Create Wire Withdrawal Create Wire Withdrawal1", async () => {
  expect(wire_withdrawal_id).not.toBe(undefined);
});

test("Wires Transfers Get Wire Withdrawal Get Wire Withdrawal1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof wire_withdrawal_id !== "string") {
    throw new Error("wire_withdrawal_id is undefined.");
  }
  const result = await sdk.wires.getWireWithdrawal(
    account_id,
    wire_withdrawal_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Wires Cancel Wire Withdrawal Cancel Wre Withdrawal1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof wire_withdrawal_id !== "string") {
    throw new Error("wire_withdrawal_id is undefined.");
  }
  const request: CancelWireWithdrawalRequestCreate = {
    name: "accounts/" + account_id + "/wireWithdrawals/" + wire_withdrawal_id,
    reason: "User Request",
  };
  const result = await sdk.wires.cancelWireWithdrawal(
    request,
    account_id,
    wire_withdrawal_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Wires Transfers Get Wire Deposit Get Wire Deposit1", async () => {
  if (typeof withdrawal_account_id !== "string") {
    throw new Error("withdrawal_account_id is undefined.");
  }
  if (typeof wire_deposit_id !== "string") {
    throw new Error("wire_deposit_id is undefined.");
  }
  const result = await sdk.wires.getWireDeposit(
    withdrawal_account_id,
    wire_deposit_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});
