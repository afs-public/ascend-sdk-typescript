"use strict";
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("../index.js");
(0, vitest_1.test)("Data Retrieval Snapshots List Snapshots List Snapshots1", async () => {
    var _a, _b, _c, _d;
    const apexascend = new index_js_1.Apexascend({
        serverURL: "https://uat.apexapis.com",
        security: {
            apiKey: (_a = process.env["API_KEY"]) !== null && _a !== void 0 ? _a : "",
            serviceAccountCreds: {
                privateKey: (_b = process.env["SERVICE_ACCOUNT_CREDS_PRIVATE_KEY"]) !== null && _b !== void 0 ? _b : "",
                name: (_c = process.env["SERVICE_ACCOUNT_CREDS_NAME"]) !== null && _c !== void 0 ? _c : "",
                organization: (_d = process.env["SERVICE_ACCOUNT_CREDS_ORGANIZATION"]) !== null && _d !== void 0 ? _d : "",
                type: "serviceAccount",
            },
        },
    });
    const result = await apexascend.dataRetrieval.listSnapshots();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=dataretrieval.test.js.map