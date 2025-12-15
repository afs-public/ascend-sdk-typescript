import { expect, test } from "vitest";
import { DateTime } from "luxon";
import { sdk, timeout } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import {
  createLegalNaturalPerson,
  createAccount,
  enrollAccount,
  affirmAgreement,
} from "../accounts";
import {
  createBankRelationship,
  correctMicroDeposits,
  verifyMicroDeposits,
  createACHDeposit,
  deceased_account_id,
  deceased_bank_relationship_id,
  createACHWithdrawal,
  withdrawal_account_id,
  createCompletedWithdrawal,
  createIctWithdrawal,
  createIctDepositPending,
  createWireWithdrawal,
  createCashJournal,
} from "./index";
import { beforeAll } from "vitest";
import {
  ForceNocAchDepositRequestCreate,
  ForceNocAchWithdrawalRequestCreate,
  ForceReturnAchDepositRequestCreate,
} from "@apexfintechsolutions/ascend-sdk/models/components";
import * as errors from "@apexfintechsolutions/ascend-sdk/models/errors";
import crypto from "crypto";

let lnp_id: string | undefined;
let account_id: string | undefined;
let enrollment_ids: string[] | undefined;
let bank_relationship_id: string | undefined;
let microDeposits: string[] | undefined;

beforeAll(async () => {
  lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  enrollment_ids = await enrollAccount(account_id);
  if (typeof enrollment_ids !== "object") {
    throw new Error("enrollment_ids is undefined.");
  }
  affirmAgreement(account_id, enrollment_ids);
  bank_relationship_id = await createBankRelationship(account_id);
  if (typeof bank_relationship_id !== "string") {
    throw new Error("bank_relationship_id is undefined.");
  }
  microDeposits = await correctMicroDeposits(account_id, bank_relationship_id);
  if (typeof microDeposits !== "object") {
    throw new Error("microDeposits is undefined.");
  }
  await verifyMicroDeposits(account_id, bank_relationship_id, microDeposits);
}, 60000);

test("Test Test Simulation Transfers Get Micro Deposit Get Micro Deposit1", async () => {
  expect(typeof microDeposits).toBe("object");
});

