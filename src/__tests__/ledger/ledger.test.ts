import {expect, test} from "vitest";
import {sdk} from "../utils/sdk";
import {entryID, activityID} from "./index";
import {withdrawal_account_id} from "../transfers";
import {beforeAll} from "vitest";

let entry_id: string | undefined;
let activity_id: string | undefined;

beforeAll(async () => {
  entry_id = await entryID(withdrawal_account_id);
  activity_id = await activityID(withdrawal_account_id);
}, 60000);

test("Ledger Ledger List Entries List Entries1", async () => {
  expect(entry_id).not.toBe(undefined);
});

test("Ledger Ledger List Activities List Activities1", async () => {
  expect(activity_id).not.toBe(undefined);
});

test("Ledger Ledger List Positions List Positions1", async () => {
  const result = await sdk.ledger.listPositions(withdrawal_account_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Ledger Ledger Get Activity Get Activity1", async () => {
  if (typeof activity_id !== "string") {
    throw new Error('activity_id is undefined.');
  }
  const result = await sdk.ledger.getActivity(withdrawal_account_id, activity_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Ledger Ledger Get Entry Get Entry1", async () => {
  if (typeof entry_id !== "string") {
    throw new Error('entry_id is undefined.');
  }
  const result = await sdk.ledger.getEntry(withdrawal_account_id, entry_id);
  expect(result.httpMeta.response.status).toBe(200);
});
