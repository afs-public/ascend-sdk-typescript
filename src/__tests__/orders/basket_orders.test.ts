import { expect, test } from "vitest";
import { sdk } from "../utils/sdk";
import * as components from "../../models/components";
import { beforeAll } from "vitest";
import { createBasketId, withdrawal_account_id } from "./index";
import crypto from "crypto";

let basket_order_id: string | undefined;

beforeAll(async () => {
  basket_order_id = await createBasketId();
}, 60000);

test("Basket Orders Orders Create Basket Create Basket1", async () => {
  expect(basket_order_id).not.toBe(undefined);
});

test("Basket Orders Orders Add Orders Add Orders1", async () => {
  if (typeof basket_order_id !== "string") {
    throw new Error("basket_order_id is undefined.");
  }

  const request: components.AddOrdersRequestCreate = {
    name:
      "correspondents/" +
      process.env["CORRESPONDENT_ID"] +
      "/baskets/" +
      basket_order_id,
    basketOrders: [
      {
        accountId: withdrawal_account_id,
        assetType: components.BasketOrderCreateAssetType.Equity,
        clientOrderId: crypto.randomUUID(),
        identifier: "SBUX",
        identifierType: components.BasketOrderCreateIdentifierType.Symbol,
        orderType: components.BasketOrderCreateOrderType.Market,
        quantity: { value: "1" },
        side: components.BasketOrderCreateSide.Buy,
        timeInForce: components.BasketOrderCreateTimeInForce.Day,
      },
    ],
  };

  const result = await sdk.basketOrders.addOrders(
    request,
    process.env["CORRESPONDENT_ID"] || "",
    basket_order_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Basket Orders Orders Get Basket Get Basket1", async () => {
  if (typeof basket_order_id !== "string") {
    throw new Error("basket_order_id is undefined.");
  }
  const result = await sdk.basketOrders.getBasket(
    process.env["CORRESPONDENT_ID"] || "",
    basket_order_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Basket Orders Orders Submit Basket Submit Basket1", async () => {
  if (typeof basket_order_id !== "string") {
    throw new Error("basket_order_id is undefined.");
  }
  const request: components.SubmitBasketRequestCreate = {
    name:
      "correspondents/" +
      process.env["CORRESPONDENT_ID"] +
      "/baskets/" +
      basket_order_id,
  };

  const result = await sdk.basketOrders.submitBasket(
    request,
    process.env["CORRESPONDENT_ID"] || "",
    basket_order_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Basket Orders List Basket Orders List Basket Orders1", async () => {
  if (typeof basket_order_id !== "string") {
    throw new Error("basket_order_id is undefined.");
  }
  const result = await sdk.basketOrders.listBasketOrders(
    process.env["CORRESPONDENT_ID"] || "",
    basket_order_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Basket Orders Orders List Compressed Orders List Compressed Orders1", async () => {
  if (typeof basket_order_id !== "string") {
    throw new Error("basket_order_id is undefined.");
  }
  const result = await sdk.basketOrders.listCompressedOrders(
    process.env["CORRESPONDENT_ID"] || "",
    basket_order_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});