let currentTime = DateTime.now().setZone("America/Chicago");
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
  test("Test Test Simulation Transfers Force Approve Ach Deposit Force Approve Ach Deposit1", async () => {
    const pending_deposit_id = await createACHDeposit(deceased_account_id, deceased_bank_relationship_id);

    expect(pending_deposit_id).toBeDefined();


    try{
      const result = await sdk.testSimulation.forceApproveAchDeposit({
        name: `accounts/${deceased_account_id}/achdeposits/${deceased_bank_relationship_id}`
      }, deceased_account_id || '', pending_deposit_id || '')

      expect(result).toBeDefined();
      expect(result.httpMeta.response.status).toBe(200);
    } catch (status) {
      expect(status).toBeInstanceOf(errors.Status);
      if (status instanceof errors.Status) {
        expect(status.code).toBe(3);
        expect(status.message.toLowerCase()).toContain("that does not need review");
      }
    }
  })

  test("Test Test Simulation Transfers Force Noc Ach Deposit Force Noc Ach Deposit1", async () => {
    const pending_deposit_id = await createACHDeposit(
      account_id || "",
      bank_relationship_id || "",
    );

    expect(pending_deposit_id).toBeDefined();


    const request: ForceNocAchDepositRequestCreate = {
      nachaNoc: {
        code: components.Code.C05,
        updatedBankAccountType: components.UpdatedBankAccountType.Checking,
      },
      name: `accounts/${account_id}/achDeposits/${pending_deposit_id}`,
    };

    const result = await sdk.testSimulation.forceNocAchDeposit(
      request,
      account_id || "",
      pending_deposit_id || "",
    );
    expect(result).toBeDefined();
    expect(result.httpMeta.response.status).toBe(200);
  });

  test("Test Test Simulation Transfers Force Reject Ach Deposit Force Reject Ach Deposit1", async () => {
    const pending_deposit_id = await createACHDeposit(
      deceased_account_id,
      deceased_bank_relationship_id,
    );

    try {
      const result = await sdk.testSimulation.forceRejectAchDeposit(
        {
          name: `accounts/${deceased_account_id}/achDeposits/${pending_deposit_id}`,
        },
        deceased_account_id,
        pending_deposit_id || "",
      );

      expect(result).toBeDefined();
      expect(result.httpMeta.response.status).toBe(200);
    } catch (status) {
      expect(status).toBeInstanceOf(errors.Status);
      if (status instanceof errors.Status) {
        expect(status.code).toBe(3);
        expect(status.message.toLowerCase()).toContain("that does not need review");
      }
    }
  });

  test("Test Test Simulation Transfers Force Ach Deposit Return Force Ach Deposit Return1", async () => {
    const pending_deposit_id = await createACHDeposit(
      account_id || "",
      bank_relationship_id || "",
    );

    const request: ForceReturnAchDepositRequestCreate = {
      nachaReturn: {
        code: components.NachaReturnCreateCode.R16,
      },
      name: `accounts/${account_id}/achDeposits/${pending_deposit_id}`,
    };

    try {
      const result = await sdk.testSimulation.forceReturnAchDeposit(
        request,
        account_id || "",
        pending_deposit_id || "",
      );

      expect(result).toBeDefined();
      expect(result.httpMeta.response.status).toBe(200);
    } catch (status) {
      expect(status).toBeInstanceOf(errors.Status);
      if (status instanceof errors.Status) {
        expect(status.code).toBe(3);
        expect(status.message.toLowerCase()).toContain("current state");
      }
    }
  });

  test("Test Test Simulation Transfers Force Approve Ach Withdrawal Force Approve Ach Withdrawal1", async () => {
    const pending_withdrawal_id = await createACHWithdrawal(deceased_account_id, deceased_bank_relationship_id);

    try {
      const result = await sdk.testSimulation.forceApproveAchWithdrawal({
          name: `accounts/${deceased_account_id}/achWithdrawals/${pending_withdrawal_id}`,
        },
        deceased_account_id,
        pending_withdrawal_id || '');

      expect(result).toBeDefined();
      expect(result.httpMeta.response.status).toBe(200);
    } catch (status) {
      expect(status).toBeInstanceOf(errors.Status);
      if (status instanceof errors.Status) {
        expect(status.code).toBe(3);
        expect(status.message.toLowerCase()).toContain("that does not need review");
      }
    }
  })


  test("test Test Simulation Transfers Force Noc Ach Withdrawal Force Noc Ach Withdrawal1", async () => {
    const completed_withdrawal_id = await createCompletedWithdrawal(
      withdrawal_account_id,
    );

    const request: ForceNocAchWithdrawalRequestCreate = {
      nachaNoc: {
        code: components.Code.C05,
        updatedBankAccountType: components.UpdatedBankAccountType.Checking,
      },
      name: `accounts/${withdrawal_account_id}/achWithdrawals/${completed_withdrawal_id}`,
    };

    const result = await sdk.testSimulation.forceNocAchWithdrawal(
      request,
      withdrawal_account_id,
      completed_withdrawal_id,
    );
    expect(result.httpMeta.response.status).toBe(200);
  });

  test("Test Test Simulation Transfers Force Reject Ach Withdrawal Force Reject Ach Withdrawal1", async () => {
    const pending_withdrawal_id = await createACHWithdrawal(
      deceased_account_id,
      deceased_bank_relationship_id,
    );

    try {
      const result = await sdk.testSimulation.forceRejectAchWithdrawal(
        {
          name: `accounts/${deceased_account_id}/achWithdrawals/${pending_withdrawal_id}`,
        },
        deceased_account_id,
        pending_withdrawal_id || "",
      );

      expect(result).toBeDefined();
      expect(result.httpMeta.response.status).toBe(200);
    } catch (status) {
      expect(status).toBeInstanceOf(errors.Status);
      if (status instanceof errors.Status) {
        expect(status.code).toBe(3);
        expect(status.message.toLowerCase()).toContain("that does not need review");
      }
    }
  });

  test("Test Test Simulation Transfers Force Ach Withdrawal Return Force Ach Withdrawal Return1", async () => {
    const completed_withdrawal_id = await createCompletedWithdrawal(
      withdrawal_account_id,
    );

    const request: components.ForceReturnAchWithdrawalRequestCreate = {
      nachaReturn: {
        code: components.NachaReturnCreateCode.R16,
      },
      name: `accounts/${withdrawal_account_id}/achWithdrawals/${completed_withdrawal_id}`,
    };

    try {
      const result = await sdk.testSimulation.forceReturnAchWithdrawal(
        request,
        withdrawal_account_id,
        completed_withdrawal_id,
      );

      expect(result).toBeDefined();
      expect(result.httpMeta.response.status).toBe(200);
    } catch (status) {
      expect(status).toBeInstanceOf(errors.Status);
      if (status instanceof errors.Status) {
        expect(status.code).toBe(3);
        expect(status.message.toLowerCase()).toContain("current state");
      }
    }
  });
} else {
  console.log(
    "Skipping Endpoint Tests that require current time to be between 11:30 PM CT and 6:00 PM CT",
  );
}

