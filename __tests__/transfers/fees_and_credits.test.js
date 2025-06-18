"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const accounts_1 = require("../accounts");
const index_1 = require("./index");
const vitest_2 = require("vitest");
let lnp_id;
let account_id;
let enrollment_ids;
let fee_id;
let credit_id;
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
    enrollment_ids = await (0, accounts_1.enrollAccount)(account_id);
    if (typeof enrollment_ids !== "object") {
        throw new Error("enrollment_ids is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    (0, accounts_1.affirmAgreement)(account_id, enrollment_ids);
    await (0, sdk_1.timeout)(5000);
    fee_id = await (0, index_1.createFee)(account_id);
    if (typeof fee_id !== "string") {
        throw new Error("fee_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    credit_id = await (0, index_1.createCredit)(account_id);
    if (typeof credit_id !== "string") {
        throw new Error("credit_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("Fees and Credits Transfers Create Fee Create Fee1", async () => {
    (0, vitest_1.expect)(fee_id).not.toBe(undefined);
});
(0, vitest_1.test)("Fees and Credits Transfers Get Fee Get Fee1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof fee_id !== "string") {
        throw new Error("fee_id is undefined.");
    }
    const result = await sdk_1.sdk.feesAndCredits.getFee(account_id, fee_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Fees and Credits Transfers Cancel Fee Cancel Fee1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof fee_id !== "string") {
        throw new Error("fee_id is undefined.");
    }
    const request = {
        name: `accounts/${account_id}/feesAndCredits/${fee_id}`,
    };
    const result = await sdk_1.sdk.feesAndCredits.cancelFee(request, account_id, fee_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Fees and Credits Transfers Create Credit Create Credit1", async () => {
    (0, vitest_1.expect)(credit_id).not.toBe(undefined);
});
(0, vitest_1.test)("Fees and Credits Transfers Get Credit Get Credit1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof credit_id !== "string") {
        throw new Error("credit_id is undefined.");
    }
    const result = await sdk_1.sdk.feesAndCredits.getCredit(account_id, credit_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Fees and Credits Transfers Cancel Credit Cancel Credit1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof credit_id !== "string") {
        throw new Error("credit_id is undefined.");
    }
    const request = {
        name: `accounts/${account_id}/feesAndCredits/${credit_id}`,
    };
    const result = await sdk_1.sdk.feesAndCredits.cancelCredit(request, account_id, credit_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=fees_and_credits.test.js.map