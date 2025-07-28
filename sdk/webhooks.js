"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEventPayload = validateEventPayload;
const crypto = __importStar(require("crypto"));
// Function to validate an incoming webhook event payload.
async function validateEventPayload(req, webhookSecret, allowedEventAgeMS // Allowed event age in milliseconds
) {
    const signatureHeader = req.headers["x-apex-event-signature"];
    const sendTimeHeader = req.headers["x-apex-event-send-time"];
    if (!signatureHeader || !sendTimeHeader) {
        throw new Error("Missing required headers: x-apex-event-signature and/or x-apex-event-send-time");
    }
    const requestBody = await getRequestBody(req);
    const bodyStr = requestBody.trim();
    const sendTime = new Date(sendTimeHeader);
    if (isNaN(sendTime.getTime())) {
        throw new Error("Invalid send time format");
    }
    if (isEventAgeOutOfRange(sendTime, allowedEventAgeMS)) {
        throw new Error("Event age is out of range, it must be sent within the allowed event age");
    }
    verifySignature(signatureHeader, sendTimeHeader, bodyStr, webhookSecret);
    try {
        return JSON.parse(bodyStr);
    }
    catch (error) {
        throw new Error(`Failed to parse event message: ${error instanceof Error ? error.message : String(error)}`);
    }
}
// Helper function to check if the event's age is out of range.
function isEventAgeOutOfRange(sendTime, allowedEventAgeMS) {
    const currentTime = new Date();
    // Check if the event is too old or in the future.
    const isTooOld = sendTime.getTime() < currentTime.getTime() - allowedEventAgeMS;
    const isInTheFuture = sendTime.getTime() > currentTime.getTime() + allowedEventAgeMS;
    return isTooOld || isInTheFuture;
}
// Helper function to verify the signature of the webhook event.
function verifySignature(headerSignature, sendTimeHeader, body, secret) {
    const payload = `${body}.${sendTimeHeader}`;
    const hmac = crypto.createHmac("sha256", secret).update(payload);
    const expectedSignature = hmac.digest("hex");
    // Check buffer lengths and validate the signature
    if (headerSignature.length !== expectedSignature.length || !crypto.timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(headerSignature))) {
        throw new Error("Provided signature does not match calculated signature");
    }
}
// Helper function to get the raw request body from an IncomingMessage.
async function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => resolve(body));
        req.on("error", (error) => reject(error));
    });
}
//# sourceMappingURL=webhooks.js.map