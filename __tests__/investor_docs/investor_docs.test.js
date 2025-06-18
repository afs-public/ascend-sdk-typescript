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
const accounts_1 = require("../accounts");
const vitest_2 = require("vitest");
let lnp_id;
let account_id;
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
}, 60000);
(0, vitest_1.test)("Investor Docs Investor Docs Batch Create Upload Links Batch Create Upload Links1", async () => {
    var _a;
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    const request = {
        createDocumentUploadLinkRequest: [
            {
                accountDocumentUploadRequest: {
                    correspondentId: (_a = process.env["CORRESPONDENT_ID"]) !== null && _a !== void 0 ? _a : "",
                    documentType: components.DocumentType.FdicSweepProgramAgreement,
                    accountId: account_id,
                },
                clientBatchSourceId: "cda89bd0-a6bc-4acc-89da-d35bde30cbf4",
                mimeType: "image/jpeg",
            },
        ],
    };
    const result = await sdk_1.sdk.investorDocs.batchCreateUploadLinks(request);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Investor Docs Investor Docs List Documents List Documents1", async () => {
    const result = await sdk_1.sdk.investorDocs.listDocuments(50, undefined, `correspondent_id=="${process.env["CORRESPONDENT_ID"]}"`);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=investor_docs.test.js.map