import { Apexascend } from "@apexfintechsolutions/ascend-sdk/sdk";

export function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const sdk = new Apexascend({
  serverURL: "https://uat.apexapis.com",
  security: {
    apiKey: process.env["API_KEY"] ?? "",
    serviceAccountCreds: {
      privateKey: process.env["SERVICE_ACCOUNT_CREDS_PRIVATE_KEY"] ?? "",
      name: process.env["SERVICE_ACCOUNT_CREDS_NAME"] ?? "",
      organization: process.env["SERVICE_ACCOUNT_CREDS_ORGANIZATION"] ?? "",
      type: "serviceAccount",
    },
  },
});
