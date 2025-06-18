"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sdk_1 = require("../utils/sdk");
const index_1 = require("./index");
const vitest_2 = require("vitest");
let subscriber_id;
let subscription_id;
let delivery_id;
(0, vitest_2.beforeAll)(async () => {
    subscription_id = await (0, index_1.get_subscriber_id)();
    if (typeof subscription_id !== "string") {
        throw new Error("subscription_id is undefined.");
    }
    subscriber_id = await (0, index_1.create_subscriber_id)();
    if (typeof subscriber_id !== "string") {
        throw new Error("subscriber_id is undefined");
    }
    await (0, sdk_1.timeout)(5000);
    delivery_id = await (0, index_1.get_delivery_id)();
    if (typeof delivery_id !== "string") {
        throw new Error("delivery_id is undefined");
    }
}, 60000);
(0, vitest_1.test)("Subscriber Events Create Push Subscription Create Push Subscription1", async () => {
    (0, vitest_1.expect)(subscriber_id).not.toBe(undefined);
});
(0, vitest_1.test)("Subscriber Events Get Push Subscription Get Push Subscription1", async () => {
    if (typeof subscriber_id !== "string") {
        throw new Error("message_id is undefined.");
    }
    const result = await sdk_1.sdk.subscriber.getPushSubscription(subscriber_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Subscriber Events Update Push Subscription Update Push Subscription1", async () => {
    await (0, sdk_1.timeout)(25000);
    if (typeof subscriber_id !== "string") {
        throw new Error("message_id is undefined.");
    }
    const request = {
        eventTypes: ["position.v2.updated"],
    };
    const result = await sdk_1.sdk.subscriber.updatePushSubscription(request, subscriber_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Subscriber Events List Push Subscription Event Deliveries List Push Subscription Event Deliveries1", async () => {
    (0, vitest_1.expect)(delivery_id).not.toBe(undefined);
});
(0, vitest_1.test)("Subscriber Events Get Push Subscription Event Delivery Get Push Subscription Event Delivery1", async () => {
    if (typeof delivery_id !== "string") {
        throw new Error("delivery_id is undefined");
    }
    if (typeof subscription_id !== "string") {
        throw new Error("subscription_id is undefined");
    }
    const result = await sdk_1.sdk.subscriber.getPushSubscriptionDelivery(subscription_id, delivery_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
(0, vitest_1.test)("Subscriber Events Delete Push Subscription Delete Push Subscription1", async () => {
    await (0, sdk_1.timeout)(5000);
    if (typeof subscriber_id !== "string") {
        throw new Error("message_id is undefined.");
    }
    const result = await sdk_1.sdk.subscriber.deletePushSubscription(subscriber_id);
    (0, vitest_1.expect)(result.httpMeta.response.status).toBe(200);
});
//# sourceMappingURL=subscriber.test.js.map