import { expect, test, beforeAll } from "vitest";
import { sdk } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import {
  createLegalNaturalPerson,
  createAccount,
  enrollAccount,
  affirmAgreement,
} from "../accounts";
import { withdrawal_account_id, createCashJournalSchedule } from "./index";

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

test("Test Cash Journal Schedules Create Cash Journal Schedule", async () => {
  const schedule_id = await createCashJournalSchedule(account_id || "");
  expect(typeof schedule_id).toBe("string");
  expect(schedule_id.length).greaterThan(0);
});

test("Test Cash Journal Schedules Get Cash Journal Schedule", async () => {
  const schedule_id = await createCashJournalSchedule(account_id || "");
  const result = await sdk.scheduleTransfers.getCashJournalSchedule(
    schedule_id,
  );
  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Cash Journal Schedules Search Cash Journal Schedules", async () => {
  await createCashJournalSchedule(account_id || "");
  const result = await sdk.scheduleTransfers.searchCashJournalSchedules({
    sourceAccount: withdrawal_account_id,
  });
  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Cash Journal Schedules Update Cash Journal Schedule", async () => {
  const schedule_id = await createCashJournalSchedule(account_id || "");

  const request: components.CashJournalScheduleUpdate = {
    scheduleDetails: {
      amount: {
        value: "20.00",
      },
    },
  };

  const result = await sdk.scheduleTransfers.updateCashJournalSchedule(
    request,
    schedule_id,
    "schedule_details.amount",
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Cash Journal Schedules Cancel Cash Journal Schedule", async () => {
  const schedule_id = await createCashJournalSchedule(account_id || "");

  const request: components.CancelCashJournalScheduleRequestCreate = {
    name: "cashJournalSchedules/" + schedule_id,
    comment: "canceled due to test",
  };

  const result = await sdk.scheduleTransfers.cancelCashJournalSchedule(
    request,
    schedule_id,
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});
