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
exports.wire_deposit_id = exports.deceased_bank_relationship_id = exports.deceased_account_id = exports.withdrawal_account_id = void 0;
exports.createBankRelationship = createBankRelationship;
exports.failingMicroDeposits = failingMicroDeposits;
exports.correctMicroDeposits = correctMicroDeposits;
exports.verifyMicroDeposits = verifyMicroDeposits;
exports.createACHDeposit = createACHDeposit;
exports.createACHWithdrawal = createACHWithdrawal;
exports.createFee = createFee;
exports.createCredit = createCredit;
exports.createCompletedWithdrawal = createCompletedWithdrawal;
exports.createIctDepositPending = createIctDepositPending;
exports.createScheduledAchDeposit = createScheduledAchDeposit;
exports.createIctDeposit = createIctDeposit;
exports.createIctWithdrawal = createIctWithdrawal;
exports.createScheduledAchWithdrawal = createScheduledAchWithdrawal;
exports.createScheduledWireWithdrawal = createScheduledWireWithdrawal;
exports.createCashJournal = createCashJournal;
exports.createWireWithdrawal = createWireWithdrawal;
const sdk_1 = require("../utils/sdk");
const components = __importStar(require("@apexfintechsolutions/ascend-sdk/models/components"));
const components_1 = require("@apexfintechsolutions/ascend-sdk/models/components");
const crypto_1 = __importDefault(require("crypto"));
exports.withdrawal_account_id = "01JHGTEPC6ZTAHCFRH2MD3VJJT";
exports.deceased_account_id = "01JHK07CRQ9X8P5XE9JWG4PFSP";
exports.deceased_bank_relationship_id = "6786a8e8ea916b424a53cc24";
exports.wire_deposit_id = "20250218014356";
async function createBankRelationship(account_id) {
    const randomNumber = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    const request = {
        bankAccount: {
            accountNumber: randomNumber.toString(),
            owner: "TEST123",
            routingNumber: "112203216",
            type: components.BankAccountCreateType.Savings,
        },
        nickname: "ACH TEST",
        verificationMethod: components.VerificationMethod.MicroDeposit,
    };
    const result = await sdk_1.sdk.bankRelationships.createBankRelationship(request, account_id);
    if (result?.bankRelationship?.name) {
        return result.bankRelationship.name.split("/")[3];
    }
    return undefined;
}
async function failingMicroDeposits(account_id, bank_relationship_id) {
    const result = await sdk_1.sdk.testSimulation.getMicroDepositAmounts(account_id, bank_relationship_id);
    if (result?.microDepositAmounts?.amount1?.value &&
        result?.microDepositAmounts?.amount2?.value) {
        const amount1 = parseFloat(result.microDepositAmounts.amount1.value) + 0.01;
        const amount2 = parseFloat(result.microDepositAmounts.amount2.value) + 0.01;
        return [amount1.toString(), amount2.toString()];
    }
    return undefined;
}
async function correctMicroDeposits(account_id, bank_relationship_id) {
    const result = await sdk_1.sdk.testSimulation.getMicroDepositAmounts(account_id, bank_relationship_id);
    if (result?.microDepositAmounts?.amount1?.value &&
        result?.microDepositAmounts?.amount2?.value) {
        return [
            result?.microDepositAmounts?.amount1?.value,
            result?.microDepositAmounts?.amount2?.value,
        ];
    }
    return undefined;
}
async function verifyMicroDeposits(account_id, bank_relationship_id, amounts) {
    const request = {
        amounts: {
            amount1: {
                value: amounts[0],
            },
            amount2: {
                value: amounts[1],
            },
        },
        name: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
    };
    await sdk_1.sdk.bankRelationships.verifyMicroDeposits(request, account_id, bank_relationship_id);
}
async function createACHDeposit(account_id, bank_relationship_id) {
    const request = {
        amount: {
            value: "1000.00",
        },
        bankRelationship: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
        clientTransferId: crypto_1.default.randomUUID(),
    };
    const result = await sdk_1.sdk.achTransfers.createAchDeposit(request, account_id);
    if (result?.achDeposit?.name) {
        return result.achDeposit.name.split("/")[3];
    }
    return undefined;
}
async function createACHWithdrawal(account_id, bank_relationship_id) {
    const request = {
        bankRelationship: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
        amount: {
            value: "0.01",
        },
        clientTransferId: crypto_1.default.randomUUID(),
        fullDisbursement: false,
        memo: "ACH",
    };
    const result = await sdk_1.sdk.achTransfers.createAchWithdrawal(request, account_id);
    if (result?.achWithdrawal?.name) {
        return result.achWithdrawal.name.split("/")[3];
    }
    return undefined;
}
async function createFee(account_id) {
    const request = {
        amount: {
            value: "10",
        },
        clientTransferId: crypto_1.default.randomUUID(),
        description: "Fee charged",
        type: components.TransfersFeeCreateType.Management,
    };
    const result = await sdk_1.sdk.feesAndCredits.createFee(request, account_id);
    if (result?.transfersFee?.name) {
        return result.transfersFee.name.split("/")[3];
    }
    return undefined;
}
async function createCredit(account_id) {
    const request = {
        amount: {
            value: "10",
        },
        clientTransferId: crypto_1.default.randomUUID(),
        description: "Credit given as promotion",
        type: components.TransfersCreditCreateType.Promotional,
    };
    const result = await sdk_1.sdk.feesAndCredits.createCredit(request, account_id);
    if (result?.transfersCredit?.name) {
        return result.transfersCredit.name.split("/")[3];
    }
    return undefined;
}
async function createCompletedWithdrawal(withdrawal_account_id) {
    // Cancel any approved relationships
    const res = await sdk_1.sdk.bankRelationships.listBankRelationships(withdrawal_account_id);
    const max_relationships = res?.listBankRelationshipsResponse?.bankRelationships?.length ?? 0;
    let attempt_counts = 0;
    while (attempt_counts < max_relationships) {
        if (res?.listBankRelationshipsResponse?.bankRelationships?.at(attempt_counts)
            ?.state?.state === components_1.BankRelationshipStateState.Approved) {
            const cancel_bank_relationship_id = res?.listBankRelationshipsResponse?.bankRelationships
                ?.at(attempt_counts)
                ?.name?.split("/")
                .at(-1);
            const request = {
                name: `accounts/${withdrawal_account_id}/bankRelationships/${cancel_bank_relationship_id}`,
                comment: "Canceling Bank User Request",
            };
            await sdk_1.sdk.bankRelationships.cancelBankRelationship(request, withdrawal_account_id, cancel_bank_relationship_id || "");
        }
        attempt_counts += 1;
    }
    // Create a new bank relationship
    const request = {
        bankAccount: {
            accountNumber: `${Math.floor(Math.random() * 99999999) + 10000000}`,
            owner: "TEST123",
            routingNumber: "112203216",
            type: components.BankAccountCreateType.Savings,
        },
        nickname: "ACH TEST",
        verificationMethod: components.VerificationMethod.MicroDeposit,
    };
    const res2 = await sdk_1.sdk.bankRelationships.createBankRelationship(request, withdrawal_account_id);
    const bank_relationship_id = res2?.bankRelationship?.name?.split("/")?.at(-1) || "";
    await (0, sdk_1.timeout)(15000);
    const microdeposit_amts = (await correctMicroDeposits(withdrawal_account_id, bank_relationship_id)) ||
        [];
    await (0, sdk_1.timeout)(10000);
    await verifyMicroDeposits(withdrawal_account_id, bank_relationship_id, microdeposit_amts);
    await (0, sdk_1.timeout)(5000);
    const withdrawal_id = await createACHWithdrawal(withdrawal_account_id, bank_relationship_id);
    return withdrawal_id || "";
}
// Used for the test_simulation tests - the ICT deposit has to be created
// on the deceased account to be in the pending state
async function createIctDepositPending(account_id) {
    const ict_deposit_request = {
        amount: { value: "1000.00" },
        clientTransferId: crypto_1.default.randomUUID(),
        program: components.Program.BrokerPartner,
        travelRule: {
            individualOriginatingParty: {
                address: {
                    addressLines: ["19409 Sherilyn Courts"],
                    regionCode: "US",
                    postalCode: "97035",
                    administrativeArea: "OR",
                    locality: "Portland",
                },
                familyName: "Jacob",
                givenNames: ["Bob"],
            },
            individualRecipientParty: {
                address: {
                    addressLines: ["19409 Sherilyn Courts"],
                    regionCode: "US",
                    postalCode: "97035",
                    administrativeArea: "OR",
                    locality: "Portland",
                },
                familyName: "Jacob",
                givenNames: ["Bob"],
            },
            originatingInstitution: {
                accountId: "09673049",
                title: "Default Bank",
            },
        },
    };
    const response = await sdk_1.sdk.instantCashTransferICT.createIctDeposit(ict_deposit_request, account_id);
    const deposit_id = response.ictDeposit?.name?.split("/").at(-1);
    return deposit_id || "";
}
async function createScheduledAchDeposit(enrolled_account_id, bank_relationship_id) {
    const today = new Date(); // datetime.datetime.now()
    const ach_deposit_schedule_request = {
        bankRelationship: "accounts/" +
            enrolled_account_id +
            "/bankRelationships/" +
            bank_relationship_id,
        scheduleDetails: {
            amount: {
                value: "100",
            },
            clientScheduleId: crypto_1.default.randomUUID(),
            scheduleProperties: {
                startDate: {
                    year: today.getFullYear(),
                    month: today.getMonth() + 1,
                    day: today.getDate(),
                },
                timeUnit: components.TimeUnit.Month,
                unitMultiplier: 1,
                occurrences: 12,
            },
        },
    };
    const res = await sdk_1.sdk.scheduleTransfers.createAchDepositSchedule(ach_deposit_schedule_request, enrolled_account_id);
    if (res.httpMeta.response.status == 200) {
        return res?.achDepositSchedule?.name?.split("/")[3] || "";
    }
    else {
        return "";
    }
}
// Used for the ICT tests - the ict deposit created will not be PENDING
async function createIctDeposit(enrolled_account_id) {
    const request = {
        amount: {
            value: "1000.00",
        },
        clientTransferId: crypto_1.default.randomUUID(),
        program: components.Program.BrokerPartner,
        travelRule: {
            individualOriginatingParty: {
                address: {
                    addressLines: ["123 Main St"],
                    regionCode: "US",
                    postalCode: "12345",
                    administrativeArea: "NY",
                    locality: "New York",
                },
                familyName: "Dough",
                givenNames: ["Jane"],
            },
            individualRecipientParty: {
                address: {
                    addressLines: ["123 Main St"],
                    regionCode: "US",
                    postalCode: "12345",
                    administrativeArea: "NY",
                    locality: "New York",
                },
                familyName: "Dough",
                givenNames: ["Jane"],
            },
            originatingInstitution: {
                accountId: "09673049",
                title: "Default Bank",
            },
        },
    };
    const result = await sdk_1.sdk.instantCashTransferICT.createIctDeposit(request, enrolled_account_id);
    if (result?.ictDeposit?.name) {
        return result.ictDeposit.name.split("/")[3] || "";
    }
    return "";
}
async function createIctWithdrawal(enrolled_account_id) {
    await (0, sdk_1.timeout)(5000);
    const request = {
        amount: { value: "0.01" },
        clientTransferId: crypto_1.default.randomUUID(),
        program: components.IctWithdrawalCreateProgram.BrokerPartner,
        travelRule: {
            recipientInstitution: {
                accountId: "09673049",
                title: "Default Bank",
            },
        },
    };
    const result = await sdk_1.sdk.instantCashTransferICT.createIctWithdrawal(request, enrolled_account_id);
    if (result?.ictWithdrawal?.name) {
        return result.ictWithdrawal.name.split("/")[3] || "";
    }
    return "";
}
async function createScheduledAchWithdrawal(enrolled_account_id, bank_relationship_id) {
    const today = new Date();
    const ach_withdrawal_schedule_request = {
        bankRelationship: "accounts/" +
            enrolled_account_id +
            "/bankRelationships/" +
            bank_relationship_id,
        scheduleDetails: {
            amount: {
                value: "100",
            },
            clientScheduleId: crypto_1.default.randomUUID(),
            scheduleProperties: {
                occurrences: 10,
                startDate: {
                    year: today.getFullYear(),
                    month: today.getMonth() + 1,
                    day: today.getDate(),
                },
                timeUnit: components.TimeUnit.Month,
                unitMultiplier: 1,
            },
        },
    };
    const res = await sdk_1.sdk.scheduleTransfers.createAchWithdrawalSchedule(ach_withdrawal_schedule_request, enrolled_account_id || "");
    if (res.httpMeta.response.status == 200) {
        return res?.achWithdrawalSchedule?.name?.split("/")[3] || "";
    }
    else {
        return "";
    }
}
async function createScheduledWireWithdrawal(enrolled_account_id) {
    const today = new Date(); // datetime.datetime.now()
    const wire_withdrawal_schedule_request = {
        beneficiary: {
            account: enrolled_account_id,
        },
        recipientBank: {
            bankId: {
                id: "ABNANL2AXXX",
                type: components.RecipientBankBankIdCreateType.Aba,
            },
        },
        scheduleDetails: {
            amount: {
                value: "100",
            },
            clientScheduleId: crypto_1.default.randomUUID(),
            scheduleProperties: {
                startDate: {
                    year: today.getFullYear(),
                    month: today.getMonth() + 1,
                    day: today.getDate(),
                },
                timeUnit: components.TimeUnit.Month,
                unitMultiplier: 1,
                occurrences: 12,
            },
        },
    };
    const res = await sdk_1.sdk.scheduleTransfers.createWireWithdrawalSchedule(wire_withdrawal_schedule_request, enrolled_account_id || "");
    if (res.httpMeta.response.status == 200) {
        return res?.wireWithdrawalSchedule?.name?.split("/")[3] || "";
    }
    else {
        return "";
    }
}
async function createCashJournal(account_id) {
    const cash_journal_request = {
        clientTransferId: crypto_1.default.randomUUID(),
        destinationAccount: "accounts/" + account_id,
        amount: {
            value: "500001.00",
        },
        sourceAccount: "accounts/" + exports.withdrawal_account_id,
    };
    const response = await sdk_1.sdk.journals.createCashJournal(cash_journal_request);
    const journal_id = response.cashJournal?.name?.split("/").at(-1);
    return journal_id || "";
}
async function createWireWithdrawal(account_id) {
    const wire_withdrawal_request = {
        amount: {
            value: "1.00",
        },
        beneficiary: {
            account: account_id,
            accountTitle: "Test",
            address: {
                streetAddress: ["123 Main St"],
                city: "Portland",
                state: "OR",
                postalCode: "97201",
                country: "USA",
            },
            thirdParty: true,
        },
        recipientBank: {
            bankId: {
                id: "011000028",
                type: components.RecipientBankBankIdCreateType.Aba,
            },
        },
        clientTransferId: crypto_1.default.randomUUID(),
    };
    const res = await sdk_1.sdk.wires.createWireWithdrawal(wire_withdrawal_request, account_id);
    const wire_withdrawal_id = res.wireWithdrawal?.name?.split("/").at(-1);
    return wire_withdrawal_id || "";
}
//# sourceMappingURL=index.js.map