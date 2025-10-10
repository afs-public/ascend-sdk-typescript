import { sdk, timeout } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import { BankRelationshipStateState } from "@apexfintechsolutions/ascend-sdk/models/components";
import crypto from "crypto";

export const withdrawal_account_id = "01JHGTEPC6ZTAHCFRH2MD3VJJT";

export const deceased_account_id = "01JHK07CRQ9X8P5XE9JWG4PFSP";
export const deceased_bank_relationship_id = "6786a8e8ea916b424a53cc24";

export const wire_deposit_id = "20250218014356";

export async function createBankRelationship(
  account_id: string,
): Promise<string | undefined> {
  const randomNumber =
    Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
  const request: components.BankRelationshipCreate = {
    bankAccount: {
      accountNumber: randomNumber.toString(),
      owner: "TEST123",
      routingNumber: "112203216",
      type: components.BankAccountCreateType.Savings,
    },
    nickname: "ACH TEST",
    verificationMethod: components.VerificationMethod.MicroDeposit,
  };
  const result = await sdk.bankRelationships.createBankRelationship(
    request,
    account_id,
  );
  if (result?.bankRelationship?.name) {
    return result.bankRelationship.name.split("/")[3];
  }
  return undefined;
}

export async function failingMicroDeposits(
  account_id: string,
  bank_relationship_id: string,
): Promise<string[] | undefined> {
  const result = await sdk.testSimulation.getMicroDepositAmounts(
    account_id,
    bank_relationship_id,
  );
  if (
    result?.microDepositAmounts?.amount1?.value &&
    result?.microDepositAmounts?.amount2?.value
  ) {
    const amount1 = parseFloat(result.microDepositAmounts.amount1.value) + 0.01;
    const amount2 = parseFloat(result.microDepositAmounts.amount2.value) + 0.01;
    return [amount1.toString(), amount2.toString()];
  }
  return undefined;
}

export async function correctMicroDeposits(
  account_id: string,
  bank_relationship_id: string,
): Promise<string[] | undefined> {
  const result = await sdk.testSimulation.getMicroDepositAmounts(
    account_id,
    bank_relationship_id,
  );
  if (
    result?.microDepositAmounts?.amount1?.value &&
    result?.microDepositAmounts?.amount2?.value
  ) {
    return [
      result?.microDepositAmounts?.amount1?.value,
      result?.microDepositAmounts?.amount2?.value,
    ];
  }
  return undefined;
}

