import { expect, test, beforeAll } from "vitest";
import { sdk } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import * as errors from "@apexfintechsolutions/ascend-sdk/models/errors";
import {
  createLegalNaturalPerson,
  createAccount,
  enrollAccount,
  affirmAgreement,
} from "../accounts";
import { withdrawal_account_id } from "./index";

test("Test Check Deposits Simulate Create Check Deposit", async () => {
  const request: components.SimulateCreateCheckDepositRequestCreate = {
    amount: {
      value: "100",
    },
    parent: withdrawal_account_id,
  };

  const result = await sdk.testSimulation.simulateCreateCheckDeposit(
    request,
    withdrawal_account_id,
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.checkDeposit).toBeDefined();
  expect(result.checkDeposit?.name).toBeDefined();
});

test("Test Check Deposits Get Check Deposit", async () => {
  // Create a check deposit first
  const createRequest: components.SimulateCreateCheckDepositRequestCreate = {
    amount: {
      value: "100",
    },
    parent: withdrawal_account_id,
  };

  const createResult = await sdk.testSimulation.simulateCreateCheckDeposit(
    createRequest,
    withdrawal_account_id,
  );

  expect(createResult.checkDeposit?.name).toBeDefined();
  const checkDepositId =
    createResult.checkDeposit?.name?.split("/").at(-1) || "";

  const result = await sdk.checks.getCheckDeposit(
    withdrawal_account_id,
    checkDepositId,
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Check Deposits Force Approve Check Deposit", async () => {
  // Create a check deposit first
  const createRequest: components.SimulateCreateCheckDepositRequestCreate = {
    amount: {
      value: "100",
    },
    parent: withdrawal_account_id,
  };

  const createResult = await sdk.testSimulation.simulateCreateCheckDeposit(
    createRequest,
    withdrawal_account_id,
  );

  expect(createResult.checkDeposit?.name).toBeDefined();
  const checkDepositId =
    createResult.checkDeposit?.name?.split("/").at(-1) || "";

  const request: components.ForceApproveCheckDepositRequestCreate = {
    name: `accounts/${withdrawal_account_id}/checkDeposits/${checkDepositId}`,
  };

  try {
    const result = await sdk.testSimulation.forceApproveCheckDeposit(
      request,
      withdrawal_account_id,
      checkDepositId,
    );

    expect(result).toBeDefined();
    expect(result.httpMeta.response.status).toBe(200);
  } catch (err) {
    if (err instanceof errors.Status) {
      expect(err.code).toBe(3);
      expect(err.message.toLowerCase()).toContain("does not need review");
    } else {
      // Check deposit was auto-approved, force approve returns an unexpected error
      expect((err as Error).message.toLowerCase()).toContain("unexpected");
    }
  }
});
