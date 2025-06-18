"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const luxon_1 = require("luxon");
const sdk_1 = require("../utils/sdk");
const components = __importStar(require("@apexfintechsolutions/ascend-sdk/models/components"));
const accounts_1 = require("../accounts");
const index_1 = require("./index");
const vitest_2 = require("vitest");
const errors = __importStar(require("@apexfintechsolutions/ascend-sdk/models/errors"));
const crypto_1 = __importDefault(require("crypto"));
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
(0, vitest_1.test)("Test Test Simulation Transfers Get Micro Deposit Get Micro Deposit1", async () => {
    (0, vitest_1.expect)(typeof microDeposits).toBe("object");
});
let currentTime = luxon_1.DateTime.now().setZone("America/Chicago");
let morning = currentTime.set({
    hour: 23,
    minute: 30,
    second: 0,
    millisecond: 0,
});
if (currentTime < morning) {
    morning = morning.minus({ days: 1 }); // If current time is before 11:30 PM, adjust to the previous day
}
let afternoon = currentTime.set({
    hour: 18,
    minute: 0,
    second: 0,
    millisecond: 0,
});
// Current time must be between 11:30 PM CT and 6:00 PM CT
if (currentTime >= morning && currentTime <= afternoon) {
    (0, vitest_1.test)("Test Test Simulation Transfers Force Approve Ach Deposit Force Approve Ach Deposit1", async () => {
        const pending_deposit_id = await (0, index_1.createACHDeposit)(index_1.deceased_account_id, index_1.deceased_bank_relationship_id);
        (0, vitest_1.expect)(pending_deposit_id).toBeDefined();
        await (0, sdk_1.timeout)(5000);
        try {
            const result = await sdk_1.sdk.testSimulation.forceApproveAchDeposit({
                name: `accounts/${index_1.deceased_account_id}/achdeposits/${index_1.deceased_bank_relationship_id}`
            }, index_1.deceased_account_id || '', pending_deposit_id || '');
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
        }
        catch (status) {
            (0, vitest_1.expect)(status).toBeInstanceOf(errors.Status);
            if (status instanceof errors.Status) {
                (0, vitest_1.expect)(status.code).toBe(3);
                (0, vitest_1.expect)(status.message.toLowerCase()).toContain("that does not need review");
            }
        }
    });
    (0, vitest_1.test)("Test Test Simulation Transfers Force Noc Ach Deposit Force Noc Ach Deposit1", async () => {
        const pending_deposit_id = await (0, index_1.createACHDeposit)(account_id || "", bank_relationship_id || "");
        (0, vitest_1.expect)(pending_deposit_id).toBeDefined();
        await (0, sdk_1.timeout)(5000);
        const request = {
            nachaNoc: {
                code: components.Code.C05,
                updatedBankAccountType: components.UpdatedBankAccountType.Checking,
            },
            name: `accounts/${account_id}/achDeposits/${pending_deposit_id}`,
        };
        const result = await sdk_1.sdk.testSimulation.forceNocAchDeposit(request, account_id || "", pending_deposit_id || "");
        (0, vitest_1.expect)(result).toBeDefined();
        (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
    });
    (0, vitest_1.test)("Test Test Simulation Transfers Force Reject Ach Deposit Force Reject Ach Deposit1", async () => {
        const pending_deposit_id = await (0, index_1.createACHDeposit)(index_1.deceased_account_id, index_1.deceased_bank_relationship_id);
        await (0, sdk_1.timeout)(5000);
        try {
            const result = await sdk_1.sdk.testSimulation.forceRejectAchDeposit({
                name: `accounts/${index_1.deceased_account_id}/achDeposits/${pending_deposit_id}`,
            }, index_1.deceased_account_id, pending_deposit_id || "");
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
        }
        catch (status) {
            (0, vitest_1.expect)(status).toBeInstanceOf(errors.Status);
            if (status instanceof errors.Status) {
                (0, vitest_1.expect)(status.code).toBe(3);
                (0, vitest_1.expect)(status.message.toLowerCase()).toContain("that does not need review");
            }
        }
    });
    (0, vitest_1.test)("Test Test Simulation Transfers Force Ach Deposit Return Force Ach Deposit Return1", async () => {
        const pending_deposit_id = await (0, index_1.createACHDeposit)(account_id || "", bank_relationship_id || "");
        await (0, sdk_1.timeout)(5000);
        const request = {
            nachaReturn: {
                code: components.NachaReturnCreateCode.R16,
            },
            name: `accounts/${account_id}/achDeposits/${pending_deposit_id}`,
        };
        try {
            const result = await sdk_1.sdk.testSimulation.forceReturnAchDeposit(request, account_id || "", pending_deposit_id || "");
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
        }
        catch (status) {
            (0, vitest_1.expect)(status).toBeInstanceOf(errors.Status);
            if (status instanceof errors.Status) {
                (0, vitest_1.expect)(status.code).toBe(3);
                (0, vitest_1.expect)(status.message.toLowerCase()).toContain("current state");
            }
        }
    });
    (0, vitest_1.test)("Test Test Simulation Transfers Force Approve Ach Withdrawal Force Approve Ach Withdrawal1", async () => {
        const pending_withdrawal_id = await (0, index_1.createACHWithdrawal)(index_1.deceased_account_id, index_1.deceased_bank_relationship_id);
        await (0, sdk_1.timeout)(10000);
        try {
            const result = await sdk_1.sdk.testSimulation.forceApproveAchWithdrawal({
                name: `accounts/${index_1.deceased_account_id}/achWithdrawals/${pending_withdrawal_id}`,
            }, index_1.deceased_account_id, pending_withdrawal_id || '');
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
        }
        catch (status) {
            (0, vitest_1.expect)(status).toBeInstanceOf(errors.Status);
            if (status instanceof errors.Status) {
                (0, vitest_1.expect)(status.code).toBe(3);
                (0, vitest_1.expect)(status.message.toLowerCase()).toContain("that does not need review");
            }
        }
    });
    (0, vitest_1.test)("test Test Simulation Transfers Force Noc Ach Withdrawal Force Noc Ach Withdrawal1", async () => {
        const completed_withdrawal_id = await (0, index_1.createCompletedWithdrawal)(index_1.withdrawal_account_id);
        const request = {
            nachaNoc: {
                code: components.Code.C05,
                updatedBankAccountType: components.UpdatedBankAccountType.Checking,
            },
            name: `accounts/${index_1.withdrawal_account_id}/achWithdrawals/${completed_withdrawal_id}`,
        };
        const result = await sdk_1.sdk.testSimulation.forceNocAchWithdrawal(request, index_1.withdrawal_account_id, completed_withdrawal_id);
        (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
    });
    (0, vitest_1.test)("Test Test Simulation Transfers Force Reject Ach Withdrawal Force Reject Ach Withdrawal1", async () => {
        const pending_withdrawal_id = await (0, index_1.createACHWithdrawal)(index_1.deceased_account_id, index_1.deceased_bank_relationship_id);
        await (0, sdk_1.timeout)(5000);
        try {
            const result = await sdk_1.sdk.testSimulation.forceRejectAchWithdrawal({
                name: `accounts/${index_1.deceased_account_id}/achWithdrawals/${pending_withdrawal_id}`,
            }, index_1.deceased_account_id, pending_withdrawal_id || "");
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
        }
        catch (status) {
            (0, vitest_1.expect)(status).toBeInstanceOf(errors.Status);
            if (status instanceof errors.Status) {
                (0, vitest_1.expect)(status.code).toBe(3);
                (0, vitest_1.expect)(status.message.toLowerCase()).toContain("that does not need review");
            }
        }
    });
    (0, vitest_1.test)("Test Test Simulation Transfers Force Ach Withdrawal Return Force Ach Withdrawal Return1", async () => {
        const completed_withdrawal_id = await (0, index_1.createCompletedWithdrawal)(index_1.withdrawal_account_id);
        const request = {
            nachaReturn: {
                code: components.NachaReturnCreateCode.R16,
            },
            name: `accounts/${index_1.withdrawal_account_id}/achWithdrawals/${completed_withdrawal_id}`,
        };
        try {
            const result = await sdk_1.sdk.testSimulation.forceReturnAchWithdrawal(request, index_1.withdrawal_account_id, completed_withdrawal_id);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
        }
        catch (status) {
            (0, vitest_1.expect)(status).toBeInstanceOf(errors.Status);
            if (status instanceof errors.Status) {
                (0, vitest_1.expect)(status.code).toBe(3);
                (0, vitest_1.expect)(status.message.toLowerCase()).toContain("current state");
            }
        }
    });
}
else {
    console.log("Skipping Endpoint Tests that require current time to be between 11:30 PM CT and 6:00 PM CT");
}
currentTime = luxon_1.DateTime.now().setZone("America/Chicago");
morning = currentTime.set({ hour: 6, minute: 0, second: 0, millisecond: 0 });
afternoon = currentTime.set({ hour: 15, minute: 0, second: 0, millisecond: 0 });
if (morning <= currentTime && currentTime <= afternoon) {
    (0, vitest_1.test)("Test Test Simulation Transfers Force Ict Deposit Approve Force Ict Deposit Approve1", async () => {
        const ictDeposit = await (0, index_1.createIctDepositPending)(index_1.deceased_account_id);
        await (0, sdk_1.timeout)(10000);
        try {
            const result = await sdk_1.sdk.testSimulation.forceApproveIctDeposit({
                name: `accounts/${index_1.deceased_account_id}/ictDeposits/${ictDeposit}`
            }, index_1.deceased_account_id, ictDeposit);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
        }
        catch (status) {
            (0, vitest_1.expect)(status).toBeInstanceOf(errors.Status);
            if (status instanceof errors.Status) {
                (0, vitest_1.expect)(status.code).toBe(3);
                (0, vitest_1.expect)(status.message.toLowerCase()).toContain("that does not need review");
            }
        }
    });
    (0, vitest_1.test)("Test Test Simulation Transfers Force Ict Deposit Reject Force Ict Deposit Reject1", async () => {
        const pending_deposit_id = await (0, index_1.createIctDepositPending)(index_1.deceased_account_id);
        await (0, sdk_1.timeout)(10000);
        try {
            const result = await sdk_1.sdk.testSimulation.forceRejectIctDeposit({
                name: `accounts/${index_1.deceased_account_id}/ictDeposits/${pending_deposit_id}`,
            }, index_1.deceased_account_id, pending_deposit_id);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
        }
        catch (status) {
            (0, vitest_1.expect)(status).toBeInstanceOf(errors.Status);
            if (status instanceof errors.Status) {
                (0, vitest_1.expect)(status.code).toBe(3);
                (0, vitest_1.expect)(status.message.toLowerCase()).toContain("that does not need review");
            }
        }
    });
    (0, vitest_1.test)("Test Test Simulation Transfers Force Ict Withdrawal Approve Force Ict Withdrawal Approve1", async () => {
        const pending_withdrawal_id = await (0, index_1.createIctWithdrawal)(index_1.deceased_account_id);
        await (0, sdk_1.timeout)(10000);
        try {
            const result = await sdk_1.sdk.testSimulation.forceApproveIctWithdrawal({
                name: `accounts/${index_1.deceased_account_id}/ictWithdrawals/${pending_withdrawal_id}`
            }, index_1.deceased_account_id, pending_withdrawal_id);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
        }
        catch (status) {
            (0, vitest_1.expect)(status).toBeInstanceOf(errors.Status);
            if (status instanceof errors.Status) {
                (0, vitest_1.expect)(status.code).toBe(3);
                (0, vitest_1.expect)(status.message.toLowerCase()).toContain("that does not need review");
            }
        }
    });
    (0, vitest_1.test)("Test Test Simulation Transfers Force Ict Withdrawal Reject Force Ict Withdrawal Reject1", async () => {
        const pending_withdrawal_id = await (0, index_1.createIctWithdrawal)(index_1.deceased_account_id);
        await (0, sdk_1.timeout)(10000);
        try {
            const result = await sdk_1.sdk.testSimulation.forceRejectIctWithdrawal({
                name: `accounts/${index_1.deceased_account_id}/ictWithdrawals/${pending_withdrawal_id}`,
            }, index_1.deceased_account_id, pending_withdrawal_id);
            (0, vitest_1.expect)(result).toBeDefined();
            (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
        }
        catch (status) {
            (0, vitest_1.expect)(status).toBeInstanceOf(errors.Status);
            if (status instanceof errors.Status) {
                (0, vitest_1.expect)(status.code).toBe(3);
                (0, vitest_1.expect)(status.message.toLowerCase()).toContain("that does not need review");
            }
        }
    });
}
else {
    console.log("Skipping Endpoint Tests that require current time to be between 6:00 AM CT and 3:00 PM CT");
}
currentTime = luxon_1.DateTime.now().setZone("America/Chicago");
morning = currentTime.set({ hour: 7, minute: 0, second: 0, millisecond: 0 });
afternoon = currentTime.set({
    hour: 14,
    minute: 30,
    second: 0,
    millisecond: 0,
});
if (morning <= currentTime && currentTime <= afternoon) {
    (0, vitest_1.test)("Test Test Simulation Transfers Force Approve Wire Withdrawal Force Approve Wire Withdrawal1", async () => {
        const wire_withdrawal_id = await (0, index_1.createWireWithdrawal)(index_1.withdrawal_account_id || '');
        await (0, sdk_1.timeout)(5000);
        const request = {
            name: `accounts/${index_1.withdrawal_account_id}/wireWithdrawals/${wire_withdrawal_id}`
        };
        const result = await sdk_1.sdk.testSimulation.forceApproveWireWithdrawal(request, index_1.withdrawal_account_id || '', wire_withdrawal_id || '');
        (0, vitest_1.expect)(result).toBeDefined();
        (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
    });
    (0, vitest_1.test)("Test Test Simulation Transfers Force Reject Wire Withdrawal Force Reject Wire Withdrawal1", async () => {
        const wire_withdrawal_id = await (0, index_1.createWireWithdrawal)(index_1.withdrawal_account_id || "");
        await (0, sdk_1.timeout)(5000);
        const request = {
            name: `accounts/${index_1.withdrawal_account_id}/wireWithdrawals/${wire_withdrawal_id}`,
        };
        const result = await sdk_1.sdk.testSimulation.forceRejectWireWithdrawal(request, index_1.withdrawal_account_id || "", wire_withdrawal_id || "");
        (0, vitest_1.expect)(result).toBeDefined();
        (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
    });
}
else {
    console.log("Skipping Endpoint Tests that require current time to be between 7:00 AM CT and 2:30 PM CT");
}
currentTime = luxon_1.DateTime.now().setZone("America/Chicago");
morning = currentTime.set({ hour: 6, minute: 0, second: 0, millisecond: 0 });
afternoon = currentTime.set({ hour: 19, minute: 0, second: 0, millisecond: 0 });
if (morning <= currentTime && currentTime <= afternoon) {
    (0, vitest_1.test)("Test Test Simulation Transfers Force Approve Cash Journal Force Accept Cash Journal1", async () => {
        // Counter the amount of money the cash journal is taking
        const transfer_request = {
            amount: {
                value: "5000000",
            },
            clientTransferId: crypto_1.default.randomUUID(),
            description: "Credit given as promotion",
            type: components.TransfersCreditCreateType.Promotional,
        };
        await sdk_1.sdk.feesAndCredits.createCredit(transfer_request, index_1.withdrawal_account_id);
        const cash_journal_id = await (0, index_1.createCashJournal)(index_1.deceased_account_id || '');
        await (0, sdk_1.timeout)(5000);
        const request = {
            name: `accounts/${index_1.withdrawal_account_id}/cashJournals/${cash_journal_id}`
        };
        const result = await sdk_1.sdk.testSimulation.forceApproveCashJournal(request, cash_journal_id);
        (0, vitest_1.expect)(result).toBeDefined();
        (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
    });
    (0, vitest_1.test)("Test Test Simulation Transfers Force Reject Cash Journal Force Reject Cash Journal1", async () => {
        const cash_journal_id = await (0, index_1.createCashJournal)(index_1.deceased_account_id || "");
        await (0, sdk_1.timeout)(5000);
        const request = {
            name: `accounts/${index_1.withdrawal_account_id}/cashJournals/${cash_journal_id}`,
        };
        const result = await sdk_1.sdk.testSimulation.forceRejectCashJournal(request, cash_journal_id);
        (0, vitest_1.expect)(result).toBeDefined();
        (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
    });
}
else {
    console.log("Skipping Endpoint Tests that require current time to be between 6:00 AM CT and 7:00 PM CT");
}
//# sourceMappingURL=test_test_simulation.test.js.map