"use strict";
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
        apiKey: process.env["API_KEY"] ?? "",
        serviceAccountCreds: {
            privateKey: process.env["SERVICE_ACCOUNT_CREDS_PRIVATE_KEY"] ?? "",
            name: process.env["SERVICE_ACCOUNT_CREDS_NAME"] ?? "",
            organization: process.env["SERVICE_ACCOUNT_CREDS_ORGANIZATION"] ?? "",
            type: "serviceAccount",
        },
    },
});
//# sourceMappingURL=sdk.js.map