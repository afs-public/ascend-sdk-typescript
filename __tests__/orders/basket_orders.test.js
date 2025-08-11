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
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const components = __importStar(require("@apexfintechsolutions/ascend-sdk/models/components"));
const vitest_2 = require("vitest");
const index_1 = require("./index");
const crypto_1 = __importDefault(require("crypto"));
let basket_order_id;
(0, vitest_2.beforeAll)(async () => {
    basket_order_id = await (0, index_1.createBasketId)();
}, 60000);
(0, vitest_1.test)("Basket Orders Orders Create Basket Create Basket1", async () => {
    (0, vitest_1.expect)(basket_order_id).not.toBe(undefined);
});
(0, vitest_1.test)("Basket Orders Orders Add Orders Add Orders1", async () => {
    if (typeof basket_order_id !== "string") {
        throw new Error("basket_order_id is undefined.");
    }
    const request = {
        name: "correspondents/" +
            process.env["CORRESPONDENT_ID"] +
            "/baskets/" +
            basket_order_id,
        basketOrders: [
            {
                accountId: index_1.withdrawal_account_id,
                assetType: components.BasketOrderCreateAssetType.Equity,
                clientOrderId: crypto_1.default.randomUUID(),
                identifier: "SBUX",
                identifierType: components.BasketOrderCreateIdentifierType.Symbol,
                orderType: components.BasketOrderCreateOrderType.Market,
                quantity: { value: "1" },
                side: components.BasketOrderCreateSide.Buy,
                timeInForce: components.BasketOrderCreateTimeInForce.Day,
            },
        ],
    };
    const result = await sdk_1.sdk.basketOrders.addOrders(request, process.env["CORRESPONDENT_ID"] || "", basket_order_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Basket Orders Orders Get Basket Get Basket1", async () => {
    if (typeof basket_order_id !== "string") {
        throw new Error("basket_order_id is undefined.");
    }
    const result = await sdk_1.sdk.basketOrders.getBasket(process.env["CORRESPONDENT_ID"] || "", basket_order_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Basket Orders Orders Submit Basket Submit Basket1", async () => {
    if (typeof basket_order_id !== "string") {
        throw new Error("basket_order_id is undefined.");
    }
    const request = {
        name: "correspondents/" +
            process.env["CORRESPONDENT_ID"] +
            "/baskets/" +
            basket_order_id,
    };
    const result = await sdk_1.sdk.basketOrders.submitBasket(request, process.env["CORRESPONDENT_ID"] || "", basket_order_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Basket Orders List Basket Orders List Basket Orders1", async () => {
    if (typeof basket_order_id !== "string") {
        throw new Error("basket_order_id is undefined.");
    }
    const request = {
        correspondentId: process.env["CORRESPONDENT_ID"] || "",
        basketId: basket_order_id,
    };
    const result = await sdk_1.sdk.basketOrders.listBasketOrders(request);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Basket Orders Orders List Compressed Orders List Compressed Orders1", async () => {
    if (typeof basket_order_id !== "string") {
        throw new Error("basket_order_id is undefined.");
    }
    const result = await sdk_1.sdk.basketOrders.listCompressedOrders(process.env["CORRESPONDENT_ID"] || "", basket_order_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=basket_orders.test.js.map