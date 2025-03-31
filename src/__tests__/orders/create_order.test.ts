import {expect, test} from "vitest";
import {sdk, timeout} from "../utils/sdk";
import * as components from "../../models/components";
import {createLegalNaturalPerson, createAccount, enrollAccount, affirmAgreement} from "../accounts";
import {createOrder} from "./index";
import {beforeAll} from "vitest";

let lnp_id: string | undefined;
let account_id: string | undefined;
let enrollment_ids: string[] | undefined;
let created_order_id: string | undefined;
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
  enrollment_ids = await enrollAccount(account_id);
  if (typeof enrollment_ids !== "object") {
    throw new Error('enrollment_ids is undefined.');
  }
  await timeout(5000);
  affirmAgreement(account_id, enrollment_ids);
  await timeout(5000);
  created_order_id = await createOrder(account_id);
  if (typeof created_order_id !== "string") {
    throw new Error('created_order_id is undefined.');
  }
  await timeout(5000);
}, 60000);

test("Create Order Orders Create Order Create Order1", async () => {
  expect(created_order_id).not.toBe(undefined);
});

test("Create Order Orders Get Order Get Order1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof created_order_id !== "string") {
    throw new Error('created_order_id is undefined.');
  }
  const result = await sdk.createOrder.getOrder(account_id, created_order_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Create Order Orders Cancel Order Cancel Order1", async () => {
  if (typeof account_id !== "string") {
    throw new Error('account_id is undefined.');
  }
  if (typeof created_order_id !== "string") {
    throw new Error('created_order_id is undefined.');
  }
  const request: components.CancelOrderRequestCreate = {
    name: `accounts/${account_id}/orders/${created_order_id}`
  }
  const result = await sdk.createOrder.cancelOrder(request, account_id, created_order_id);
  expect(result.httpMeta.response.status).toBe(200);
});
