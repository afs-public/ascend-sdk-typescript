import { describe, it, expect, test } from "vitest";
import crypto from "crypto";
import { validateEventPayload } from "../sdk/webhooks.js";
import { IncomingMessage } from "http";
import { Readable } from "stream";
import { sdk } from "./utils/sdk";

// Constants
const testSecret = "my-super-secret-webhook-key";
const testAllowedAgeMS = 5 * 60 * 1000; // 5 minutes in milliseconds

const testMessageID = "msg_2WpGqg8fH9jZ7kY6aB3dX2eF1c";
const testEventType = "transaction.created";
const testAccountID = "acc_1a2b3c4d5e6f7g8h9i";
const testClientID = "cli_j0k1l2m3n4p5q6r7s8";
const testPartitionKey = "user_xyz";

function createTestBody(publishTime: Date): string {
  const eventPayload = {
    message_id: testMessageID,
    event_type: testEventType,
    account_id: testAccountID,
    client_id: testClientID,
    name: `messages/${testMessageID}`,
    partition_key: testPartitionKey,
    publish_time: publishTime.toISOString(),
    data: {
      transactionId: "txn_abcdef123456",
      amount: 100.5,
      currency: "USD",
      status: "completed",
    },
  };

  return JSON.stringify(eventPayload);
}

function generateSignature(sendTime: string, body: string, secret: string): string {
  const payload = `${body}.${sendTime}`;
  const hmac = crypto.createHmac("sha256", secret).update(payload);
  return hmac.digest("hex");
}

// Mock function to create an IncomingMessage-like object
function createMockRequest(body: string, headers: Record<string, string>): IncomingMessage {
  // Create a Readable stream for the body
  const readable = new Readable({
    read() {
      this.push(body);
      this.push(null); // Signal EOF
    },
  });

  // Assign stream properties to the mock IncomingMessage
  const req = Object.assign(readable, {
    method: "POST",
    url: "/webhook",
    headers,
  });

  return req as IncomingMessage;
}

describe("validateEventPayload tests", () => {
  const validSendTime = new Date();

  const validBody = createTestBody(validSendTime);

  const testCases = [
    {
      name: "Success - Valid Payload",
      sendTime: validSendTime,
      body: validBody,
      headers: {
        "x-apex-event-signature": generateSignature(validSendTime.toISOString(), validBody, testSecret),
        "x-apex-event-send-time": validSendTime.toISOString(),
      },
      expectError: false,
      errorContains: "",
      validateMessage: (msg: any) => {
        expect(msg).not.toBeNull();
        expect(msg.message_id).toBe(testMessageID);
        expect(msg.event_type).toBe(testEventType);
        expect(msg.account_id).toBe(testAccountID);
        expect(msg.client_id).toBe(testClientID);
        expect(msg.name).toBe(`messages/${testMessageID}`);
        expect(new Date(msg.publish_time).toISOString()).toBe(validSendTime.toISOString());
        expect(msg.data).toHaveProperty("status", "completed");
      },
    },
    {
      name: "Error - Invalid Signature",
      sendTime: validSendTime,
      body: validBody,
      headers: {
        "x-apex-event-signature": "this-is-not-the-correct-signature",
        "x-apex-event-send-time": validSendTime.toISOString(),
      },
      expectError: true,
      errorContains: "Provided signature does not match calculated signature",
    },
    {
      name: "Error - Expired Event",
      sendTime: new Date(Date.now() - testAllowedAgeMS - 60000), // Older than allowed age
      body: validBody,
      headers: {
        "x-apex-event-signature": generateSignature(
          new Date(Date.now() - testAllowedAgeMS - 60000).toISOString(),
          validBody,
          testSecret
        ),
        "x-apex-event-send-time": new Date(Date.now() - testAllowedAgeMS - 60000).toISOString(),
      },
      expectError: true,
      errorContains: "Event age is out of range, it must be sent within the allowed event age",
    },
    {
      name: "Error - Missing Signature Header",
      sendTime: new Date(),
      body: validBody,
      headers: {
        "x-apex-event-send-time": new Date().toISOString(),
      },
      expectError: true,
      errorContains: "Missing required headers: x-apex-event-signature and/or x-apex-event-send-time",
    },
    {
      name: "Error - Missing Send Time Header",
      sendTime: new Date(),
      body: validBody,
      headers: {
        "x-apex-event-signature": generateSignature(validSendTime.toISOString(), validBody, testSecret),
      },
      expectError: true,
      errorContains: "Missing required headers: x-apex-event-signature and/or x-apex-event-send-time",
    },
    {
      name: "Error - Invalid Send Time Format",
      sendTime: new Date(),
      body: validBody,
      headers: {
        "x-apex-event-signature": generateSignature(validSendTime.toISOString(), validBody, testSecret),
        "x-apex-event-send-time": "not-a-valid-time",
      },
      expectError: true,
      errorContains: "Invalid send time format",
    },
    {
      name: "Error - Invalid JSON Body",
      sendTime: validSendTime,
      body: `{"id":"evt_123", "type": "user.created" "data":{}}`,
      headers: {
        "x-apex-event-signature": generateSignature(new Date().toISOString(), `{"id":"evt_123", "type": "user.created" "data":{}}`, testSecret),
        "x-apex-event-send-time": new Date().toISOString(),
      },
      expectError: true,
      errorContains: "Failed to parse event message",
    }
  ];

  testCases.forEach((testCase) => {
    it(testCase.name, async () => {
      const req = createMockRequest(testCase.body, testCase.headers);

      let validatedMessage: any;
      let error: Error | null = null;

      try {
        validatedMessage = await validateEventPayload(req, testSecret, testAllowedAgeMS);
      } catch (err) {
        error = err as Error;
      }

      if (testCase.expectError) {
        expect(error).not.toBeNull();
        expect(error?.message).toContain(testCase.errorContains);
      } else {
        expect(error).toBeNull();
        if (testCase.validateMessage) {
          testCase.validateMessage(validatedMessage);
        }
      }
    });
  });
});

