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
let bank_relationship_id;
let microDeposits;
let ach_deposit_id;
let ach_withdrawal_id;
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
    bank_relationship_id = await (0, index_1.createBankRelationship)(account_id);
    if (typeof bank_relationship_id !== "string") {
        throw new Error("bank_relationship_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    microDeposits = await (0, index_1.correctMicroDeposits)(account_id, bank_relationship_id);
    if (typeof microDeposits !== "object") {
        throw new Error("microDeposits is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    await (0, index_1.verifyMicroDeposits)(account_id, bank_relationship_id, microDeposits);
    await (0, sdk_1.timeout)(5000);
    ach_deposit_id = await (0, index_1.createACHDeposit)(account_id, bank_relationship_id);
    if (typeof ach_deposit_id !== "string") {
        throw new Error("ach_deposit_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
    ach_withdrawal_id = await (0, index_1.createACHWithdrawal)(account_id, bank_relationship_id);
    if (typeof ach_withdrawal_id !== "string") {
        throw new Error("ach_withdrawal_id is undefined.");
    }
    await (0, sdk_1.timeout)(5000);
}, 60000);
(0, vitest_1.test)("ACH Transfers Transfers Create ACH Deposit Create ACH Deposit1", async () => {
    (0, vitest_1.expect)(ach_deposit_id).not.toBe(undefined);
});
(0, vitest_1.test)("ACH Transfers Transfers Get ACH Deposit Get ACH Deposit1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof ach_deposit_id !== "string") {
        throw new Error("ach_deposit_id is undefined.");
    }
    const result = await sdk_1.sdk.achTransfers.getAchDeposit(account_id, ach_deposit_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("ACH Transfers Transfers Cancel ACH Deposit Cancel ACH Deposit1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof ach_deposit_id !== "string") {
        throw new Error("ach_deposit_id is undefined.");
    }
    const request = {
        name: `accounts/${account_id}/achTransfers/${ach_deposit_id}`,
    };
    const result = await sdk_1.sdk.achTransfers.cancelAchDeposit(request, account_id, ach_deposit_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("ACH Transfers Transfers Create ACH Withdrawal Create ACH Withdrawal1", async () => {
    (0, vitest_1.expect)(ach_withdrawal_id).not.toBe(undefined);
});
(0, vitest_1.test)("ACH Transfers Transfers Get ACH Withdrawal Get ACH Withdrawal1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof ach_withdrawal_id !== "string") {
        throw new Error("ach_withdrawal_id is undefined.");
    }
    const result = await sdk_1.sdk.achTransfers.getAchWithdrawal(account_id, ach_withdrawal_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("ACH Transfers Transfers Cancel ACH Withdrawal Cancel ACH Withdrawal1", async () => {
    if (typeof account_id !== "string") {
        throw new Error("account_id is undefined.");
    }
    if (typeof ach_withdrawal_id !== "string") {
        throw new Error("ach_withdrawal_id is undefined.");
    }
    const request = {
        name: `accounts/${account_id}/achTransfers/${ach_withdrawal_id}`,
    };
    const result = await sdk_1.sdk.achTransfers.cancelAchWithdrawal(request, account_id, ach_withdrawal_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=ach_transfers.test.js.map