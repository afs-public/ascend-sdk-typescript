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
const components_1 = require("@apexfintechsolutions/ascend-sdk/models/components");
const accounts_1 = require("../accounts");
const index_1 = require("./index");
let lnp_id;
let account_id;
let enrollment_ids;
(0, vitest_1.beforeAll)(async () => {
    lnp_id = await (0, accounts_1.createLegalNaturalPerson)();
    if (typeof lnp_id !== "string") {
        throw new Error("lnp_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    account_id = await (0, accounts_1.createAccount)(lnp_id);
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    enrollment_ids = await (0, accounts_1.enrollAccount)(account_id);
    if (typeof enrollment_ids !== "object") {
        throw new Error("enrollment_ids is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    (0, accounts_1.affirmAgreement)(account_id, enrollment_ids);
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Fixed Income Pricing Orders Preview Order Cost Preview Order Cost1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    const request = {
        assetType: components.OrderCostPreviewRequestCreateAssetType.FixedIncome,
        identifier: index_1.identifier_cusp,
        identifierType: components.OrderCostPreviewRequestCreateIdentifierType.Cusip,
        parent: `accounts/${account_id}`,
        quantity: {
            value: "5",
        },
        limitPrice: {
            price: {
                value: "2",
            },
            type: components.LimitPriceCreateType.PercentageOfPar,
        },
    };
    const result = await sdk_1.sdk.fixedIncomePricing.previewOrderCost(request, account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Fixed Income Pricing Orders Retrieve Quote Retrieve Quote1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    const request = {
        assetType: components.RetrieveQuoteRequestCreateAssetType.FixedIncome,
        identifier: index_1.identifier_cusp,
        identifierType: components.RetrieveQuoteRequestCreateIdentifierType.Cusip,
        parent: `accounts/${account_id}`,
    };
    const result = await sdk_1.sdk.fixedIncomePricing.retrieveQuote(request, account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Fixed Income Pricing Orders Retrieve Fixed Income Marks", async () => {
    const request = {
        parent: "correspondents/" + process.env["CORRESPONDENT_ID"],
        securityIdentifiers: [
            {
                identifier: index_1.identifier_cusp,
                identifierType: components_1.RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType.Cusip,
            },
        ],
    };
    const result = await sdk_1.sdk.fixedIncomePricing.retrieveFixedIncomeMarks(request, process.env["CORRESPONDENT_ID"] || "");
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=fixed_income_pricing.test.js.map