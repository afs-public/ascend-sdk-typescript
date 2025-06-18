"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const accounts_1 = require("../accounts");
const index_1 = require("./index");
const vitest_2 = require("vitest");
const operations_1 = require("@apexfintechsolutions/ascend-sdk/models/operations");
let lnp_id;
let account_id;
let enrollment_ids;
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
}, 60000);
(0, vitest_1.test)("Test Instant Cash Transfer Transfers Create Ict Deposit Create Ict Deposit1", async () => {
    const deposit_id = await (0, index_1.createIctDeposit)(account_id || "");
    (0, vitest_1.expect)(deposit_id).toBeDefined();
    (0, vitest_1.expect)(deposit_id.length).greaterThan(0);
});
(0, vitest_1.test)("Test Instant Cash Transfer Transfers Get Ict Deposit Get Ict Deposit1", async () => {
    const deposit_id = await (0, index_1.createIctDeposit)(account_id || "");
    const result = await sdk_1.sdk.instantCashTransferICT.getIctDeposit(account_id || "", deposit_id);
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Instant Cash Transfer Transfers Cancel Ict Deposit Cancel Ict Deposit1", async () => {
    const deposit_id = await (0, index_1.createIctDeposit)(account_id || "");
    const result = await sdk_1.sdk.instantCashTransferICT.cancelIctDeposit({
        name: "accounts/" + account_id + "ictDeposits/" + deposit_id + ":cancel",
    }, account_id || "", deposit_id);
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Instant Cash Transfer Transfers Create Ict Withdrawal Create Ict Withdrawal1", async () => {
    const withdrawal = await (0, index_1.createIctWithdrawal)(account_id || "");
    (0, vitest_1.expect)(withdrawal).toBeDefined();
    (0, vitest_1.expect)(withdrawal.length).greaterThan(0);
});
(0, vitest_1.test)("Test Instant Cash Transfer Transfers Get Ict Withdrawal Get Ict Withdrawal1", async () => {
    const withdrawal = await (0, index_1.createIctWithdrawal)(account_id || "");
    const result = await sdk_1.sdk.instantCashTransferICT.getIctWithdrawal(account_id || "", withdrawal);
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Instant Cash Transfer Transfers Cancel Ict Withdrawal Cancel Ict Withdrawal1", async () => {
    const withdrawal = await (0, index_1.createIctWithdrawal)(account_id || "");
    await (0, sdk_1.timeout)(5000);
    const request = {
        name: "accounts/" + account_id + "/ictWithdrawals/" + withdrawal + ":cancel",
        reason: "User requested",
    };
    const result = await sdk_1.sdk.instantCashTransferICT.cancelIctWithdrawal(request, account_id || "", withdrawal);
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Instant Cash Transfer Transfers Locate Ict Report Locate Ict Report1", async () => {
    var _a;
    const request = {
        correspondentId: (_a = process.env["CORRESPONDENT_ID"]) !== null && _a !== void 0 ? _a : "",
        programDateFilterProgram: operations_1.ProgramDateFilterProgram.BrokerPartner,
        programDateFilterProcessDateYear: 2025,
        programDateFilterProcessDateMonth: 5,
        programDateFilterProcessDateDay: 28,
    };
    const result = await sdk_1.sdk.instantCashTransferICT.locateIctReport(request);
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=test_instant_cash_transfers.test.js.map