import { expect, test, beforeAll } from "vitest";
import { sdk } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import {
  createLegalNaturalPerson,
  createAccount,
  enrollAccount,
  affirmAgreement,
} from "../accounts";
import { createCheckWithdrawalSchedule } from "./index";

let account_id: string | undefined;

beforeAll(async () => {
  const lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  const enrollment_ids = await enrollAccount(account_id);
  if (typeof enrollment_ids !== "object") {
    throw new Error("enrollment_ids is undefined.");
  }
  await affirmAgreement(account_id, enrollment_ids);
}, 60000);

test("Test Check Withdrawal Schedules Create Check Withdrawal Schedule", async () => {
  const schedule_id = await createCheckWithdrawalSchedule(account_id || "");
  expect(typeof schedule_id).toBe("string");
  expect(schedule_id.length).greaterThan(0);
});

test("Test Check Withdrawal Schedules List Check Withdrawal Schedules", async () => {
  const result = await sdk.scheduleTransfers.listCheckWithdrawalSchedules(
    account_id || "",
  );
  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Check Withdrawal Schedules Get Check Withdrawal Schedule", async () => {
  const schedule_id = await createCheckWithdrawalSchedule(account_id || "");
  const result = await sdk.scheduleTransfers.getCheckWithdrawalSchedule(
    account_id || "",
    schedule_id,
  );
  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Check Withdrawal Schedules Update Check Withdrawal Schedule", async () => {
  const schedule_id = await createCheckWithdrawalSchedule(account_id || "");

  const request: components.CheckWithdrawalScheduleUpdate = {
    scheduleDetails: {
      amount: {
        value: "20.00",
      },
    },
  };

  const result = await sdk.scheduleTransfers.updateCheckWithdrawalSchedule(
    request,
    account_id || "",
    schedule_id,
    "schedule_details.amount",
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Check Withdrawal Schedules Cancel Check Withdrawal Schedule", async () => {
  const schedule_id = await createCheckWithdrawalSchedule(account_id || "");

  const request: components.CancelCheckWithdrawalScheduleRequestCreate = {
    name:
      "accounts/" +
      account_id +
      "/checkWithdrawalSchedules/" +
      schedule_id,
    comment: "canceled due to test",
  };

  const result = await sdk.scheduleTransfers.cancelCheckWithdrawalSchedule(
    request,
    account_id || "",
    schedule_id,
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});
