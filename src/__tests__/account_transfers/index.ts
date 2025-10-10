import {sdk, timeout} from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import crypto from "crypto";
import {withdrawal_account_id} from "../transfers";

export async function create_account_transfer_id(
  account_id: string,
): Promise<string | undefined> {

  const account = await sdk.accountCreation.getAccount(account_id);
  if (!account || !account.account) {
    throw new Error("Account not found or invalid response.");
  }
  const account_number = account.account.accountNumber;
  if (!account_number) {
    throw new Error("Account number is undefined or empty.");
  }
  // Fund Account
  const fundingRequest : components.TransfersCreditCreate = {
    amount: {
      value: "1000",
    },
    clientTransferId: crypto.randomUUID(),
    description: "Credit given as promotion",
    type: components.TransfersCreditCreateType.Promotional,
  };

  await sdk.feesAndCredits.createCredit(fundingRequest, account_id);


  const request: components.TransferCreate = {
    assets: [
      {
        identifier: "USD",
        position: {
          quantity: {
            value: "1",
          },
        },
        type: components.AssetCreateType.CurrencyCode,
      },
    ],
    deliverer: {
      externalAccount: {
        accountNumber: account_number,
        participantNumber: "158",
      },
    },
  };
  const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
  if (!correspondentId) {
    throw new Error("CORRESPONDENT_ID is undefined or empty.");
  }
  const result = await sdk.accountTransfers.createTransfer(
    request,
    correspondentId,
    withdrawal_account_id,
  );
  if (result?.acatsTransfer?.name) {
    return result.acatsTransfer.name.split("/").pop();
  }
  return undefined;
}
