import {expect, test} from "vitest";
import {sdk, timeout} from "../utils/sdk";
import * as components from "../../models/components";
import {createLegalNaturalPerson, createAccount, createLegalEntity, addParty, replaceParty, createTrustedContact, createInterestedParty, createRestrictionCode} from "./index";
import {beforeAll} from "vitest";

let lnp_id: string | undefined;
let account_id: string | undefined;
let legal_entity_id: string | undefined;
let party_id: string | undefined;
let replace_party_id: string | undefined;
let trusted_contact_id: string | undefined;
let interested_party_id: string | undefined;
let restriction_code_id: string | undefined;

beforeAll(async () => {
  lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error('lnp_id is undefined.');
  }
  await timeout(5000);
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  await timeout(5000);
  legal_entity_id = await createLegalEntity();
  if (typeof legal_entity_id !== "string") {
    throw new Error('legal_entity_id is undefined.');
  }
  await timeout(5000);
  party_id = await addParty(account_id, legal_entity_id);
  if (typeof party_id !== "string") {
    throw new Error('party_id is undefined.');
  }
  await timeout(5000);
  replace_party_id = await replaceParty(account_id, lnp_id, party_id);
  if (typeof replace_party_id !== "string") {
    throw new Error('replace_party_id is undefined.');
  }
  await timeout(5000);
  trusted_contact_id = await createTrustedContact(account_id);
  if (typeof trusted_contact_id !== "string") {
    throw new Error('trusted_contact_id is undefined.');
  }
  await timeout(5000);
  interested_party_id = await createInterestedParty(account_id);
  if (typeof interested_party_id !== "string") {
    throw new Error('interested_party_id is undefined.');
  }
  await timeout(5000);
  restriction_code_id = await createRestrictionCode(account_id);
  if (typeof restriction_code_id !== "string") {
    throw new Error('restriction_code_id is undefined.');
  }
  await timeout(5000);
}, 60000);

test("Account Management Accounts Update Account Update Account1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  const request : components.AccountRequestUpdate = {
    catAccountHolderType: components.AccountRequestUpdateCatAccountHolderType.IIndividual,
  }
  const result = await sdk.accountManagement.updateAccount(request, account_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Account Management Accounts Add Party Add Party1", async () => {
  expect(party_id).not.toBe(undefined);
});

test("Account Management Accounts Update Party Update Party1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof party_id !== "string") {
    throw new Error('party_id is undefined.');
  }
  const request: components.PartyRequestUpdate = {
    emailAddress: "email@example.com",
  }
  const result = await sdk.accountManagement.updateParty(request, account_id, party_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Account Management Accounts Replace Party Replace Party1", async () => {
  expect(replace_party_id).not.toBe(undefined);
});

test("Account Management Accounts Remove Party Remove Party1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof replace_party_id !== "string") {
    throw new Error('replace_party_id is undefined.');
  }
  const request: components.RemovePartyRequestCreate = {
    authorizedByPartyIds: [
      "8096110d-fb55-4f9d-b883-b84f0b70d3ea",
      "8096110d-fb55-4f9d-b883-b84f0b70d3rb",
    ],
    name: "accounts/" + account_id + "/parties/" + replace_party_id,
  }
  const result = await sdk.accountManagement.removeParty(request, account_id, replace_party_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Account Management Accounts Create Trusted Contact Create Trusted Contact1", async () => {
  expect(trusted_contact_id).not.toBe(undefined);
});

test("Account Management Accounts Update Trusted Contact Update Trusted Contact1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof trusted_contact_id !== "string") {
    throw new Error('trusted_contact_id is undefined.');
  }
  const request: components.TrustedContactUpdate = {
    emailAddress: "email@email.com",
  }
  const result = await sdk.accountManagement.updateTrustedContact(request, account_id, trusted_contact_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Account Management Accounts Delete Trusted Contact Delete Trusted Contact1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof trusted_contact_id !== "string") {
    throw new Error('trusted_contact_id is undefined.');
  }
  const result = await sdk.accountManagement.deleteTrustedContact(account_id, trusted_contact_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Account Management Accounts Create Interested Party Create Interested Party1", async () => {
  expect(interested_party_id).not.toBe(undefined);
});

test("Account Management Accounts Update Interested Party Update Interested Party1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof interested_party_id !== "string") {
    throw new Error('interested_party_id is undefined.');
  }
  const request: components.InterestedPartyUpdate = {
    recipient: "John Doe",
  }
  const result = await sdk.accountManagement.updateInterestedParty(request, account_id, interested_party_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Account Management Accounts Delete Interested Party Delete Interested Party1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof interested_party_id !== "string") {
    throw new Error('interested_party_id is undefined.');
  }
  const result = await sdk.accountManagement.deleteInterestedParty(account_id, interested_party_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Account Management Accounts List Available Restrictions List Available Restrictions1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  const result = await sdk.accountManagement.listAvailableRestrictions(account_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Account Management Accounts Create Restriction Code Create Restriction Code1", async () => {
  expect(restriction_code_id).not.toBe(undefined);
});

test("Account Management Accounts End Restriction Code End Restriction Code1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof restriction_code_id !== "string") {
    throw new Error('restriction_code_id is undefined.');
  }
  const request: components.EndRestrictionRequestCreate = {
    reason: "Some reason for removing",
  }
  const result = await sdk.accountManagement.endRestriction(request, account_id, restriction_code_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Account Management Accounts Close Account Close Account1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  const request: components.CloseAccountRequestCreate = {
  }
  const result = await sdk.accountManagement.closeAccount(request, account_id);
  expect(result.httpMeta.response.status).toBe(200);
});



