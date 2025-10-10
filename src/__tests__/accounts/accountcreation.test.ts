import {expect, test} from "vitest";
import {sdk, timeout} from "../utils/sdk";
import {createLegalNaturalPerson, createAccount} from "./index";
import {beforeAll} from "vitest";

let lnp_id: string | undefined;
let account_id: string | undefined;

beforeAll(async () => {
  lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error('lnp_id is undefined.');
  }
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
}, 60000);

test("Account Creation Accounts Create Account Create Account1", async () => {
  expect(account_id).not.toBe(undefined);
});

test("Account Creation Accounts Get Account Get Account1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  const result = await sdk.accountCreation.getAccount(account_id);
  expect(result.httpMeta.response.status).toBe(200);
});