currentTime = DateTime.now().setZone("America/Chicago");
morning = currentTime.set({ hour: 6, minute: 0, second: 0, millisecond: 0 });
afternoon = currentTime.set({ hour: 15, minute: 0, second: 0, millisecond: 0 });
if (morning <= currentTime && currentTime <= afternoon) {
  test("Test Test Simulation Transfers Force Ict Deposit Approve Force Ict Deposit Approve1", async () => {
    const ictDeposit = await createIctDepositPending(deceased_account_id);

    try {
      const result = await sdk.testSimulation.forceApproveIctDeposit({
          name: `accounts/${deceased_account_id}/ictDeposits/${ictDeposit}`
        },
        deceased_account_id,
        ictDeposit);

      expect(result).toBeDefined();
      expect(result.httpMeta.response.status).toBe(200);
    } catch (status) {
      expect(status).toBeInstanceOf(errors.Status);
      if (status instanceof errors.Status) {
        expect(status.code).toBe(3);
        expect(status.message.toLowerCase()).toContain("that does not need review");
      }
    }
  })

  test("Test Test Simulation Transfers Force Ict Deposit Reject Force Ict Deposit Reject1", async () => {
    const pending_deposit_id =
      await createIctDepositPending(deceased_account_id);

    try {
      const result = await sdk.testSimulation.forceRejectIctDeposit(
        {
          name: `accounts/${deceased_account_id}/ictDeposits/${pending_deposit_id}`,
        },
        deceased_account_id,
        pending_deposit_id,
      );

      expect(result).toBeDefined();
      expect(result.httpMeta.response.status).toBe(200);
    } catch (status) {
      expect(status).toBeInstanceOf(errors.Status);
      if (status instanceof errors.Status) {
        expect(status.code).toBe(3);
        expect(status.message.toLowerCase()).toContain("that does not need review");
      }
    }
  });

  test("Test Test Simulation Transfers Force Ict Withdrawal Approve Force Ict Withdrawal Approve1", async () => {
    const pending_withdrawal_id = await createIctWithdrawal(deceased_account_id);

    try {
      const result = await sdk.testSimulation.forceApproveIctWithdrawal({
          name: `accounts/${deceased_account_id}/ictWithdrawals/${pending_withdrawal_id}`
        },
        deceased_account_id,
        pending_withdrawal_id);

      expect(result).toBeDefined();
      expect(result.httpMeta.response.status).toBe(200);
    } catch (status) {
      expect(status).toBeInstanceOf(errors.Status);
      if (status instanceof errors.Status) {
        expect(status.code).toBe(3);
        expect(status.message.toLowerCase()).toContain("that does not need review");
      }
    }
  });

  test("Test Test Simulation Transfers Force Ict Withdrawal Reject Force Ict Withdrawal Reject1", async () => {
    const pending_withdrawal_id =
      await createIctWithdrawal(deceased_account_id);

    try {
      const result = await sdk.testSimulation.forceRejectIctWithdrawal(
        {
          name: `accounts/${deceased_account_id}/ictWithdrawals/${pending_withdrawal_id}`,
        },
        deceased_account_id,
        pending_withdrawal_id,
      );

      expect(result).toBeDefined();
      expect(result.httpMeta.response.status).toBe(200);
    } catch (status) {
      expect(status).toBeInstanceOf(errors.Status);
      if (status instanceof errors.Status) {
        expect(status.code).toBe(3);
        expect(status.message.toLowerCase()).toContain("that does not need review");
      }
    }
  });
} else {
  console.log(
    "Skipping Endpoint Tests that require current time to be between 6:00 AM CT and 3:00 PM CT",
  );
}

