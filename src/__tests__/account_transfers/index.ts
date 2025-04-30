import { sdk } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";

const account_number = "1234567890";

export async function create_account_transfer_id(
  account_id: string,
): Promise<string | undefined> {
  const request: components.TransferCreate = {
    deliverer: {
      externalAccount: {
        accountNumber: account_number,
        participantNumber: "987",
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
    account_id,
  );
  if (result?.acatsTransfer?.name) {
    return result.acatsTransfer.name.split("/").pop();
  }
  return undefined;
}
