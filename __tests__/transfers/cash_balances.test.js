"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const accounts_1 = require("../accounts");
const vitest_2 = require("vitest");
let lnp_id;
let account_id;
(0, vitest_2.beforeAll)(async () => {
    lnp_id = await (0, accounts_1.createLegalNaturalPerson)();
    if (typeof lnp_id !== "string") {
        throw new Error('lnp_id is undefined.');
    }
    await (0, sdk_1.timeout)(5000);
    account_id = await (0, accounts_1.createAccount)(lnp_id);
    if (typeof account_id !== "string") {
        throw new Error('account_id is undefined.');
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Cash Balances Transfers Cash Balances Get Cash Balances Get Cash Balances1", async () => {
    if (typeof account_id !== "string") {
        throw new Error('account_id is undefined.');
    }
    const result = await sdk_1.sdk.cashBalances.calculateCashBalance(account_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=cash_balances.test.js.map