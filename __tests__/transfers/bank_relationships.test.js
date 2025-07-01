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
const errors = __importStar(require("@apexfintechsolutions/ascend-sdk/models/errors"));
const accounts_1 = require("../accounts");
const index_1 = require("./index");
const vitest_2 = require("vitest");
let lnp_id;
let account_id;
let reuse_account_id;
let enrollment_ids;
let bank_relationship_id;
(0, vitest_2.beforeAll)(async () => {
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
    reuse_account_id = await (0, accounts_1.createAccount)(lnp_id);
    if (typeof reuse_account_id !== "string") {
        throw new Error("reissue_account_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    enrollment_ids = await (0, accounts_1.enrollAccount)(account_id);
    if (typeof enrollment_ids !== "object") {
        throw new Error("enrollment_ids is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    (0, accounts_1.affirmAgreement)(account_id, enrollment_ids);
    await (0, sdk_1.timeout)(5000);
    bank_relationship_id = await (0, index_1.createBankRelationship)(account_id);
    if (typeof bank_relationship_id !== "string") {
        throw new Error("bank_relationship_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Bank Relationships Transfers Create Bank Relationships Create Bank Relationships1", async () => {
    (0, vitest_1.expect)(bank_relationship_id).not.toBe(undefined);
});
(0, vitest_1.test)("Bank Relationships Transfers List Bank Relationships List Bank Relationships1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    const result = await sdk_1.sdk.bankRelationships.listBankRelationships(account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Bank Relationships Transfers Get Bank Relationships Get Bank Relationships1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof bank_relationship_id !== "string") {
        throw new Error("bank_relationship_id is undefined.");
    }
    const result = await sdk_1.sdk.bankRelationships.getBankRelationship(account_id, bank_relationship_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Bank Relationships Transfers Update Bank Relationships Update Bank Relationships1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof bank_relationship_id !== "string") {
        throw new Error("bank_relationship_id is undefined.");
    }
    const result = await sdk_1.sdk.bankRelationships.updateBankRelationship({
        nickname: "My Primary Bank",
    }, account_id, bank_relationship_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Bank Relationships Transfers Reissue Micro Deposits Reissue Micro Deposits1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof bank_relationship_id !== "string") {
        throw new Error("bank_relationship_id is undefined.");
    }
    const failing_micro_deposits = await (0, index_1.failingMicroDeposits)(account_id, bank_relationship_id);
    if (typeof failing_micro_deposits !== "object") {
        throw new Error("failing_micro_deposits is undefined.");
    }
    const request = {
        amounts: {
            amount1: {
                value: failing_micro_deposits[0],
            },
            amount2: {
                value: failing_micro_deposits[1],
            },
        },
        name: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
    };
    const max_attempts = 3;
    let attempts = 0;
    while (attempts < max_attempts) {
        attempts++;
        try {
            await sdk_1.sdk.bankRelationships.verifyMicroDeposits(request, account_id, bank_relationship_id);
        }
        catch (error) {
            if (error instanceof errors.SDKError) {
                throw error;
            }
        }
    }
    const reissue_request = {
        name: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
    };
    const result = await sdk_1.sdk.bankRelationships.reissueMicroDeposits(reissue_request, account_id, bank_relationship_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Bank Relationships Transfers Verify Micro Deposits Verify Micro Deposits1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof bank_relationship_id !== "string") {
        throw new Error("bank_relationship_id is undefined.");
    }
    const correct_micro_deposits = await (0, index_1.correctMicroDeposits)(account_id, bank_relationship_id);
    if (typeof correct_micro_deposits !== "object") {
        throw new Error("correct_micro_deposits is undefined.");
    }
    const request = {
        amounts: {
            amount1: {
                value: correct_micro_deposits[0],
            },
            amount2: {
                value: correct_micro_deposits[1],
            },
        },
        name: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
    };
    const result = await sdk_1.sdk.bankRelationships.verifyMicroDeposits(request, account_id, bank_relationship_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Bank Relationships Transfers Reuse Bank Relationships Reuse Bank Relationships1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof reuse_account_id !== "string") {
        throw new Error("reuse_account_id is undefined.");
    }
    if (typeof bank_relationship_id !== "string") {
        throw new Error("bank_relationship_id is undefined.");
    }
    const request = {
        parent: `accounts/${account_id}`,
        sourceBankRelationship: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
    };
    const result = await sdk_1.sdk.bankRelationships.reuseBankRelationship(request, reuse_account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Bank Relationships Transfers Cancel Bank Relationships Cancel Bank Relationships1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof bank_relationship_id !== "string") {
        throw new Error("bank_relationship_id is undefined.");
    }
    const request = {
        name: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
        comment: "Canceling Bank User Request",
    };
    const result = await sdk_1.sdk.bankRelationships.cancelBankRelationship(request, account_id, bank_relationship_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=bank_relationships.test.js.map