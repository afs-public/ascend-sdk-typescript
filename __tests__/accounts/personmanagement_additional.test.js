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
let lnp_id;
let assign_large_trader_id;
let legal_entity_id;
(0, vitest_2.beforeAll)(async () => {
    lnp_id = await (0, index_1.createLegalNaturalPerson)();
    if (typeof lnp_id !== "string") {
        throw new Error("lnp_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    assign_large_trader_id = await (0, index_1.assignLargeTrader)(lnp_id);
    if (typeof assign_large_trader_id !== "string") {
        throw new Error("assign_large_trader_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    legal_entity_id = await (0, index_1.createLegalEntity)();
    if (typeof legal_entity_id !== "string") {
        throw new Error("legal_entity_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Person Management Accounts Create Legal Natural Person Create Legal Natural Person1", async () => {
    (0, vitest_1.expect)(lnp_id).not.toBe(undefined);
});
(0, vitest_1.test)("Person Management Accounts Get Legal Natural Person Get Legal Natural Person1", async () => {
    if (typeof lnp_id !== "string") {
        throw new Error("lnp_id is undefined.");
    }
    const result = await sdk_1.sdk.personManagement.getLegalNaturalPerson(lnp_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Person Management Accounts Update Legal Natural Person update Legal Natural Person1", async () => {
    if (typeof lnp_id !== "string") {
        throw new Error("lnp_id is undefined.");
    }
    const request = {
        maritalStatus: components.LegalNaturalPersonUpdateMaritalStatus.Married,
    };
    const result = await sdk_1.sdk.personManagement.updateLegalNaturalPerson(request, lnp_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Person Management Accounts Assign Large Trader Assign Large Trader1", async () => {
    (0, vitest_1.expect)(assign_large_trader_id).not.toBe(undefined);
});
(0, vitest_1.test)("Person Management Accounts End Large Trader End Large Trader1", async () => {
    if (typeof lnp_id !== "string") {
        throw new Error("lnp_id is undefined.");
    }
    const request = {
        endReason: components.EndReason.EventReasonCreated,
    };
    const result = await sdk_1.sdk.personManagement.endLargeTraderLegalNaturalPerson(request, lnp_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Person Management Accounts Create Legal Entity Create Legal Entity1", async () => {
    (0, vitest_1.expect)(legal_entity_id).not.toBe(undefined);
});
(0, vitest_1.test)("Person Management Accounts Get Legal Entity Get Legal Entity1", async () => {
    if (typeof legal_entity_id !== "string") {
        throw new Error("legal_entity_id is undefined.");
    }
    const result = await sdk_1.sdk.personManagement.getLegalEntity(legal_entity_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Person Management Accounts Update Legal Entity Update Legal Entity1", async () => {
    if (typeof legal_entity_id !== "string") {
        throw new Error("legal_entity_id is undefined.");
    }
    const request = {
        entityName: "John Doe",
    };
    const result = await sdk_1.sdk.personManagement.updateLegalEntity(request, legal_entity_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Person Management Accounts Assign Large Trader Legal Entity Assign Large Trader Legal Entity1", async () => {
    if (typeof legal_entity_id !== "string") {
        throw new Error("legal_entity_id is undefined.");
    }
    if (typeof assign_large_trader_id !== "string") {
        throw new Error("assign_large_trader_id is undefined.");
    }
    const request = {
        largeTraderId: assign_large_trader_id,
    };
    const result = await sdk_1.sdk.personManagement.assignLargeTraderLegalEntity(request, legal_entity_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Person Management Accounts End Large Trader Legal Entity End Large Trader Legal Entity1", async () => {
    if (typeof legal_entity_id !== "string") {
        throw new Error("legal_entity_id is undefined.");
    }
    const request = {
        endReason: components.EndReason.EventReasonCreated,
    };
    const result = await sdk_1.sdk.personManagement.endLargeTrader(request, legal_entity_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=personmanagement_additional.test.js.map