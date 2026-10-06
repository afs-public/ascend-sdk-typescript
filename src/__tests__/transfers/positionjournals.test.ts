import { beforeAll, expect, test } from "vitest";
import { sdk, retryOnTransientError } from "../utils/sdk";
import { createEnrolledAccount } from "../accounts";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import * as errors from "@apexfintechsolutions/ascend-sdk/models/errors";
import crypto from "crypto";

let source_account_id: string | undefined;
let destination_account_id: string | undefined;
let position_journal_id: string | undefined;

beforeAll(async () => {
  source_account_id = await createEnrolledAccount();
  destination_account_id = await createEnrolledAccount();
}, 120000);

test("Position Journals Create Position Journal", async () => {
  if (source_account_id === undefined || destination_account_id === undefined) {
    throw new Error("account_id is undefined.");
  }

  const request: components.PositionJournalCreate = {
    clientTransferId: crypto.randomUUID(),
    destinationAccount: `accounts/${destination_account_id}`,
    identifier: "AAPL",
    identifierType: components.IdentifierType.Symbol,
    quantity: {
      value: "1.0",
    },
    sourceAccount: `accounts/${source_account_id}`,
    type: components.PositionJournalCreateType.Reward,
    fairMarketValue: {
      value: "150.00",
    },
    description: "Stock reward for testing",
  };

  const result = await retryOnTransientError(() =>
    sdk.positionJournals.createPositionJournal(request),
  );
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.positionJournal).toBeDefined();
  expect(result.positionJournal?.name).toBeDefined();

  if (result.positionJournal?.name) {
    position_journal_id = result.positionJournal.name.split("/").at(-1);
  }
}, 60000);

test("Position Journals Get Position Journal", async () => {
  if (position_journal_id === undefined) {
    throw new Error("position_journal_id is undefined.");
  }

  const result = await sdk.positionJournals.getPositionJournal(position_journal_id);
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.positionJournal).toBeDefined();
});

test("Position Journals Cancel Position Journal", async () => {
  if (position_journal_id === undefined) {
    throw new Error("position_journal_id is undefined.");
  }

  const request: components.CancelPositionJournalRequestCreate = {
    name: `positionJournals/${position_journal_id}`,
    reason: "Cancel position journal for testing",
  };

  const result = await sdk.positionJournals.cancelPositionJournal(
    request,
    position_journal_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.positionJournal).toBeDefined();
});

test("Test Simulation Force Approve Position Journal", async () => {
  if (source_account_id === undefined || destination_account_id === undefined) {
    throw new Error("account_id is undefined.");
  }

  const createRequest: components.PositionJournalCreate = {
    clientTransferId: crypto.randomUUID(),
    destinationAccount: `accounts/${destination_account_id}`,
    identifier: "AAPL",
    identifierType: components.IdentifierType.Symbol,
    quantity: {
      value: "1.0",
    },
    sourceAccount: `accounts/${source_account_id}`,
    type: components.PositionJournalCreateType.Reward,
    fairMarketValue: {
      value: "150.00",
    },
    description: "Stock reward for testing",
  };

  const createResult = await retryOnTransientError(() =>
    sdk.positionJournals.createPositionJournal(createRequest),
  );
  expect(createResult.positionJournal).toBeDefined();
  expect(createResult.positionJournal?.name).toBeDefined();

  const journalId = createResult.positionJournal?.name?.split("/").at(-1);
  expect(journalId).toBeDefined();

  const forceApproveRequest: components.ForceApprovePositionJournalRequestCreate = {
    name: `positionJournals/${journalId}`,
  };

  try {
    const result = await sdk.testSimulation.forceApprovePositionJournal(
      forceApproveRequest,
      journalId!,
    );
    expect(result).toBeDefined();
    expect(result.httpMeta.response.status).toBe(200);
    expect(result.positionJournal).toBeDefined();
  } catch (status) {
    expect(status).toBeInstanceOf(errors.Status);
    if (status instanceof errors.Status) {
      expect(status.code).toBe(3);
      expect(status.message.toLowerCase()).toContain("does not need review");
    }
  }
}, 60000);

test("Test Simulation Force Reject Position Journal", async () => {
  if (source_account_id === undefined || destination_account_id === undefined) {
    throw new Error("account_id is undefined.");
  }

  const createRequest: components.PositionJournalCreate = {
    clientTransferId: crypto.randomUUID(),
    destinationAccount: `accounts/${destination_account_id}`,
    identifier: "AAPL",
    identifierType: components.IdentifierType.Symbol,
    quantity: {
      value: "1.0",
    },
    sourceAccount: `accounts/${source_account_id}`,
    type: components.PositionJournalCreateType.Reward,
    fairMarketValue: {
      value: "150.00",
    },
    description: "Stock reward for testing",
  };

  const createResult = await retryOnTransientError(() =>
    sdk.positionJournals.createPositionJournal(createRequest),
  );
  expect(createResult.positionJournal).toBeDefined();
  expect(createResult.positionJournal?.name).toBeDefined();

  const journalId = createResult.positionJournal?.name?.split("/").at(-1);
  expect(journalId).toBeDefined();

  const forceRejectRequest: components.ForceRejectPositionJournalRequestCreate = {
    name: `positionJournals/${journalId}`,
    reason: "Force reject for testing",
  };

  try {
    const result = await sdk.testSimulation.forceRejectPositionJournal(
      forceRejectRequest,
      journalId!,
    );
    expect(result).toBeDefined();
    expect(result.httpMeta.response.status).toBe(200);
    expect(result.positionJournal).toBeDefined();
  } catch (status) {
    expect(status).toBeInstanceOf(errors.Status);
    if (status instanceof errors.Status) {
      expect(status.code).toBe(3);
    }
  }
}, 60000);
