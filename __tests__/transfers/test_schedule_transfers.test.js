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
}, 60000);
(0, vitest_1.test)("Test Schedule Transfers Transfers Create Ach Deposit Schedule Create Ach Deposit Schedule1", async () => {
    const scheduled_deposit_id = await (0, index_1.createScheduledAchDeposit)(account_id || "", bank_relationship_id || "");
    (0, vitest_1.expect)(typeof scheduled_deposit_id).toBe("string");
    (0, vitest_1.expect)(scheduled_deposit_id.length).greaterThan(0);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers List Ach Deposit Schedules List Ach Deposit Schedules1", async () => {
    const result = await sdk_1.sdk.scheduleTransfers.listAchDepositSchedules(account_id || "");
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers Get Ach Deposit Schedule Get Ach Deposit Schedule1", async () => {
    const scheduled_deposit_id = await (0, index_1.createScheduledAchDeposit)(account_id || "", bank_relationship_id || "");
    const result = await sdk_1.sdk.scheduleTransfers.getAchDepositSchedule(account_id || "", scheduled_deposit_id || "");
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers Update Ach Deposit Schedule Update Ach Deposit Schedule1", async () => {
    const scheduled_deposit_id = await (0, index_1.createScheduledAchDeposit)(account_id || "", bank_relationship_id || "");
    const request = {
        scheduleDetails: {
            amount: {
                value: "100",
            },
        },
    };
    const result = await sdk_1.sdk.scheduleTransfers.updateAchDepositSchedule(request, account_id || "", scheduled_deposit_id, "schedule_details.amount");
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers Cancel Ach Deposit Schedule Cancel Ach Deposit Schedule1", async () => {
    const scheduled_deposit_id = await (0, index_1.createScheduledAchDeposit)(account_id || "", bank_relationship_id || "");
    const request = {
        name: "accounts/" + account_id + "/scheduleTransfers/" + scheduled_deposit_id,
    };
    const result = await sdk_1.sdk.scheduleTransfers.cancelAchDepositSchedule(request, account_id || "", scheduled_deposit_id);
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers Create Ach Withdrawal Schedule Create Ach Deposit Withdrawal1", async () => {
    const withdrawal_id = await (0, index_1.createScheduledAchWithdrawal)(account_id || "", bank_relationship_id || "");
    (0, vitest_1.expect)(withdrawal_id.length).greaterThan(0);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers List Ach Withdrawal Schedules List Ach Withdrawal Schedules1", async () => {
    const result = await sdk_1.sdk.scheduleTransfers.listAchWithdrawalSchedules(account_id || "");
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers Get Ach Withdrawal Schedule Get Ach Withdrawal Schedule1", async () => {
    const withdrawal_id = await (0, index_1.createScheduledAchWithdrawal)(account_id || "", bank_relationship_id || "");
    const result = await sdk_1.sdk.scheduleTransfers.getAchWithdrawalSchedule(account_id || "", withdrawal_id);
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers Update Ach Withdrawal Schedule Update Ach Withdrawal Schedule1", async () => {
    const withdrawal_id = await (0, index_1.createScheduledAchWithdrawal)(account_id || "", bank_relationship_id || "");
    const request = {
        scheduleDetails: {
            amount: {
                value: "100",
            },
        },
    };
    const result = await sdk_1.sdk.scheduleTransfers.updateAchWithdrawalSchedule(request, account_id || "", withdrawal_id, "schedule_details.amount");
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers Cancel Ach Withdrawal Schedule Cancel Ach Withdrawal Schedule1", async () => {
    const withdrawal_id = await (0, index_1.createScheduledAchWithdrawal)(account_id || "", bank_relationship_id || "");
    const request = {
        name: "accounts/" + account_id + "/scheduleTransfers/" + withdrawal_id,
    };
    const result = await sdk_1.sdk.scheduleTransfers.cancelAchWithdrawalSchedule(request, account_id || "", withdrawal_id);
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers Create Wire Withdrawal Schedule Create Wire Withdrawal Schedule1", async () => {
    const scheduled_wire_withdrawal_id = await (0, index_1.createScheduledWireWithdrawal)(account_id || "");
    (0, vitest_1.expect)(typeof scheduled_wire_withdrawal_id).toBe("string");
    (0, vitest_1.expect)(scheduled_wire_withdrawal_id.length).greaterThan(0);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers List Wire Withdrawals Schedules List Wire Withdrawals Schedules1", async () => {
    const result = await sdk_1.sdk.scheduleTransfers.listWireWithdrawalSchedules(account_id || "");
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers Get Wire Withdrawal Schedule Get Wire Withdrawal Schedule1", async () => {
    const withdrawal_id = await (0, index_1.createScheduledWireWithdrawal)(account_id || "");
    const result = await sdk_1.sdk.scheduleTransfers.getWireWithdrawalSchedule(account_id || "", withdrawal_id);
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers Update Wire Withdrawal Schedule Update Wire Withdrawal Schedule1", async () => {
    const withdrawal_id = await (0, index_1.createScheduledWireWithdrawal)(account_id || "");
    const request = {
        scheduleDetails: {
            amount: {
                value: "100",
            },
        },
    };
    const result = await sdk_1.sdk.scheduleTransfers.updateWireWithdrawalSchedule(request, account_id || "", withdrawal_id, "schedule_details.amount");
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers Cancel Wire Withdrawal Schedule Cancel Wire Withdrawal Schedule1", async () => {
    const withdrawal_id = await (0, index_1.createScheduledWireWithdrawal)(account_id || "");
    const request = {
        name: "accounts/" + account_id + "/scheduleTransfers/" + withdrawal_id,
    };
    const result = await sdk_1.sdk.scheduleTransfers.cancelWireWithdrawalSchedule(request, account_id || "", withdrawal_id);
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Test Schedule Transfers Transfers List Schedule Summaries List Schedule Summaries1", async () => {
    const result = await sdk_1.sdk.scheduleTransfers.listScheduleSummaries();
    (0, vitest_1.expect)(result).toBeDefined();
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=test_schedule_transfers.test.js.map