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
let trade_id;
let client_order_id;
let execution_id;
let rebook_execution_id;
(0, vitest_2.beforeAll)(async () => {
    [trade_id, client_order_id] = await (0, index_1.createBooking)(index_1.withdrawal_account_id);
    if (typeof trade_id !== "string") {
        throw new Error("trade_id is undefined.");
    }
    if (typeof client_order_id !== "string") {
        throw new Error("client_order_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    execution_id = await (0, index_1.createExecution)(index_1.withdrawal_account_id, trade_id);
    if (typeof execution_id !== "string") {
        throw new Error("execution_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    rebook_execution_id = await (0, index_1.createExecution)(index_1.withdrawal_account_id, trade_id);
    if (typeof rebook_execution_id !== "string") {
        throw new Error("rebook_execution_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Trade Booking Trade Processing Create Trade Create Trade1", async () => {
    (0, vitest_1.expect)(trade_id).not.toBe(undefined);
});
(0, vitest_1.test)("Trade Booking Trade Processing Get Trade Get Trade1", async () => {
    if (typeof index_1.withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof trade_id !== "string") {
        throw new Error("trade_id is undefined.");
    }
    const result = await sdk_1.sdk.tradeBooking.getTrade(index_1.withdrawal_account_id, trade_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Trade Booking Trade Processing Create Execution Create Execution1", async () => {
    (0, vitest_1.expect)(execution_id).not.toBe(undefined);
});
(0, vitest_1.test)("Trade Booking Trade Processing Get Execution Get Execution1", async () => {
    if (typeof index_1.withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof trade_id !== "string") {
        throw new Error("trade_id is undefined.");
    }
    if (typeof execution_id !== "string") {
        throw new Error("execution_id is undefined.");
    }
    const result = await sdk_1.sdk.tradeBooking.getExecution(index_1.withdrawal_account_id, trade_id, execution_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Trade Booking Trade Processing Complete Trade Complete Trade1", async () => {
    if (typeof index_1.withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof trade_id !== "string") {
        throw new Error("trade_id is undefined.");
    }
    const request = {
        name: `accounts/${index_1.withdrawal_account_id}/trades/${trade_id}`,
    };
    const result = await sdk_1.sdk.tradeBooking.completeTrade(request, index_1.withdrawal_account_id, trade_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Trade Booking Trade Processing Rebook Execution Rebook Execution1", async () => {
    if (typeof index_1.withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof trade_id !== "string") {
        throw new Error("trade_id is undefined.");
    }
    if (typeof rebook_execution_id !== "string") {
        throw new Error("execution_id is undefined.");
    }
    const request = {
        name: `accounts/${index_1.withdrawal_account_id}/trades/${trade_id}/executions/${rebook_execution_id}`,
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
    const result = await sdk_1.sdk.tradeBooking.rebookExecution(request, index_1.withdrawal_account_id, trade_id, rebook_execution_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Trade Booking Trade Processing Cancel Execution Cancel Execution1", async () => {
    if (typeof index_1.withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof trade_id !== "string") {
        throw new Error("trade_id is undefined.");
    }
    if (typeof execution_id !== "string") {
        throw new Error("execution_id is undefined.");
    }
    const request = {
        name: `accounts/${index_1.withdrawal_account_id}/trades/${trade_id}/executions/${execution_id}`,
    };
    const result = await sdk_1.sdk.tradeBooking.cancelExecution(request, index_1.withdrawal_account_id, trade_id, execution_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Trade Booking Trade Processing Rebook Trade Rebook Trade1", async () => {
    if (typeof index_1.withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof trade_id !== "string") {
        throw new Error("trade_id is undefined.");
    }
    if (typeof client_order_id !== "string") {
        throw new Error("client_order_id is undefined.");
    }
    const request = {
        name: `accounts/${index_1.withdrawal_account_id}/trades/${trade_id}`,
        trade: {
            accountId: index_1.withdrawal_account_id,
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
    const result = await sdk_1.sdk.tradeBooking.rebookTrade(request, index_1.withdrawal_account_id, trade_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Trade Booking Trade Processing Cancel Trade Cancel Trade1", async () => {
    if (typeof index_1.withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof trade_id !== "string") {
        throw new Error("trade_id is undefined.");
    }
    const request = {
        name: `accounts/${index_1.withdrawal_account_id}/trades/${trade_id}`,
    };
    const result = await sdk_1.sdk.tradeBooking.cancelTrade(request, index_1.withdrawal_account_id, trade_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=trade_booking.test.js.map