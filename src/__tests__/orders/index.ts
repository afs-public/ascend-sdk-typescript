import { sdk, timeout } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import crypto from "crypto";

export const identifier_cusp = "912810SX7";

export const withdrawal_account_id = "01JHGTEPC6ZTAHCFRH2MD3VJJT";
export async function createOrder(
  account_id: string,
): Promise<string | undefined> {
  // Fund account
  await timeout(2000);
  const fundingRequest: components.TransfersCreditCreate = {
    amount: {
      value: "10000.00",
    },
    clientTransferId: crypto.randomUUID(),
    description: "Credit given as promotion",
    type: components.TransfersCreditCreateType.Promotional,
  };
  await sdk.feesAndCredits.createCredit(fundingRequest, account_id);


  // Create order
  let currentDate = new Date();
  const request: components.OrderCreate = {
    assetType: components.AssetType.Equity,
    clientOrderId: crypto.randomUUID(),
    orderDate: {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth() + 1,
      day: currentDate.getDate(),
    },
    identifier: "SBUX",
    identifierType: components.IdentifierType.Symbol,
    quantity: {
      value: "1",
    },
    orderType: components.OrderType.Limit,
    limitPrice: {
      price: {
        value: "5",
      },
      type: components.LimitPriceCreateType.PricePerUnit,
    },
    side: components.Side.Buy,
    timeInForce: components.TimeInForce.Day,
  };
  const result = await sdk.orders.createOrder(request, account_id);
  if (result?.order?.orderId) {
    return result.order.orderId;
  }
  return undefined;
}

export async function createBasketId() {
  const request: components.BasketCreate = {
    clientBasketId: crypto.randomUUID(),
    correspondentId: process.env["CORRESPONDENT_ID"] ?? "",
  };

  const result = await sdk.basketOrders.createBasket(
    request,
    process.env["CORRESPONDENT_ID"] ?? "",
  );
  if (result?.basket?.basketId) {
    return result.basket.basketId;
  }
  return undefined;
}
