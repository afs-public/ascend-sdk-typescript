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
const index_1 = require("./index");
const crypto = __importStar(require("crypto"));
const apex_investigation_id = "01JP8EHZ3CJKCTMHKTT4FZ51HC";
(0, vitest_1.test)("Investigations Investigation Service Update Investigation Update Investigation1", async () => {
    const request = {
        comment: "new investigation name",
    };
    const result = await sdk_1.sdk.investigations.updateInvestigation(request, index_1.investigation_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Investigations Investigation Service Link Documents Link Documents1", async () => {
    const request = {
        identityVerificationDocumentIds: [crypto.randomUUID()],
    };
    const result = await sdk_1.sdk.investigations.linkDocuments(request, index_1.investigation_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Investigations Investigations Get Identify Verification", async () => {
    const inv = await sdk_1.sdk.investigations.getInvestigation(apex_investigation_id);
    const results = inv?.investigation?.identityVerificationResults;
    if (results == undefined) {
        throw new Error("Failed to get identity verification results");
    }
    if (!results || results.length === 0) {
        throw new Error("Failed to get identity verification results or results array is empty");
    }
    const first_id_result = results[0];
    if (!first_id_result?.customerIdentificationId) {
        throw new Error("Customer Identification ID is missing in the first identity verification result");
    }
    const result = await sdk_1.sdk.investigations.getCustomerIdentification(process.env["CORRESPONDENT_ID"] || "", first_id_result?.customerIdentificationId || "");
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=investigations_additional.test.js.map