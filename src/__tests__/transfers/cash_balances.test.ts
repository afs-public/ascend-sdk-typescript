import {expect, test} from "vitest";
import {sdk, timeout} from "../utils/sdk";
import {createLegalNaturalPerson, createAccount} from "../accounts";
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

test("Cash Balances Transfers Cash Balances Get Cash Balances Get Cash Balances1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  const result = await sdk.cashBalances.calculateCashBalance(account_id);
  expect(result.httpMeta.response.status).toBe(200);
});