test("Test Integration Get Event Message and Validate", async () => {
  const events = await sdk.reader.listEventMessages();
  expect(events.httpMeta.response.status).toBe(200);
  expect(events.listEventMessagesResponse).toBeDefined();
  if (!events.listEventMessagesResponse) {
    throw new Error("listEventMessagesResponse is undefined");
  }
  if (!events.listEventMessagesResponse.eventMessages) {
    throw new Error("eventMessages is undefined in listEventMessagesResponse");
  }
  expect(events.listEventMessagesResponse.eventMessages).toBeDefined();
  expect(events.listEventMessagesResponse.eventMessages.length).toBeGreaterThan(0);

  if (events.listEventMessagesResponse.eventMessages.length === 0) {
    throw new Error("No event messages found");
  }
  const eventMessage = events.listEventMessagesResponse.eventMessages[0];
  if (!eventMessage) {
    throw new Error("eventMessage is undefined");
  }
  expect(eventMessage).toBeDefined();
  expect(eventMessage.messageId).toBeDefined();
  if (!eventMessage.messageId) {
    throw new Error("messageId is undefined in eventMessage");
  }

  const event = await sdk.reader.getEventMessage(eventMessage.messageId);
  expect(event.httpMeta.response.status).toBe(200);
  expect(event).toBeDefined();
  expect(event.eventMessage).toBeDefined();

  // Simulate webhook request
  const simulatedBody = JSON.stringify(event.eventMessage);
  console.log(`Simulated body: ${simulatedBody}`);

  const secretKey = "super-secret-key";
  const sendTime = new Date().toISOString();
  const signature = generateSignature(sendTime, simulatedBody, secretKey);

  const simulatedRequest = new IncomingMessage(new Readable() as any);
  simulatedRequest.headers = {
    'x-apex-event-signature': signature,
    'x-apex-event-send-time': sendTime,
    'Content-Type': 'application/json',
  };

  simulatedRequest.push(simulatedBody);
  simulatedRequest.push(null);

  // Pass to validation function
  const validatedEvent = await validateEventPayload(simulatedRequest, secretKey, 5 * 60);
  expect(validatedEvent).toBeDefined();
});
