import { expect, test, beforeAll } from "vitest";
import { sdk } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import { createEnrolledAccount } from "../accounts";
import crypto from "crypto";
import { DateTime } from "luxon";

let account_id: string | undefined;
let instruction_id: string | undefined;

// Exercise instructions (DO_NOT_EXERCISE, etc.) are only accepted between
// 3:00:00 PM and 4:19:59 PM Central Time -- the real-world options exercise
// cutoff window near market close. Outside that window every attempt 400s
// with "outside allowed time window" regardless of which contract or
// expiration date is used.
function isOutsideExerciseSubmissionWindow(): boolean {
  const now = DateTime.now().setZone("America/Chicago");
  const windowStart = now.set({ hour: 15, minute: 0, second: 0, millisecond: 0 });
  const windowEnd = now.set({ hour: 16, minute: 19, second: 59, millisecond: 0 });
  return now < windowStart || now > windowEnd;
}

// Finds a usable equity option contract expiring today. DO_NOT_EXERCISE
// instructions can only be submitted on an option's expiration date, so a
// fixed/hardcoded asset_id only works on the one calendar day it happens to
// expire. Looking one up dynamically each run stays valid indefinitely
// instead of breaking again the day after whatever asset was hardcoded.
// Restricted to EQUITY options -- 0DTE index options (XSP, APXSIM, etc.)
// expire daily but don't support exercise instructions at all ("exercise
// instructions are not supported for index options"). Equity options only
// expire on specific days (weekly/monthly), so none may be expiring today.
async function findOptionExpiringToday(): Promise<string | undefined> {
  const today = DateTime.now().setZone("America/Chicago");
  // Filter server-side: without the expiration/usable constraints this walks
  // the entire option universe page by page on no-match days.
  let page = await sdk.assets.listAssets(
    undefined,
    200,
    undefined,
    `type == "OPTION" && usable && option.expiration_date == date("${today.toISODate()}")`,
  );

  while (page !== null) {
    const assets = page.listAssetsResponse?.assets ?? [];
    for (const asset of assets) {
      const option = asset.option;
      if (option?.optionType === components.OptionType.Equity && asset.assetId) {
        return asset.assetId;
      }
    }
    page = await page.next();
  }
  return undefined;
}

const outsideExerciseWindow = isOutsideExerciseSubmissionWindow();
const asset_id = outsideExerciseWindow
  ? undefined
  : await findOptionExpiringToday();

if (outsideExerciseWindow) {
  test.skip(
    "Exercise instructions are only accepted 3:00-4:19:59 PM Central Time",
    () => {},
  );
} else if (!asset_id) {
  test.skip("No equity option contract expiring today was found", () => {});
} else {

beforeAll(async () => {
  account_id = await createEnrolledAccount();

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

}
