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
exports.withdrawal_account_id = exports.identifier_cusp = void 0;
exports.createOrder = createOrder;
exports.createBasketId = createBasketId;
const sdk_1 = require("../utils/sdk");
const components = __importStar(require("@apexfintechsolutions/ascend-sdk/models/components"));
const crypto_1 = __importDefault(require("crypto"));
exports.identifier_cusp = "912810SX7";
exports.withdrawal_account_id = "01JHGTEPC6ZTAHCFRH2MD3VJJT";
async function createOrder(account_id) {
    // Fund account
    const fundingRequest = {
        amount: {
            value: "10000.00",
        },
        clientTransferId: crypto_1.default.randomUUID(),
        description: "Credit given as promotion",
        type: components.TransfersCreditCreateType.Promotional,
    };
    await sdk_1.sdk.feesAndCredits.createCredit(fundingRequest, account_id);
    await (0, sdk_1.timeout)(5000);
    // Create order
    let currentDate = new Date();
    const request = {
        assetType: components.AssetType.Equity,
        clientOrderId: crypto_1.default.randomUUID(),
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
    const result = await sdk_1.sdk.createOrder.createOrder(request, account_id);
    if (result?.order?.orderId) {
        return result.order.orderId;
    }
    return undefined;
}
async function createBasketId() {
    const request = {
        clientBasketId: crypto_1.default.randomUUID(),
        correspondentId: process.env["CORRESPONDENT_ID"] ?? "",
    };
    const result = await sdk_1.sdk.basketOrders.createBasket(request, process.env["CORRESPONDENT_ID"] ?? "");
    if (result?.basket?.basketId) {
        return result.basket.basketId;
    }
    return undefined;
}
//# sourceMappingURL=index.js.map