import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

export function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// retryOnTransientError retries op for a resource that was just created. A
// resource is occasionally not yet mutable/queryable for a window observed
// up to ~18-20s after creation against the real UAT environment, so this
// retries on any error rather than pattern-matching a specific message.
// Vitest timeout for tests whose flow includes a retryOnTransientError
// window (up to 40 attempts x 2s of sleep) on top of account enrollment --
// sized so the retry budget can never outlive its own test timeout.
export const RETRY_HEAVY_TEST_TIMEOUT_MS = 180000;

export async function retryOnTransientError<T>(
  op: () => Promise<T>,
  maxAttempts = 20,
  delayMs = 2000,
): Promise<T> {
  let lastErr: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await op();
    } catch (err) {
      lastErr = err;
      if (attempt < maxAttempts) {
        await timeout(delayMs);
      }
    }
  }
  throw lastErr;
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