currentTime = DateTime.now().setZone("America/Chicago");
morning = currentTime.set({ hour: 7, minute: 0, second: 0, millisecond: 0 });
afternoon = currentTime.set({
  hour: 14,
  minute: 30,
  second: 0,
  millisecond: 0,
});
if (morning <= currentTime && currentTime <= afternoon) {
  test("Test Test Simulation Transfers Force Approve Wire Withdrawal Force Approve Wire Withdrawal1", async () => {
    const wire_withdrawal_id = await createWireWithdrawal(withdrawal_account_id || '');


    const request : components.ForceApproveWireWithdrawalRequestCreate = {
      name: `accounts/${withdrawal_account_id}/wireWithdrawals/${wire_withdrawal_id}`
    }
    const result = await sdk.testSimulation.forceApproveWireWithdrawal(request, withdrawal_account_id || '', wire_withdrawal_id || '');
    expect(result).toBeDefined();
    expect(result.httpMeta.response.status).toBe(200);
  })

  test("Test Test Simulation Transfers Force Reject Wire Withdrawal Force Reject Wire Withdrawal1", async () => {
    const wire_withdrawal_id = await createWireWithdrawal(withdrawal_account_id || "");


    const request: components.ForceRejectWireWithdrawalRequestCreate = {
      name: `accounts/${withdrawal_account_id}/wireWithdrawals/${wire_withdrawal_id}`,
    };
    const result = await sdk.testSimulation.forceRejectWireWithdrawal(
      request,
      withdrawal_account_id || "",
      wire_withdrawal_id || "",
    );
    expect(result).toBeDefined();
    expect(result.httpMeta.response.status).toBe(200);
  });

  test("Test Test Simulation Transfers Simulate Wire Deposit Simulate Wire Deposit1", async () => {
    const wireDepositRequest: components.SimulateWireDepositRequestCreate = {
      amount: {
        value: "100.00",
      },
      parent: `accounts/${account_id}`,
      domestic: true,
      thirdParty: false,
    };

    const result = await sdk.testSimulation.simulateWireDeposit(
      wireDepositRequest,
      account_id || "",
    );

    expect(result.wireDeposit).toBeDefined();
    expect(result.wireDeposit?.name).toBeDefined();

    const wireDepositId = result.wireDeposit?.name?.split("/");
    const depositId = wireDepositId?.[wireDepositId.length - 1];
    expect(depositId).toBeDefined();
    expect(depositId!.length).toBeGreaterThan(0);
  });

  test.skip("Test Test Simulation Transfers Force Approve Wire Deposit Force Approve Wire Deposit1", async () => {
    // TODO: Fix wire deposit state machine - transfer already in FundsPosted state
    const wireDepositRequest: components.SimulateWireDepositRequestCreate = {
      amount: {
        value: "100.00",
      },
      parent: `accounts/${account_id}`,
      domestic: true,
      thirdParty: false,
    };

    const createResult = await sdk.testSimulation.simulateWireDeposit(
      wireDepositRequest,
      account_id || "",
    );

    const wireDepositId = createResult.wireDeposit?.name?.split("/");
    const depositId = wireDepositId?.[wireDepositId.length - 1];
    expect(depositId).toBeDefined();

    const request: components.ForceApproveWireDepositRequestCreate = {
      name: `accounts/${account_id}/wireDeposits/${depositId}`,
    };

    const result = await sdk.testSimulation.forceApproveWireDeposit(
      request,
      account_id || "",
      depositId!,
    );

    expect(result).toBeDefined();
    expect(result.httpMeta.response.status).toBe(200);
  });

  test.skip("Test Test Simulation Transfers Force Reject Wire Deposit Force Reject Wire Deposit1", async () => {
    // TODO: Fix wire deposit state machine - transfer already in FundsPosted state
    const wireDepositRequest: components.SimulateWireDepositRequestCreate = {
      amount: {
        value: "100.00",
      },
      parent: `accounts/${account_id}`,
      domestic: true,
      thirdParty: false,
    };

    const createResult = await sdk.testSimulation.simulateWireDeposit(
      wireDepositRequest,
      account_id || "",
    );

    const wireDepositId = createResult.wireDeposit?.name?.split("/");
    const depositId = wireDepositId?.[wireDepositId.length - 1];
    expect(depositId).toBeDefined();

    const request: components.ForceRejectWireDepositRequestCreate = {
      name: `accounts/${account_id}/wireDeposits/${depositId}`,
    };

    const result = await sdk.testSimulation.forceRejectWireDeposit(
      request,
      account_id || "",
      depositId!,
    );

    expect(result).toBeDefined();
    expect(result.httpMeta.response.status).toBe(200);
  });
} else {
  console.log(
    "Skipping Endpoint Tests that require current time to be between 7:00 AM CT and 2:30 PM CT",
  );
}

