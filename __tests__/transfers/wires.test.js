"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const accounts_1 = require("../accounts");
const vitest_2 = require("vitest");
const index_1 = require("./index");
let lnp_id;
let account_id;
let wire_withdrawal_id;
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
    wire_withdrawal_id = await (0, index_1.createWireWithdrawal)(account_id);
}, 60000);
(0, vitest_1.test)("Wires Transfers Create Wire Withdrawal Create Wire Withdrawal1", async () => {
    (0, vitest_1.expect)(wire_withdrawal_id).not.toBe(undefined);
});
(0, vitest_1.test)("Wires Transfers Get Wire Withdrawal Get Wire Withdrawal1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof wire_withdrawal_id !== "string") {
        throw new Error("wire_withdrawal_id is undefined.");
    }
    const result = await sdk_1.sdk.wires.getWireWithdrawal(account_id, wire_withdrawal_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Wires Cancel Wire Withdrawal Cancel Wre Withdrawal1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof wire_withdrawal_id !== "string") {
        throw new Error("wire_withdrawal_id is undefined.");
    }
    const request = {
        name: "accounts/" + account_id + "/wireWithdrawals/" + wire_withdrawal_id,
        reason: "User Request",
    };
    const result = await sdk_1.sdk.wires.cancelWireWithdrawal(request, account_id, wire_withdrawal_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Wires Transfers Get Wire Deposit Get Wire Deposit1", async () => {
    if (typeof index_1.withdrawal_account_id !== "string") {
        throw new Error("withdrawal_account_id is undefined.");
    }
    if (typeof index_1.wire_deposit_id !== "string") {
        throw new Error("wire_deposit_id is undefined.");
    }
    const result = await sdk_1.sdk.wires.getWireDeposit(index_1.withdrawal_account_id, index_1.wire_deposit_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=wires.test.js.map