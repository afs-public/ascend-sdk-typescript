import { expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import { createLegalNaturalPerson, createAccount } from "../accounts";
import { beforeAll } from "vitest";
import {
  createCashJournal,
  deceased_account_id,
  withdrawal_account_id,
} from "./index";
import {
  CancelCashJournalRequestCreate,
  CheckPartyTypeRequestCreate,
  RetrieveCashJournalConstraintsRequestCreate,
} from "../../models/components";

let lnp_id: string | undefined;
let account_id: string | undefined;
let journal_id: string | undefined;

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
  journal_id = await createCashJournal(account_id);
}, 60000);

test("Cash Journals Transfers Create Cash Journal Create Cash Journal1", async () => {
  expect(journal_id).not.toBe(undefined);
});

test("Cash Journals Transfers Get Cash Journal Get Cash Journal1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof journal_id !== "string") {
    throw new Error("journal_id is undefined.");
  }
  const result = await sdk.journals.getCashJournal(journal_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Cash Journals Transfers Cancel Cash Journal Cancel Cash Journal1", async () => {
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  if (typeof journal_id !== "string") {
    throw new Error("journal_id is undefined.");
  }
  const request: CancelCashJournalRequestCreate = {
    name: "cashJournals/" + journal_id,
    reason: "Test cancel cash journal",
  };
  const result = await sdk.journals.cancelCashJournal(request, journal_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Cash Journals Transfers Retrieve Cash Journal Party Retrieve Cash Journal Party1", async () => {
  if (typeof deceased_account_id !== "string") {
    throw new Error("deceased_account_id is undefined.");
  }
  if (typeof withdrawal_account_id !== "string") {
    throw new Error("withdrawal_account_id is undefined.");
  }

  const request: CheckPartyTypeRequestCreate = {
    destinationAccount: "accounts/" + deceased_account_id,
    sourceAccount: "accounts/" + withdrawal_account_id,
  };
  const result = await sdk.journals.checkPartyType(request);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Cash Journals Transfers Retrieve Cash Journal Constraints Retrieve Cash Journal Constraints1", async () => {
  const request: RetrieveCashJournalConstraintsRequestCreate = {
    destinationAccount: "accounts/" + deceased_account_id,
    sourceAccount: "accounts/" + withdrawal_account_id,
  };
  const result = await sdk.journals.retrieveCashJournalConstraints(request);
  expect(result.httpMeta.response.status).toBe(200);
});
