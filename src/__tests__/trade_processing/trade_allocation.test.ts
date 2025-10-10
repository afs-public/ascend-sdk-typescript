import { expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import {
    withdrawal_account_id,
    deceased_account_id,
    createTradeAllocation,
} from "./index";
import { beforeAll } from "vitest";
import {undefined} from "zod";

let trade_allocation_id: string | undefined;
let rebook_trade_allocation_id: string | undefined;
beforeAll(async () => {
    trade_allocation_id = await createTradeAllocation(
        withdrawal_account_id,
    );
    if (typeof trade_allocation_id !== "string") {
        throw new Error("trade_allocation_id is undefined.");
    }
    rebook_trade_allocation_id = await createTradeAllocation(
        withdrawal_account_id,
    );
    if (typeof rebook_trade_allocation_id !== "string") {
        throw new Error("rebook_trade_allocation_id is undefined.");
    }
}, 60000);
test("Trade Allocation Trade Processing Create Trade Allocation Create Trade Allocation1", async () => {
    expect(trade_allocation_id).not.toBe(undefined);
});

test("Trade Allocation Trade Processing Get Trade Allocation Get Trade Allocation1", async () => {
    if (typeof withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof trade_allocation_id !== "string") {
        throw new Error("trade_allocation_id is undefined.");
    }

    const result = await sdk.tradeAllocation.getTradeAllocation(
        withdrawal_account_id,
        trade_allocation_id,
    );

    expect(result.httpMeta.response.status).toBe(200);
});

test("Trade Allocation Trade Processing Rebook Trade Allocation Rebook Trade Allocation1", async () => {
    if (typeof withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof rebook_trade_allocation_id !== "string") {
        throw new Error("rebook_trade_allocation_id is undefined.");
    }

    const request: components.RebookTradeAllocationRequestCreate = {
        name: `accounts/${withdrawal_account_id}/tradeAllocations/${rebook_trade_allocation_id}`,
        requestId: crypto.randomUUID(),
        tradeAllocation: {
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
            toAccountId: withdrawal_account_id,
            toSide: components.ToSide.Buy,
        }
    };

    const result = await sdk.tradeAllocation.rebookTradeAllocation(
        request,
        withdrawal_account_id,
        rebook_trade_allocation_id,
    );

    expect(result.httpMeta.response.status).toBe(200);
});

test("Trade Allocation Trade Processing Cancel Trade Allocation Cancel Trade Allocation1", async () => {
    if (typeof withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof trade_allocation_id !== "string") {
        throw new Error("trade_allocation_id is undefined.");
    }
    const request: components.CancelTradeAllocationRequestCreate = {
        name: `accounts/${withdrawal_account_id}/tradeAllocations/${trade_allocation_id}`,
    };

    const result = await sdk.tradeAllocation.cancelTradeAllocation(
        request,
        withdrawal_account_id,
        trade_allocation_id,
    );

    expect(result.httpMeta.response.status).toBe(200);
});
