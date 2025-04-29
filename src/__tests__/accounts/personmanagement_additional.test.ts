import { expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import {
  createLegalNaturalPerson,
  assignLargeTrader,
  createLegalEntity,
} from "./index";
import { beforeAll } from "vitest";

let lnp_id: string | undefined;
let assign_large_trader_id: string | undefined;
let legal_entity_id: string | undefined;

beforeAll(async () => {
  lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  await timeout(5000);
  assign_large_trader_id = await assignLargeTrader(lnp_id);
  if (typeof assign_large_trader_id !== "string") {
    throw new Error("assign_large_trader_id is undefined.");
  }
  await timeout(5000);
  legal_entity_id = await createLegalEntity();
  if (typeof legal_entity_id !== "string") {
    throw new Error("legal_entity_id is undefined.");
  }
  await timeout(5000);
}, 60000);

test("Person Management Accounts Create Legal Natural Person Create Legal Natural Person1", async () => {
  expect(lnp_id).not.toBe(undefined);
});

test("Person Management Accounts Get Legal Natural Person Get Legal Natural Person1", async () => {
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  const result = await sdk.personManagement.getLegalNaturalPerson(lnp_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Person Management Accounts Update Legal Natural Person update Legal Natural Person1", async () => {
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  const request: components.LegalNaturalPersonUpdate = {
    maritalStatus: components.LegalNaturalPersonUpdateMaritalStatus.Married,
  };
  const result = await sdk.personManagement.updateLegalNaturalPerson(
    request,
    lnp_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Person Management Accounts Assign Large Trader Assign Large Trader1", async () => {
  expect(assign_large_trader_id).not.toBe(undefined);
});

test("Person Management Accounts End Large Trader End Large Trader1", async () => {
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  const request: components.EndLargeTraderRequestCreate = {
    endReason: components.EndReason.EventReasonCreated,
  };
  const result = await sdk.personManagement.endLargeTraderLegalNaturalPerson(
    request,
    lnp_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Person Management Accounts Create Legal Entity Create Legal Entity1", async () => {
  expect(legal_entity_id).not.toBe(undefined);
});

test("Person Management Accounts Get Legal Entity Get Legal Entity1", async () => {
  if (typeof legal_entity_id !== "string") {
    throw new Error("legal_entity_id is undefined.");
  }
  const result = await sdk.personManagement.getLegalEntity(legal_entity_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Person Management Accounts Update Legal Entity Update Legal Entity1", async () => {
  if (typeof legal_entity_id !== "string") {
    throw new Error("legal_entity_id is undefined.");
  }
  const request: components.LegalEntityUpdate = {
    entityName: "John Doe",
  };
  const result = await sdk.personManagement.updateLegalEntity(
    request,
    legal_entity_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Person Management Accounts Assign Large Trader Legal Entity Assign Large Trader Legal Entity1", async () => {
  if (typeof legal_entity_id !== "string") {
    throw new Error("legal_entity_id is undefined.");
  }
  if (typeof assign_large_trader_id !== "string") {
    throw new Error("assign_large_trader_id is undefined.");
  }
  const request: components.AssignLargeTraderRequestCreate = {
    largeTraderId: assign_large_trader_id,
  };
  const result = await sdk.personManagement.assignLargeTraderLegalEntity(
    request,
    legal_entity_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Person Management Accounts End Large Trader Legal Entity End Large Trader Legal Entity1", async () => {
  if (typeof legal_entity_id !== "string") {
    throw new Error("legal_entity_id is undefined.");
  }
  const request: components.EndLargeTraderRequestCreate = {
    endReason: components.EndReason.EventReasonCreated,
  };
  const result = await sdk.personManagement.endLargeTrader(
    request,
    legal_entity_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});
