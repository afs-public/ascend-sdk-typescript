"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
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
exports.journalsCreateCashJournal = journalsCreateCashJournal;
const encodings_js_1 = require("../lib/encodings.js");
const M = __importStar(require("../lib/matchers.js"));
const schemas_js_1 = require("../lib/schemas.js");
const security_js_1 = require("../lib/security.js");
const url_js_1 = require("../lib/url.js");
const components = __importStar(require("../models/components/index.js"));
const errors = __importStar(require("../models/errors/index.js"));
const operations = __importStar(require("../models/operations/index.js"));
/**
 * Create Cash Journal
 *
 * @remarks
 * Creates a cash journal
 */
async function journalsCreateCashJournal(client, request, options) {
    const parsed = (0, schemas_js_1.safeParse)(request, (value) => components.CashJournalCreate$outboundSchema.parse(value), "Input validation failed");
    if (!parsed.ok) {
        return parsed;
    }
    const payload = parsed.value;
    const body = (0, encodings_js_1.encodeJSON)("body", payload, { explode: true });
    const path = (0, url_js_1.pathToFunc)("/transfers/v1/cashJournals")();
    const headers = new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
    });
    const securityInput = await (0, security_js_1.extractSecurity)(client._options.security);
    const context = {
        operationID: "CashJournals_CreateCashJournal",
        oAuth2Scopes: [],
        securitySource: client._options.security,
    };
    const requestSecurity = (0, security_js_1.resolveGlobalSecurity)(securityInput);
    const requestRes = client._createRequest(context, {
        security: requestSecurity,
        method: "POST",
        path: path,
        headers: headers,
        body: body,
        timeoutMs: (options === null || options === void 0 ? void 0 : options.timeoutMs) || client._options.timeoutMs || -1,
    }, options);
    if (!requestRes.ok) {
        return requestRes;
    }
    const req = requestRes.value;
    const doResult = await client._do(req, {
        context,
        errorCodes: ["400", "403", "409", "4XX", "5XX"],
        retryConfig: (options === null || options === void 0 ? void 0 : options.retries)
            || client._options.retryConfig,
        retryCodes: (options === null || options === void 0 ? void 0 : options.retryCodes) || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;
    const responseFields = {
        HttpMeta: { Response: response, Request: req },
    };
    const [result] = await M.match(M.json(200, operations.CashJournalsCreateCashJournalResponse$inboundSchema, { key: "CashJournal" }), M.jsonErr([400, 403, 409], errors.Status$inboundSchema), M.fail(["4XX", "5XX"]), M.json("default", operations.CashJournalsCreateCashJournalResponse$inboundSchema, { key: "Status" }))(response, req, { extraFields: responseFields });
    if (!result.ok) {
        return result;
    }
    return result;
}
//# sourceMappingURL=journalsCreateCashJournal.js.map