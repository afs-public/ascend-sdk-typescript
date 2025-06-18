"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.sdk = void 0;
exports.timeout = timeout;
const sdk_1 = require("@apexfintechsolutions/ascend-sdk/sdk");
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
exports.sdk = new sdk_1.Apexascend({
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
//# sourceMappingURL=sdk.js.map