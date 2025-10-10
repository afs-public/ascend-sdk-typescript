import { expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import {
  createLegalNaturalPerson,
  createAccount,
  enrollAccount,
  affirmAgreement,
} from "../accounts";
import {
  createBankRelationship,
  correctMicroDeposits,
  verifyMicroDeposits,
  createScheduledAchDeposit,
  createScheduledAchWithdrawal,
  createScheduledWireWithdrawal,
} from "./index";
import { beforeAll } from "vitest";

let lnp_id: string | undefined;
let account_id: string | undefined;
let enrollment_ids: string[] | undefined;
let bank_relationship_id: string | undefined;
let microDeposits: string[] | undefined;

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
  bank_relationship_id = await createBankRelationship(account_id);
  if (typeof bank_relationship_id !== "string") {
    throw new Error("bank_relationship_id is undefined.");
  }
  microDeposits = await correctMicroDeposits(account_id, bank_relationship_id);
  if (typeof microDeposits !== "object") {
    throw new Error("microDeposits is undefined.");
  }
  await verifyMicroDeposits(account_id, bank_relationship_id, microDeposits);
}, 60000);

test("Test Schedule Transfers Transfers Create Ach Deposit Schedule Create Ach Deposit Schedule1", async () => {
  const scheduled_deposit_id = await createScheduledAchDeposit(
    account_id || "",
    bank_relationship_id || "",
  );

  expect(typeof scheduled_deposit_id).toBe("string");
  expect(scheduled_deposit_id.length).greaterThan(0);
});

test("Test Schedule Transfers Transfers List Ach Deposit Schedules List Ach Deposit Schedules1", async () => {
  const result = await sdk.scheduleTransfers.listAchDepositSchedules(
    account_id || "",
  );
  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Schedule Transfers Transfers Get Ach Deposit Schedule Get Ach Deposit Schedule1", async () => {
  const scheduled_deposit_id = await createScheduledAchDeposit(
    account_id || "",
    bank_relationship_id || "",
  );
  const result = await sdk.scheduleTransfers.getAchDepositSchedule(
    account_id || "",
    scheduled_deposit_id || "",
  );
  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Schedule Transfers Transfers Update Ach Deposit Schedule Update Ach Deposit Schedule1", async () => {
  const scheduled_deposit_id = await createScheduledAchDeposit(
    account_id || "",
    bank_relationship_id || "",
  );
  const request: components.AchDepositScheduleUpdate = {
    scheduleDetails: {
      amount: {
        value: "100",
      },
    },
  };

  const result = await sdk.scheduleTransfers.updateAchDepositSchedule(
    request,
    account_id || "",
    scheduled_deposit_id,
    "schedule_details.amount",
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Schedule Transfers Transfers Cancel Ach Deposit Schedule Cancel Ach Deposit Schedule1", async () => {
  const scheduled_deposit_id = await createScheduledAchDeposit(
    account_id || "",
    bank_relationship_id || "",
  );

  const request: components.CancelAchDepositScheduleRequestCreate = {
    name:
      "accounts/" + account_id + "/scheduleTransfers/" + scheduled_deposit_id,
  };

  const result = await sdk.scheduleTransfers.cancelAchDepositSchedule(
    request,
    account_id || "",
    scheduled_deposit_id,
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Schedule Transfers Transfers Create Ach Withdrawal Schedule Create Ach Deposit Withdrawal1", async () => {
  const withdrawal_id = await createScheduledAchWithdrawal(
    account_id || "",
    bank_relationship_id || "",
  );
  expect(withdrawal_id.length).greaterThan(0);
});

test("Test Schedule Transfers Transfers List Ach Withdrawal Schedules List Ach Withdrawal Schedules1", async () => {
  const result = await sdk.scheduleTransfers.listAchWithdrawalSchedules(
    account_id || "",
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Schedule Transfers Transfers Get Ach Withdrawal Schedule Get Ach Withdrawal Schedule1", async () => {
  const withdrawal_id = await createScheduledAchWithdrawal(
    account_id || "",
    bank_relationship_id || "",
  );

  const result = await sdk.scheduleTransfers.getAchWithdrawalSchedule(
    account_id || "",
    withdrawal_id,
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Schedule Transfers Transfers Update Ach Withdrawal Schedule Update Ach Withdrawal Schedule1", async () => {
  const withdrawal_id = await createScheduledAchWithdrawal(
    account_id || "",
    bank_relationship_id || "",
  );

  const request: components.AchWithdrawalScheduleUpdate = {
    scheduleDetails: {
      amount: {
        value: "100",
      },
    },
  };

  const result = await sdk.scheduleTransfers.updateAchWithdrawalSchedule(
    request,
    account_id || "",
    withdrawal_id,
    "schedule_details.amount",
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Schedule Transfers Transfers Cancel Ach Withdrawal Schedule Cancel Ach Withdrawal Schedule1", async () => {
  const withdrawal_id = await createScheduledAchWithdrawal(
    account_id || "",
    bank_relationship_id || "",
  );
  const request = {
    name: "accounts/" + account_id + "/scheduleTransfers/" + withdrawal_id,
  };

  const result = await sdk.scheduleTransfers.cancelAchWithdrawalSchedule(
    request,
    account_id || "",
    withdrawal_id,
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Schedule Transfers Transfers Create Wire Withdrawal Schedule Create Wire Withdrawal Schedule1", async () => {
  const scheduled_wire_withdrawal_id = await createScheduledWireWithdrawal(
    account_id || "",
  );

  expect(typeof scheduled_wire_withdrawal_id).toBe("string");
  expect(scheduled_wire_withdrawal_id.length).greaterThan(0);
});

test("Test Schedule Transfers Transfers List Wire Withdrawals Schedules List Wire Withdrawals Schedules1", async () => {
  const result = await sdk.scheduleTransfers.listWireWithdrawalSchedules(
    account_id || "",
  );
  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Schedule Transfers Transfers Get Wire Withdrawal Schedule Get Wire Withdrawal Schedule1", async () => {
  const withdrawal_id = await createScheduledWireWithdrawal(account_id || "");

  const result = await sdk.scheduleTransfers.getWireWithdrawalSchedule(
    account_id || "",
    withdrawal_id,
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Schedule Transfers Transfers Update Wire Withdrawal Schedule Update Wire Withdrawal Schedule1", async () => {
  const withdrawal_id = await createScheduledWireWithdrawal(account_id || "");

  const request: components.WireWithdrawalScheduleUpdate = {
    scheduleDetails: {
      amount: {
        value: "100",
      },
    },
  };

  const result = await sdk.scheduleTransfers.updateWireWithdrawalSchedule(
    request,
    account_id || "",
    withdrawal_id,
    "schedule_details.amount",
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Schedule Transfers Transfers Cancel Wire Withdrawal Schedule Cancel Wire Withdrawal Schedule1", async () => {
  const withdrawal_id = await createScheduledWireWithdrawal(account_id || "");
  const request = {
    name: "accounts/" + account_id + "/scheduleTransfers/" + withdrawal_id,
  };

  const result = await sdk.scheduleTransfers.cancelWireWithdrawalSchedule(
    request,
    account_id || "",
    withdrawal_id,
  );
  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Schedule Transfers Transfers List Schedule Summaries List Schedule Summaries1", async () => {
  const result = await sdk.scheduleTransfers.listScheduleSummaries();
  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});
