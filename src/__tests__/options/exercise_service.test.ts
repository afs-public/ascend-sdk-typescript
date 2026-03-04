import { expect, test, beforeAll } from "vitest";
import { sdk } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import {
  createLegalNaturalPerson,
  createAccount,
  enrollAccount,
  affirmAgreement,
} from "../accounts";
import crypto from "crypto";

let account_id: string | undefined;
let instruction_id: string | undefined;
const asset_id = "9098656";

beforeAll(async () => {
  const lnp_id = await createLegalNaturalPerson();
  if (typeof lnp_id !== "string") {
    throw new Error("lnp_id is undefined.");
  }
  account_id = await createAccount(lnp_id);
  if (typeof account_id !== "string") {
    throw new Error("account_id is undefined.");
  }
  const enrollment_ids = await enrollAccount(account_id);
  if (typeof enrollment_ids !== "object") {
    throw new Error("enrollment_ids is undefined.");
  }
  await affirmAgreement(account_id, enrollment_ids);

  // Fund account with promotional credit
  const creditRequest: components.TransfersCreditCreate = {
    amount: { value: "1000000.00" },
    clientTransferId: crypto.randomUUID(),
    description: "Credit given as promotion",
    type: components.TransfersCreditCreateType.Promotional,
  };
  await sdk.feesAndCredits.createCredit(creditRequest, account_id);
}, 60000);

test("Test Exercise Service Create Option Instruction", async () => {
  const request: components.OptionInstructionCreate = {
    accountId: account_id || "",
    identifier: asset_id,
    identifierType:
      components.OptionInstructionCreateIdentifierType.AssetId,
    quantity: { value: "1" },
    type: components.OptionInstructionCreateType.DoNotExercise,
  };

  const result = await sdk.optionInstructions.createOptionInstruction(
    request,
    account_id || "",
    asset_id,
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.optionInstruction?.instructionId).toBeDefined();

  instruction_id = result.optionInstruction?.instructionId;
});

test("Test Exercise Service Get Option Instruction", async () => {
  expect(instruction_id).toBeDefined();

  const result = await sdk.optionInstructions.getOptionInstruction(
    account_id || "",
    asset_id,
    instruction_id || "",
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Exercise Service List Option Instructions", async () => {
  expect(instruction_id).toBeDefined();

  const result = await sdk.optionInstructions.listOptionInstructions({
    accountId: account_id || "",
    assetId: asset_id,
  });

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});

test("Test Exercise Service Cancel Option Instruction", async () => {
  expect(instruction_id).toBeDefined();

  const request: components.CancelOptionInstructionRequestCreate = {
    name: `accounts/${account_id}/assets/${asset_id}/instructions/${instruction_id}`,
  };

  const result = await sdk.optionInstructions.cancelOptionInstruction(
    request,
    account_id || "",
    asset_id,
    instruction_id || "",
  );

  expect(result).toBeDefined();
  expect(result.httpMeta.response.status).toBe(200);
});
