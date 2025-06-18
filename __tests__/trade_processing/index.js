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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deceased_account_id = exports.withdrawal_account_id = void 0;
exports.createBooking = createBooking;
exports.createExecution = createExecution;
exports.createTradeAllocation = createTradeAllocation;
const sdk_1 = require("../utils/sdk");
const components = __importStar(require("@apexfintechsolutions/ascend-sdk/models/components"));
const crypto_1 = __importDefault(require("crypto"));
exports.withdrawal_account_id = "01JHGTEPC6ZTAHCFRH2MD3VJJT";
exports.deceased_account_id = "01JHK07CRQ9X8P5XE9JWG4PFSP";
async function createBooking(account_id) {
    var _a, _b;
    const request = {
        accountId: account_id,
        brokerCapacity: components.TradeCreateBrokerCapacity.Principal,
        clientOrderId: crypto_1.default.randomUUID(),
        executions: [
            {
                executionTime: new Date(),
                externalId: crypto_1.default.randomUUID(),
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
    const result = await sdk_1.sdk.tradeBooking.createTrade(request, account_id);
    if (((_a = result === null || result === void 0 ? void 0 : result.bookingTrade) === null || _a === void 0 ? void 0 : _a.tradeId) && ((_b = result === null || result === void 0 ? void 0 : result.bookingTrade) === null || _b === void 0 ? void 0 : _b.clientOrderId)) {
        return [result.bookingTrade.tradeId, result.bookingTrade.clientOrderId];
    }
    return [undefined, undefined];
}
async function createExecution(account_id, trade_id) {
    var _a;
    const request = {
        executionTime: new Date(),
        externalId: crypto_1.default.randomUUID(),
        price: {
            value: "5",
        },
        quantity: {
            value: "1",
        }
    };
    const result = await sdk_1.sdk.tradeBooking.createExecution(request, account_id, trade_id);
    if ((_a = result === null || result === void 0 ? void 0 : result.execution) === null || _a === void 0 ? void 0 : _a.executionId) {
        return result.execution.executionId;
    }
    return undefined;
}
async function createTradeAllocation(account_id) {
    var _a;
    const request = {
        brokerCapacity: components.TradeAllocationCreateBrokerCapacity.Principal,
        executionTime: new Date(),
        fromAccountId: exports.deceased_account_id,
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
    const request_id = crypto_1.default.randomUUID();
    const result = await sdk_1.sdk.tradeAllocation.createTradeAllocation(request, account_id, request_id);
    if ((_a = result === null || result === void 0 ? void 0 : result.tradeAllocation) === null || _a === void 0 ? void 0 : _a.tradeAllocationId) {
        return result.tradeAllocation.tradeAllocationId;
    }
    return undefined;
}
//# sourceMappingURL=index.js.map