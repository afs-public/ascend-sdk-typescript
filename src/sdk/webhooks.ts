/*
 * Code manually maintained by the SDK team.
 */
import { IncomingMessage } from "http";
import * as crypto from "crypto";
import * as components from "../models/components/index.js";

// Function to validate an incoming webhook event payload.
export async function validateEventPayload(
  req: IncomingMessage,
  webhookSecret: string,
  allowedEventAgeMS: number // Allowed event age in milliseconds
): Promise<components.EventMessage> {
  const signatureHeader = req.headers["x-apex-event-signature"];
  const sendTimeHeader = req.headers["x-apex-event-send-time"];

  if (!signatureHeader || !sendTimeHeader) {
    throw new Error("Missing required headers: x-apex-event-signature and/or x-apex-event-send-time");
  }

  const requestBody = await getRequestBody(req);
  const bodyStr = requestBody.trim();

  const sendTime = new Date(sendTimeHeader as string);
  if (isNaN(sendTime.getTime())) {
    throw new Error("Invalid send time format");
  }

  if (isEventAgeOutOfRange(sendTime, allowedEventAgeMS)) {
    throw new Error("Event age is out of range, it must be sent within the allowed event age");
  }

  verifySignature(signatureHeader as string, sendTimeHeader as string, bodyStr, webhookSecret);

  try {
    return JSON.parse(bodyStr) as components.EventMessage;
  } catch (error) {
    throw new Error(`Failed to parse event message: ${error instanceof Error ? error.message : String(error)}`);
  }
}

// Helper function to check if the event's age is out of range.
function isEventAgeOutOfRange(sendTime: Date, allowedEventAgeMS: number): boolean {
  const currentTime = new Date();
  // Check if the event is too old or in the future.
  const isTooOld = sendTime.getTime() < currentTime.getTime() - allowedEventAgeMS;
  const isInTheFuture = sendTime.getTime() > currentTime.getTime() + allowedEventAgeMS;
  return isTooOld || isInTheFuture;
}

// Helper function to verify the signature of the webhook event.
function verifySignature(
  headerSignature: string,
  sendTimeHeader: string,
  body: string,
  secret: string
): void {
  const payload = `${body}.${sendTimeHeader}`;
  const hmac = crypto.createHmac("sha256", secret).update(payload);
  const expectedSignature = hmac.digest("hex");

  // Check buffer lengths and validate the signature
  if (headerSignature.length !== expectedSignature.length || !crypto.timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(headerSignature))) {
    throw new Error("Provided signature does not match calculated signature");
  }
}

// Helper function to get the raw request body from an IncomingMessage.
async function getRequestBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => resolve(body));
    req.on("error", (error) => reject(error));
  });
}