currentTime = DateTime.now().setZone("America/Chicago");
morning = currentTime.set({ hour: 6, minute: 0, second: 0, millisecond: 0 });
afternoon = currentTime.set({ hour: 19, minute: 0, second: 0, millisecond: 0 });
if (morning <= currentTime && currentTime <= afternoon) {
  test("Test Test Simulation Transfers Force Approve Cash Journal Force Accept Cash Journal1", async () => {
    // Counter the amount of money the cash journal is taking
    const transfer_request: components.TransfersCreditCreate = {
      amount: {
        value: "5000000",
      },
      clientTransferId: crypto.randomUUID(),
      description: "Credit given as promotion",
      type: components.TransfersCreditCreateType.Promotional,
    };

    await sdk.feesAndCredits.createCredit(transfer_request, withdrawal_account_id);

    const cash_journal_id = await createCashJournal(deceased_account_id || '');


    const request : components.ForceApproveCashJournalRequestCreate = {
      name: `accounts/${withdrawal_account_id}/cashJournals/${cash_journal_id}`
    }
    const result = await sdk.testSimulation.forceApproveCashJournal(request, cash_journal_id);
    expect(result).toBeDefined();
    expect(result.httpMeta.response.status).toBe(200);
  })

  test("Test Test Simulation Transfers Force Reject Cash Journal Force Reject Cash Journal1", async () => {
    const cash_journal_id = await createCashJournal(deceased_account_id || "");


    const request: components.ForceRejectCashJournalRequestCreate = {
      name: `accounts/${withdrawal_account_id}/cashJournals/${cash_journal_id}`,
    };
    const result = await sdk.testSimulation.forceRejectCashJournal(
      request,
      cash_journal_id,
    );
    expect(result).toBeDefined();
    expect(result.httpMeta.response.status).toBe(200);
  });
} else {
  console.log(
    "Skipping Endpoint Tests that require current time to be between 6:00 AM CT and 7:00 PM CT",
  );
}
