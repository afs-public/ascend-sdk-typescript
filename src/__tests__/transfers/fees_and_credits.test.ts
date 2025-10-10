import { expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import {
  createLegalNaturalPerson,
  createAccount,
  enrollAccount,
  affirmAgreement,
} from "../accounts";
import { createFee, createCredit } from "./index";
import { beforeAll } from "vitest";

let lnp_id: string | undefined;
let account_id: string | undefined;
let enrollment_ids: string[] | undefined;
let fee_id: string | undefined;
let credit_id: string | undefined;

beforeAll(async () => {
  lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  enrollment_ids = await enrollAccount(account_id);
  if (typeof enrollment_ids !== "object") {
    throw new Error("enrollment_ids is undefined.");
  }
  affirmAgreement(account_id, enrollment_ids);
  fee_id = await createFee(account_id);
  if (typeof fee_id !== "string") {
    throw new Error("fee_id is undefined.");
  }
  credit_id = await createCredit(account_id);
  if (typeof credit_id !== "string") {
    throw new Error("credit_id is undefined.");
  }
}, 60000);

test("Fees and Credits Transfers Create Fee Create Fee1", async () => {
  expect(fee_id).not.toBe(undefined);
});

test("Fees and Credits Transfers Get Fee Get Fee1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof fee_id !== "string") {
    throw new Error("fee_id is undefined.");
  }
  const result = await sdk.feesAndCredits.getFee(account_id, fee_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Fees and Credits Transfers Cancel Fee Cancel Fee1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof fee_id !== "string") {
    throw new Error("fee_id is undefined.");
  }
  const request: components.CancelFeeRequestCreate = {
    name: `accounts/${account_id}/feesAndCredits/${fee_id}`,
  };
  const result = await sdk.feesAndCredits.cancelFee(
    request,
    account_id,
    fee_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Fees and Credits Transfers Create Credit Create Credit1", async () => {
  expect(credit_id).not.toBe(undefined);
});

test("Fees and Credits Transfers Get Credit Get Credit1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof credit_id !== "string") {
    throw new Error("credit_id is undefined.");
  }
  const result = await sdk.feesAndCredits.getCredit(account_id, credit_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Fees and Credits Transfers Cancel Credit Cancel Credit1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof credit_id !== "string") {
    throw new Error("credit_id is undefined.");
  }
  const request: components.CancelCreditRequestCreate = {
    name: `accounts/${account_id}/feesAndCredits/${credit_id}`,
  };
  const result = await sdk.feesAndCredits.cancelCredit(
    request,
    account_id,
    credit_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});
