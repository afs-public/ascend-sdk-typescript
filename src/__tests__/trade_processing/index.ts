import { sdk } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import crypto from "crypto";


export const withdrawal_account_id = "01JHGTEPC6ZTAHCFRH2MD3VJJT";
export const deceased_account_id = "01JHK07CRQ9X8P5XE9JWG4PFSP";

export async function createBooking(
  account_id: string,
): Promise<[string | undefined, string | undefined]> {

  const request: components.TradeCreate = {
    accountId: account_id,
    brokerCapacity: components.TradeCreateBrokerCapacity.Principal,
    clientOrderId: crypto.randomUUID(),
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
    open: true
  };
  const result = await sdk.tradeBooking.createTrade(request, account_id);
  if (result?.bookingTrade?.tradeId && result?.bookingTrade?.clientOrderId) {
    return [result.bookingTrade.tradeId, result.bookingTrade.clientOrderId];
  }
  return [undefined, undefined];
}

export async function createExecution(
  account_id: string,
  trade_id: string,
): Promise<string | undefined> {
  const request: components.ExecutionCreate = {
    executionTime: new Date(),
    externalId: crypto.randomUUID(),
    price: {
        value: "5",
    },
    quantity: {
        value: "1",
    }
  };
  const result = await sdk.tradeBooking.createExecution(request, account_id, trade_id);
  if (result?.execution?.executionId) {
    return result.execution.executionId;
  }
  return undefined;
}

export async function createTradeAllocation(
  account_id: string,
): Promise<string | undefined> {
  const request: components.TradeAllocationCreate = {
    brokerCapacity: components.TradeAllocationCreateBrokerCapacity.Principal,
    executionTime: new Date(),
    fromAccountId: deceased_account_id,
    identifier: "SBUX",
    identifierType: components.TradeAllocationCreateIdentifierType.Symbol,
    assetType: components.TradeAllocationCreateAssetType.Equity,
    price: {
        value: "5",
    },
    quantity: {
        value: "1",
    },
    sourceApplication: "Trading-App",
    toAccountId: account_id,
    toSide: components.ToSide.Buy,
  };
  const request_id = crypto.randomUUID();
  const result = await sdk.tradeAllocation.createTradeAllocation(request, account_id, request_id);
  if (result?.tradeAllocation?.tradeAllocationId) {
    return result.tradeAllocation.tradeAllocationId;
  }
  return undefined;
}

