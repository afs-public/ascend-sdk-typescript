"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const components = __importStar(require("@apexfintechsolutions/ascend-sdk/models/components"));
const index_1 = require("./index");
const vitest_2 = require("vitest");
const zod_1 = require("zod");
let trade_allocation_id;
let rebook_trade_allocation_id;
(0, vitest_2.beforeAll)(async () => {
    trade_allocation_id = await (0, index_1.createTradeAllocation)(index_1.withdrawal_account_id);
    if (typeof trade_allocation_id !== "string") {
        throw new Error("trade_allocation_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    rebook_trade_allocation_id = await (0, index_1.createTradeAllocation)(index_1.withdrawal_account_id);
    if (typeof rebook_trade_allocation_id !== "string") {
        throw new Error("rebook_trade_allocation_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Trade Allocation Trade Processing Create Trade Allocation Create Trade Allocation1", async () => {
    (0, vitest_1.expect)(trade_allocation_id).not.toBe(zod_1.undefined);
});
(0, vitest_1.test)("Trade Allocation Trade Processing Get Trade Allocation Get Trade Allocation1", async () => {
    if (typeof index_1.withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof trade_allocation_id !== "string") {
        throw new Error("trade_allocation_id is undefined.");
    }
    const result = await sdk_1.sdk.tradeAllocation.getTradeAllocation(index_1.withdrawal_account_id, trade_allocation_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Trade Allocation Trade Processing Rebook Trade Allocation Rebook Trade Allocation1", async () => {
    if (typeof index_1.withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof rebook_trade_allocation_id !== "string") {
        throw new Error("rebook_trade_allocation_id is undefined.");
    }
    const request = {
        name: `accounts/${index_1.withdrawal_account_id}/tradeAllocations/${rebook_trade_allocation_id}`,
        requestId: crypto.randomUUID(),
        tradeAllocation: {
            brokerCapacity: components.TradeAllocationCreateBrokerCapacity.Principal,
            executionTime: new Date(),
            fromAccountId: index_1.deceased_account_id,
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
            toAccountId: index_1.withdrawal_account_id,
            toSide: components.ToSide.Buy,
        }
    };
    const result = await sdk_1.sdk.tradeAllocation.rebookTradeAllocation(request, index_1.withdrawal_account_id, rebook_trade_allocation_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Trade Allocation Trade Processing Cancel Trade Allocation Cancel Trade Allocation1", async () => {
    if (typeof index_1.withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof trade_allocation_id !== "string") {
        throw new Error("trade_allocation_id is undefined.");
    }
    const request = {
        name: `accounts/${index_1.withdrawal_account_id}/tradeAllocations/${trade_allocation_id}`,
    };
    const result = await sdk_1.sdk.tradeAllocation.cancelTradeAllocation(request, index_1.withdrawal_account_id, trade_allocation_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=trade_allocation.test.js.map