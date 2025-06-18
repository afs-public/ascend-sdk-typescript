"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const index_1 = require("./index");
const vitest_2 = require("vitest");
let lnp_id;
let account_id;
(0, vitest_2.beforeAll)(async () => {
    lnp_id = await (0, index_1.createLegalNaturalPerson)();
    if (typeof lnp_id !== "string") {
        throw new Error('lnp_id is undefined.');
    }
    await (0, sdk_1.timeout)(5000);
    account_id = await (0, index_1.createAccount)(lnp_id);
    if (typeof account_id !== "string") {
        throw new Error('account_id is undefined.');
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Account Creation Accounts Create Account Create Account1", async () => {
    (0, vitest_1.expect)(account_id).not.toBe(undefined);
});
(0, vitest_1.test)("Account Creation Accounts Get Account Get Account1", async () => {
    if (typeof account_id !== "string") {
        throw new Error('account_id is undefined.');
    }
    const result = await sdk_1.sdk.accountCreation.getAccount(account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=accountcreation.test.js.map