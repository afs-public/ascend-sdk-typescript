import { expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import {
  withdrawal_account_id,
  createBooking,
  createExecution,
} from "./index";
import { beforeAll } from "vitest";

let trade_id: string | undefined;
let client_order_id: string | undefined;
let execution_id: string | undefined;
let rebook_execution_id: string | undefined;
beforeAll(async () => {
  [trade_id, client_order_id] = await createBooking(withdrawal_account_id);
  if (typeof trade_id !== "string") {
    throw new Error("trade_id is undefined.");
  }
  if (typeof client_order_id !== "string") {
      throw new Error("client_order_id is undefined.");
  }
  execution_id = await createExecution(
      withdrawal_account_id,
      trade_id,
  );
  if (typeof execution_id !== "string") {
      throw new Error("execution_id is undefined.");
  }
  rebook_execution_id = await createExecution(
        withdrawal_account_id,
        trade_id,
  );
  if (typeof rebook_execution_id !== "string") {
      throw new Error("rebook_execution_id is undefined.");
  }
}, 60000);
test("Trade Booking Trade Processing Create Trade Create Trade1", async () => {
  expect(trade_id).not.toBe(undefined);
});

test("Trade Booking Trade Processing Get Trade Get Trade1", async () => {
  if (typeof withdrawal_account_id !== "string") {
    throw new Error("withdrawal_account_id is undefined.");
  }
  if (typeof trade_id !== "string") {
    throw new Error("trade_id is undefined.");
  }

  const result = await sdk.tradeBooking.getTrade(
    withdrawal_account_id,
    trade_id,
  );

    expect(result.httpMeta.response.status).toBe(200);
});

test("Trade Booking Trade Processing Create Execution Create Execution1", async () => {
  expect(execution_id).not.toBe(undefined);
});

test("Trade Booking Trade Processing Get Execution Get Execution1", async () => {
  if (typeof withdrawal_account_id !== "string") {
    throw new Error("withdrawal_account_id is undefined.");
  }
  if (typeof trade_id !== "string") {
    throw new Error("trade_id is undefined.");
  }
  if (typeof execution_id !== "string") {
    throw new Error("execution_id is undefined.");
  }

  const result = await sdk.tradeBooking.getExecution(
      withdrawal_account_id,
      trade_id,
      execution_id,
  );

  expect(result.httpMeta.response.status).toBe(200);
});



test("Trade Booking Trade Processing Complete Trade Complete Trade1", async () => {
  if (typeof withdrawal_account_id !== "string") {
    throw new Error("withdrawal_account_id is undefined.");
  }
  if (typeof trade_id !== "string") {
    throw new Error("trade_id is undefined.");
  }

  const request: components.CompleteTradeRequestCreate = {
    name: `accounts/${withdrawal_account_id}/trades/${trade_id}`,
  };

  const result = await sdk.tradeBooking.completeTrade(
      request,
      withdrawal_account_id,
      trade_id,
  );

  expect(result.httpMeta.response.status).toBe(200);
});

test("Trade Booking Trade Processing Rebook Execution Rebook Execution1", async () => {
    if (typeof withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof trade_id !== "string") {
        throw new Error("trade_id is undefined.");
    }
    if (typeof rebook_execution_id !== "string") {
        throw new Error("execution_id is undefined.");
    }

    const request: components.RebookExecutionRequestCreate = {
        name: `accounts/${withdrawal_account_id}/trades/${trade_id}/executions/${rebook_execution_id}`,
        execution: {
          executionTime: new Date(),
          externalId: crypto.randomUUID(),
          price: {
              value: "5",
          },
          quantity: {
              value: "1",
          },
        },
    };

    const result = await sdk.tradeBooking.rebookExecution(
        request,
        withdrawal_account_id,
        trade_id,
        rebook_execution_id,
    );

    expect(result.httpMeta.response.status).toBe(200);
});


test("Trade Booking Trade Processing Cancel Execution Cancel Execution1", async () => {
  if (typeof withdrawal_account_id !== "string") {
    throw new Error("withdrawal_account_id is undefined.");
  }
  if (typeof trade_id !== "string") {
    throw new Error("trade_id is undefined.");
  }
  if (typeof execution_id !== "string") {
    throw new Error("execution_id is undefined.");
  }

  const request: components.CancelExecutionRequestCreate = {
    name: `accounts/${withdrawal_account_id}/trades/${trade_id}/executions/${execution_id}`,
  };

  const result = await sdk.tradeBooking.cancelExecution(
      request,
      withdrawal_account_id,
      trade_id,
      execution_id,
  );

  expect(result.httpMeta.response.status).toBe(200);
});

test("Trade Booking Trade Processing Rebook Trade Rebook Trade1", async () => {
  if (typeof withdrawal_account_id !== "string") {
    throw new Error("withdrawal_account_id is undefined.");
  }
  if (typeof trade_id !== "string") {
    throw new Error("trade_id is undefined.");
  }
  if (typeof client_order_id !== "string") {
    throw new Error("client_order_id is undefined.");
  }

  const request: components.RebookTradeRequestCreate = {
    name: `accounts/${withdrawal_account_id}/trades/${trade_id}`,
    trade: {
      accountId: withdrawal_account_id,
      brokerCapacity: components.TradeCreateBrokerCapacity.Principal,
      clientOrderId: client_order_id,
      executions: [
        {
          executionTime: new Date(),
          externalId: crypto.randomUUID(),
          price: {
            value: "5",
          },
          quantity: {
            value: "1",
          },
        },
      ],
      identifier: "SBUX",
      identifierType: components.TradeCreateIdentifierType.Symbol,
      routeType: components.RouteType.Quik,
      side: components.TradeCreateSide.Buy,
      sourceApplication: "Trading-App",
      assetType: components.TradeCreateAssetType.Equity,
    },
  };

  const result = await sdk.tradeBooking.rebookTrade(
      request,
      withdrawal_account_id,
      trade_id,
  );

  expect(result.httpMeta.response.status).toBe(200);
});

test("Trade Booking Trade Processing Cancel Trade Cancel Trade1", async () => {
  if (typeof withdrawal_account_id !== "string") {
    throw new Error("withdrawal_account_id is undefined.");
  }
  if (typeof trade_id !== "string") {
    throw new Error("trade_id is undefined.");
  }

  const request: components.CancelTradeRequestCreate = {
    name: `accounts/${withdrawal_account_id}/trades/${trade_id}`,
  };

  const result = await sdk.tradeBooking.cancelTrade(
      request,
      withdrawal_account_id,
      trade_id,
  );

  expect(result.httpMeta.response.status).toBe(200);
});


