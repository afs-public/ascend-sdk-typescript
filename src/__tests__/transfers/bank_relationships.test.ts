import { expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import * as errors from "@apexfintechsolutions/ascend-sdk/models/errors";
import {
  createLegalNaturalPerson,
  createAccount,
  enrollAccount,
  affirmAgreement,
} from "../accounts";
import {
  createBankRelationship,
  failingMicroDeposits,
  correctMicroDeposits,
} from "./index";
import { beforeAll } from "vitest";

let lnp_id: string | undefined;
let account_id: string | undefined;
let reuse_account_id: string | undefined;
let enrollment_ids: string[] | undefined;
let bank_relationship_id: string | undefined;

beforeAll(async () => {
  lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  reuse_account_id = await createAccount(lnp_id);
  if (typeof reuse_account_id !== "string") {
    throw new Error("reissue_account_id is undefined.");
  }
  enrollment_ids = await enrollAccount(account_id);
  if (typeof enrollment_ids !== "object") {
    throw new Error("enrollment_ids is undefined.");
  }
  affirmAgreement(account_id, enrollment_ids);
  bank_relationship_id = await createBankRelationship(account_id);
  if (typeof bank_relationship_id !== "string") {
    throw new Error("bank_relationship_id is undefined.");
  }
}, 60000);

test("Bank Relationships Transfers Create Bank Relationships Create Bank Relationships1", async () => {
  expect(bank_relationship_id).not.toBe(undefined);
});

test("Bank Relationships Transfers List Bank Relationships List Bank Relationships1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  const result = await sdk.bankRelationships.listBankRelationships(account_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Bank Relationships Transfers Get Bank Relationships Get Bank Relationships1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof bank_relationship_id !== "string") {
    throw new Error("bank_relationship_id is undefined.");
  }
  const result = await sdk.bankRelationships.getBankRelationship(
    account_id,
    bank_relationship_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Bank Relationships Transfers Update Bank Relationships Update Bank Relationships1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof bank_relationship_id !== "string") {
    throw new Error("bank_relationship_id is undefined.");
  }
  const result = await sdk.bankRelationships.updateBankRelationship(
    {
      nickname: "My Primary Bank",
    },
    account_id,
    bank_relationship_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Bank Relationships Transfers Reissue Micro Deposits Reissue Micro Deposits1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof bank_relationship_id !== "string") {
    throw new Error("bank_relationship_id is undefined.");
  }
  const failing_micro_deposits = await failingMicroDeposits(
    account_id,
    bank_relationship_id,
  );
  if (typeof failing_micro_deposits !== "object") {
    throw new Error("failing_micro_deposits is undefined.");
  }
  const request: components.VerifyMicroDepositsRequestCreate = {
    amounts: {
      amount1: {
        value: failing_micro_deposits[0],
      },
      amount2: {
        value: failing_micro_deposits[1],
      },
    },
    name: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
  };
  const max_attempts = 3;
  let attempts = 0;
  while (attempts < max_attempts) {
    attempts++;
    try {
      await sdk.bankRelationships.verifyMicroDeposits(
        request,
        account_id,
        bank_relationship_id,
      );
    } catch (error) {
      if (error instanceof errors.SDKError) {
        throw error;
      }
    }
  }

  const reissue_request: components.ReissueMicroDepositsRequestCreate = {
    name: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
  };
  const result = await sdk.bankRelationships.reissueMicroDeposits(
    reissue_request,
    account_id,
    bank_relationship_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Bank Relationships Transfers Verify Micro Deposits Verify Micro Deposits1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof bank_relationship_id !== "string") {
    throw new Error("bank_relationship_id is undefined.");
  }
  const correct_micro_deposits = await correctMicroDeposits(
    account_id,
    bank_relationship_id,
  );
  if (typeof correct_micro_deposits !== "object") {
    throw new Error("correct_micro_deposits is undefined.");
  }
  const request: components.VerifyMicroDepositsRequestCreate = {
    amounts: {
      amount1: {
        value: correct_micro_deposits[0],
      },
      amount2: {
        value: correct_micro_deposits[1],
      },
    },
    name: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
  };

  const result = await sdk.bankRelationships.verifyMicroDeposits(
    request,
    account_id,
    bank_relationship_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Bank Relationships Transfers Reuse Bank Relationships Reuse Bank Relationships1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof reuse_account_id !== "string") {
      throw new Error("reuse_account_id is undefined.");
  }
  if (typeof bank_relationship_id !== "string") {
      throw new Error("bank_relationship_id is undefined.");
  }
  const request: components.ReuseBankRelationshipRequestCreate = {
      parent: `accounts/${account_id}`,
      sourceBankRelationship: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
  };

  const result = await sdk.bankRelationships.reuseBankRelationship(
      request,
      reuse_account_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Bank Relationships Transfers Cancel Bank Relationships Cancel Bank Relationships1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof bank_relationship_id !== "string") {
    throw new Error("bank_relationship_id is undefined.");
  }
  const request: components.CancelBankRelationshipRequestCreate = {
    name: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
    comment: "Canceling Bank User Request",
  };
  const result = await sdk.bankRelationships.cancelBankRelationship(
    request,
    account_id,
    bank_relationship_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});
