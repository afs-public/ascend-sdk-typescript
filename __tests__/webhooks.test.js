"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const crypto_1 = __importDefault(require("crypto"));
const webhooks_js_1 = require("../sdk/webhooks.js");
const http_1 = require("http");
const stream_1 = require("stream");
const sdk_1 = require("./utils/sdk");
// Constants
const testSecret = "my-super-secret-webhook-key";
const testAllowedAgeMS = 5 * 60 * 1000; // 5 minutes in milliseconds
const testMessageID = "msg_2WpGqg8fH9jZ7kY6aB3dX2eF1c";
const testEventType = "transaction.created";
const testAccountID = "acc_1a2b3c4d5e6f7g8h9i";
const testClientID = "cli_j0k1l2m3n4p5q6r7s8";
const testPartitionKey = "user_xyz";
function createTestBody(publishTime) {
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
function generateSignature(sendTime, body, secret) {
    const payload = `${body}.${sendTime}`;
    const hmac = crypto_1.default.createHmac("sha256", secret).update(payload);
    return hmac.digest("hex");
}
// Mock function to create an IncomingMessage-like object
function createMockRequest(body, headers) {
    // Create a Readable stream for the body
    const readable = new stream_1.Readable({
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
    return req;
}
(0, vitest_1.describe)("validateEventPayload tests", () => {
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
            validateMessage: (msg) => {
                (0, vitest_1.expect)(msg).not.toBeNull();
                (0, vitest_1.expect)(msg.message_id).toBe(testMessageID);
                (0, vitest_1.expect)(msg.event_type).toBe(testEventType);
                (0, vitest_1.expect)(msg.account_id).toBe(testAccountID);
                (0, vitest_1.expect)(msg.client_id).toBe(testClientID);
                (0, vitest_1.expect)(msg.name).toBe(`messages/${testMessageID}`);
                (0, vitest_1.expect)(new Date(msg.publish_time).toISOString()).toBe(validSendTime.toISOString());
                (0, vitest_1.expect)(msg.data).toHaveProperty("status", "completed");
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
                "x-apex-event-signature": generateSignature(new Date(Date.now() - testAllowedAgeMS - 60000).toISOString(), validBody, testSecret),
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
        (0, vitest_1.it)(testCase.name, async () => {
            const req = createMockRequest(testCase.body, testCase.headers);
            let validatedMessage;
            let error = null;
            try {
                validatedMessage = await (0, webhooks_js_1.validateEventPayload)(req, testSecret, testAllowedAgeMS);
            }
            catch (err) {
                error = err;
            }
            if (testCase.expectError) {
                (0, vitest_1.expect)(error).not.toBeNull();
                (0, vitest_1.expect)(error === null || error === void 0 ? void 0 : error.message).toContain(testCase.errorContains);
            }
            else {
                (0, vitest_1.expect)(error).toBeNull();
                if (testCase.validateMessage) {
                    testCase.validateMessage(validatedMessage);
                }
            }
        });
    });
});
(0, vitest_1.test)("Test Integration Get Event Message and Validate", async () => {
    const events = await sdk_1.sdk.reader.listEventMessages();
    (0, vitest_1.expect)(events.httpMeta.response.status).toBe(200);
    (0, vitest_1.expect)(events.listEventMessagesResponse).toBeDefined();
    if (!events.listEventMessagesResponse) {
        throw new Error("listEventMessagesResponse is undefined");
    }
    if (!events.listEventMessagesResponse.eventMessages) {
        throw new Error("eventMessages is undefined in listEventMessagesResponse");
    }
    (0, vitest_1.expect)(events.listEventMessagesResponse.eventMessages).toBeDefined();
    (0, vitest_1.expect)(events.listEventMessagesResponse.eventMessages.length).toBeGreaterThan(0);
    if (events.listEventMessagesResponse.eventMessages.length === 0) {
        throw new Error("No event messages found");
    }
    const eventMessage = events.listEventMessagesResponse.eventMessages[0];
    if (!eventMessage) {
        throw new Error("eventMessage is undefined");
    }
    (0, vitest_1.expect)(eventMessage).toBeDefined();
    (0, vitest_1.expect)(eventMessage.messageId).toBeDefined();
    if (!eventMessage.messageId) {
        throw new Error("messageId is undefined in eventMessage");
    }
    const event = await sdk_1.sdk.reader.getEventMessage(eventMessage.messageId);
    (0, vitest_1.expect)(event.httpMeta.response.status).toBe(200);
    (0, vitest_1.expect)(event).toBeDefined();
    (0, vitest_1.expect)(event.eventMessage).toBeDefined();
    // Simulate webhook request
    const simulatedBody = JSON.stringify(event.eventMessage);
    console.log(`Simulated body: ${simulatedBody}`);
    const secretKey = "super-secret-key";
    const sendTime = new Date().toISOString();
    const signature = generateSignature(sendTime, simulatedBody, secretKey);
    const simulatedRequest = new http_1.IncomingMessage(new stream_1.Readable());
    simulatedRequest.headers = {
        'x-apex-event-signature': signature,
        'x-apex-event-send-time': sendTime,
        'Content-Type': 'application/json',
    };
    simulatedRequest.push(simulatedBody);
    simulatedRequest.push(null);
    // Pass to validation function
    const validatedEvent = await (0, webhooks_js_1.validateEventPayload)(simulatedRequest, secretKey, 5 * 60);
    (0, vitest_1.expect)(validatedEvent).toBeDefined();
});
//# sourceMappingURL=webhooks.test.js.map