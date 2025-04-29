import { beforeAll, expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import { createAccount, createLegalNaturalPerson } from "../accounts";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import {
  Mechanism,
  RetrieveDistributionConstraintsRequestCreateMechanism,
} from "@apexfintechsolutions/ascend-sdk/models/components";

let lnp_id: string | undefined;
let account_id: string | undefined;

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
}, 60000);

test("Retirements Transfers List Contribution Summaries List Contribution Summaries1", async () => {
  if (account_id === undefined) {
    throw new Error("account_id is undefined.");
  }
  const result = await sdk.retirements.listContributionSummaries(account_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Retirements Transfers Retrieve Contribution Constraints Retrieve Contribution Constraints1", async () => {
  if (account_id === undefined) {
    throw new Error("account_id is undefined.");
  }
  const request: components.RetrieveContributionConstraintsRequestCreate = {
    mechanism: Mechanism.Ach,
    name: "accounts/" + account_id,
  };
  const result = await sdk.retirements.retrieveContributionConstraints(
    request,
    account_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Retirements Transfers Retrieve Distribution Constraints Retrieve Distribution Constraints", async () => {
  if (account_id === undefined) {
    throw new Error("account_id is undefined.");
  }
  const request: components.RetrieveDistributionConstraintsRequestCreate = {
    mechanism: RetrieveDistributionConstraintsRequestCreateMechanism.Ach,
    name: "accounts/" + account_id,
  };
  const result = await sdk.retirements.retrieveDistributionConstraints(
    request,
    account_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Retirements Transfers List Distribution Summaries List Distribution Summaries1", async () => {
  const result = await sdk.retirements.listDistributionSummaries(
    account_id || "",
  );
  expect(result.httpMeta.response.status).toBe(200);
});
