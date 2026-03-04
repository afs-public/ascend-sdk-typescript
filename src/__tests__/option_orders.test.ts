import { expect, test, beforeAll } from "vitest";
import { sdk } from "./utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import * as errors from "@apexfintechsolutions/ascend-sdk/models/errors";
import {
  createLegalNaturalPerson,
  createAccount,
  enrollAccount,
  affirmAgreement,
} from "./accounts";
import crypto from "crypto";

let account_id: string | undefined;
let option_order_id: string | undefined;

beforeAll(async () => {
  const lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  const enrollment_ids = await enrollAccount(account_id);
  if (typeof enrollment_ids !== "object") {
    throw new Error("enrollment_ids is undefined.");
  }
  await affirmAgreement(account_id, enrollment_ids);

  // Fund account with promotional credit
  const creditRequest: components.TransfersCreditCreate = {
    amount: { value: "1000000.00" },
    clientTransferId: crypto.randomUUID(),
    description: "Credit given as promotion",
    type: components.TransfersCreditCreateType.Promotional,
  };
  await sdk.feesAndCredits.createCredit(creditRequest, account_id);
}, 60000);

test("Test Option Order Service Create Option Order", async () => {
  const today = new Date();
  const request: components.OptionOrderCreate = {
    brokerCapacity: components.OptionOrderCreateBrokerCapacity.Agency,
    clientOrderId: crypto.randomUUID(),
    currencyCode: "USD",
    legs: [
      {
        assetType: components.OptionOrderLegCreateAssetType.Option,
        identifier: "SBUX250221C00084000",
        identifierType: components.OptionOrderLegCreateIdentifierType.Osi,
        ratioQuantity: 1,
        side: components.OptionOrderLegCreateSide.Buy,
        sideModifier: components.SideModifier.Open,
      },
    ],
    limitPrice: { value: "5.00" },
    orderDate: {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    },
    orderType: components.OptionOrderCreateOrderType.Limit,
    priceDirection: components.PriceDirection.Debit,
    quantity: { value: "1" },
    timeInForce: components.OptionOrderCreateTimeInForce.Day,
  };

  const result = await sdk.optionOrders.createOptionOrder(
    request,
    account_id || "",
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.optionOrder?.optionOrderId).toBeDefined();

  option_order_id = result.optionOrder?.optionOrderId;
});

test("Test Option Order Service Get Option Order", async () => {
  expect(option_order_id).toBeDefined();

  const result = await sdk.optionOrders.getOptionOrder(
    account_id || "",
    option_order_id || "",
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Option Order Service Cancel Option Order", async () => {
  expect(option_order_id).toBeDefined();

  // Check if order is in a cancelable state
  const getResult = await sdk.optionOrders.getOptionOrder(
    account_id || "",
    option_order_id || "",
  );

  const status = getResult.optionOrder?.orderStatus;
  if (
    status === components.OptionOrderOrderStatus.Rejected ||
    status === components.OptionOrderOrderStatus.Filled ||
    status === components.OptionOrderOrderStatus.Canceled
  ) {
    console.log(`Skipping: option order is already in terminal status ${status}`);
    return;
  }

  const request: components.CancelOptionOrderRequestCreate = {
    name: `accounts/${account_id}/optionOrders/${option_order_id}`,
  };

  try {
    const result = await sdk.optionOrders.cancelOptionOrder(
      request,
      account_id || "",
      option_order_id || "",
    );

    expect(result).toBeDefined();
    expect(result.httpMeta.response.status).toBe(200);
  } catch (err) {
    if (err instanceof errors.Status) {
      // FAILED_PRECONDITION - order not in cancelable state
      expect(err.code).toBe(9);
    } else {
      throw err;
    }
  }
});