export async function verifyMicroDeposits(
  account_id: string,
  bank_relationship_id: string,
  amounts: string[],
): Promise<void> {
  const request: components.VerifyMicroDepositsRequestCreate = {
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
  await sdk.bankRelationships.verifyMicroDeposits(
    request,
    account_id,
    bank_relationship_id,
  );
}

export async function createACHDeposit(
  account_id: string,
  bank_relationship_id: string,
): Promise<string | undefined> {
  const request: components.AchDepositCreate = {
    amount: {
      value: "1000.00",
    },
    bankRelationship: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
    clientTransferId: crypto.randomUUID(),
  };
  const result = await sdk.achTransfers.createAchDeposit(request, account_id);
  if (result?.achDeposit?.name) {
    return result.achDeposit.name.split("/")[3];
  }
  return undefined;
}

export async function createACHWithdrawal(
  account_id: string,
  bank_relationship_id: string,
): Promise<string | undefined> {
  const request: components.AchWithdrawalCreate = {
    bankRelationship: `accounts/${account_id}/bankRelationships/${bank_relationship_id}`,
    amount: {
      value: "0.01",
    },
    clientTransferId: crypto.randomUUID(),
    fullDisbursement: false,
    memo: "ACH",
  };
  const result = await sdk.achTransfers.createAchWithdrawal(
    request,
    account_id,
  );
  if (result?.achWithdrawal?.name) {
    return result.achWithdrawal.name.split("/")[3];
  }
  return undefined;
}

export async function createFee(
  account_id: string,
): Promise<string | undefined> {
  const request: components.TransfersFeeCreate = {
    amount: {
      value: "10",
    },
    clientTransferId: crypto.randomUUID(),
    description: "Fee charged",
    type: components.TransfersFeeCreateType.Management,
  };
  const result = await sdk.feesAndCredits.createFee(request, account_id);
  if (result?.transfersFee?.name) {
    return result.transfersFee.name.split("/")[3];
  }
  return undefined;
}

export async function createCredit(
  account_id: string,
): Promise<string | undefined> {
  const request: components.TransfersCreditCreate = {
    amount: {
      value: "10",
    },
    clientTransferId: crypto.randomUUID(),
    description: "Credit given as promotion",
    type: components.TransfersCreditCreateType.Promotional,
  };
  const result = await sdk.feesAndCredits.createCredit(request, account_id);
  if (result?.transfersCredit?.name) {
    return result.transfersCredit.name.split("/")[3];
  }
  return undefined;
}

export async function createCompletedWithdrawal(
  withdrawal_account_id: string,
): Promise<string> {
  // Cancel any approved relationships
  const res = await sdk.bankRelationships.listBankRelationships(
    withdrawal_account_id,
  );
  const max_relationships =
    res?.listBankRelationshipsResponse?.bankRelationships?.length ?? 0;
  let attempt_counts = 0;
  while (attempt_counts < max_relationships) {
    if (
      res?.listBankRelationshipsResponse?.bankRelationships?.at(attempt_counts)
        ?.state?.state === BankRelationshipStateState.Approved
    ) {
      const cancel_bank_relationship_id =
        res?.listBankRelationshipsResponse?.bankRelationships
          ?.at(attempt_counts)
          ?.name?.split("/")
          .at(-1);
      const request: components.CancelBankRelationshipRequestCreate = {
        name: `accounts/${withdrawal_account_id}/bankRelationships/${cancel_bank_relationship_id}`,
        comment: "Canceling Bank User Request",
      };
      await sdk.bankRelationships.cancelBankRelationship(
        request,
        withdrawal_account_id,
        cancel_bank_relationship_id || "",
      );
    }
    attempt_counts += 1;
  }

  // Create a new bank relationship
  const request: components.BankRelationshipCreate = {
    bankAccount: {
      accountNumber: `${Math.floor(Math.random() * 99999999) + 10000000}`,
      owner: "TEST123",
      routingNumber: "112203216",
      type: components.BankAccountCreateType.Savings,
    },
    nickname: "ACH TEST",
    verificationMethod: components.VerificationMethod.MicroDeposit,
  };

  const res2 = await sdk.bankRelationships.createBankRelationship(
    request,
    withdrawal_account_id,
  );
  const bank_relationship_id =
    res2?.bankRelationship?.name?.split("/")?.at(-1) || "";

  const microdeposit_amts: string[] =
    (await correctMicroDeposits(withdrawal_account_id, bank_relationship_id)) ||
    [];

  await verifyMicroDeposits(
    withdrawal_account_id,
    bank_relationship_id,
    microdeposit_amts,
  );

  const withdrawal_id = await createACHWithdrawal(
    withdrawal_account_id,
    bank_relationship_id,
  );
  return withdrawal_id || "";
}

// Used for the test_simulation tests - the ICT deposit has to be created
// on the deceased account to be in the pending state
export async function createIctDepositPending(
  account_id: string,
): Promise<string> {
  const ict_deposit_request: components.IctDepositCreate = {
    amount: { value: "1000.00" },
    clientTransferId: crypto.randomUUID(),
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

  const response = await sdk.instantCashTransferICT.createIctDeposit(
    ict_deposit_request,
    account_id,
  );

  const deposit_id = response.ictDeposit?.name?.split("/").at(-1);
  return deposit_id || "";
}

export async function createScheduledAchDeposit(
  enrolled_account_id: string,
  bank_relationship_id: string,
): Promise<string> {
  const today = new Date(); // datetime.datetime.now()
  const ach_deposit_schedule_request: components.AchDepositScheduleCreate = {
    bankRelationship:
      "accounts/" +
      enrolled_account_id +
      "/bankRelationships/" +
      bank_relationship_id,
    scheduleDetails: {
      amount: {
        value: "100",
      },
      clientScheduleId: crypto.randomUUID(),
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

  const res = await sdk.scheduleTransfers.createAchDepositSchedule(
    ach_deposit_schedule_request,
    enrolled_account_id,
  );

  if (res.httpMeta.response.status == 200) {
    return res?.achDepositSchedule?.name?.split("/")[3] || "";
  } else {
    return "";
  }
}

// Used for the ICT tests - the ict deposit created will not be PENDING
export async function createIctDeposit(
  enrolled_account_id: string,
): Promise<string> {
  const request: components.IctDepositCreate = {
    amount: {
      value: "1000.00",
    },
    clientTransferId: crypto.randomUUID(),
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

  const result = await sdk.instantCashTransferICT.createIctDeposit(
    request,
    enrolled_account_id,
  );
  if (result?.ictDeposit?.name) {
    return result.ictDeposit.name.split("/")[3] || "";
  }
  return "";
}

export async function createIctWithdrawal(
  enrolled_account_id: string,
): Promise<string> {
  const request: components.IctWithdrawalCreate = {
    amount: { value: "0.01" },
    clientTransferId: crypto.randomUUID(),
    program: components.IctWithdrawalCreateProgram.BrokerPartner,
    travelRule: {
      recipientInstitution: {
        accountId: "09673049",
        title: "Default Bank",
      },
    },
  };

  const result = await sdk.instantCashTransferICT.createIctWithdrawal(
    request,
    enrolled_account_id,
  );

  if (result?.ictWithdrawal?.name) {
    return result.ictWithdrawal.name.split("/")[3] || "";
  }

  return "";
}

export async function createScheduledAchWithdrawal(
  enrolled_account_id: string,
  bank_relationship_id: string,
) {
  const today = new Date();
  const ach_withdrawal_schedule_request: components.AchWithdrawalScheduleCreate =
    {
      bankRelationship:
        "accounts/" +
        enrolled_account_id +
        "/bankRelationships/" +
        bank_relationship_id,
      scheduleDetails: {
        amount: {
          value: "100",
        },
        clientScheduleId: crypto.randomUUID(),
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

  const res = await sdk.scheduleTransfers.createAchWithdrawalSchedule(
    ach_withdrawal_schedule_request,
    enrolled_account_id || "",
  );

  if (res.httpMeta.response.status == 200) {
    return res?.achWithdrawalSchedule?.name?.split("/")[3] || "";
  } else {
    return "";
  }
}

export async function createScheduledWireWithdrawal(
  enrolled_account_id: string,
): Promise<string> {
  const today = new Date(); // datetime.datetime.now()
  const wire_withdrawal_schedule_request: components.WireWithdrawalScheduleCreate =
    {
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
        clientScheduleId: crypto.randomUUID(),
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

  const res = await sdk.scheduleTransfers.createWireWithdrawalSchedule(
    wire_withdrawal_schedule_request,
    enrolled_account_id || "",
  );

  if (res.httpMeta.response.status == 200) {
    return res?.wireWithdrawalSchedule?.name?.split("/")[3] || "";
  } else {
    return "";
  }
}

export async function createCashJournal(account_id: string): Promise<string> {
  const cash_journal_request: components.CashJournalCreate = {
    clientTransferId: crypto.randomUUID(),
    destinationAccount: "accounts/" + account_id,
    amount: {
      value: "500001.00",
    },
    sourceAccount: "accounts/" + withdrawal_account_id,
  };

  const response = await sdk.journals.createCashJournal(cash_journal_request);

  const journal_id = response.cashJournal?.name?.split("/").at(-1);
  return journal_id || "";
}

export async function createWireWithdrawal(
  account_id: string,
): Promise<string> {
  const wire_withdrawal_request: components.WireWithdrawalCreate = {
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
    clientTransferId: crypto.randomUUID(),
  };

  const res = await sdk.wires.createWireWithdrawal(
    wire_withdrawal_request,
    account_id,
  );

  const wire_withdrawal_id = res.wireWithdrawal?.name?.split("/").at(-1);
  return wire_withdrawal_id || "";
}
