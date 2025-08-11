"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_message_id = create_message_id;
exports.create_subscriber_id = create_subscriber_id;
exports.get_subscriber_id = get_subscriber_id;
exports.get_delivery_id = get_delivery_id;
const sdk_1 = require("../utils/sdk");
async function create_message_id() {
    const result = await sdk_1.sdk.reader.listEventMessages();
    if (result?.listEventMessagesResponse?.eventMessages?.[0]?.messageId) {
        return result.listEventMessagesResponse.eventMessages[0].messageId;
    }
    return undefined;
}
async function create_subscriber_id() {
    const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
    if (!correspondentId) {
        throw new Error("CORRESPONDENT_ID is undefined or empty.");
    }
    let now = new Date();
    const request = {
        correspondentId: correspondentId,
        displayName: now.toLocaleString(),
        eventTypes: ["position.v1.updated"],
        httpCallback: {
            clientSecret: "mysecretkey1",
            timeoutSeconds: 30,
            url: "https://brokercheck.finra.org/",
        },
    };
    const result = await sdk_1.sdk.subscriber.createPushSubscription(request);
    if (result?.pushSubscription?.name) {
        return result.pushSubscription.name.split("/").pop();
    }
    return undefined;
}
async function get_subscriber_id() {
    const subscriptions_response = await sdk_1.sdk.subscriber.listPushSubscriptions();
    if (subscriptions_response?.listPushSubscriptionsResponse?.pushSubscriptions?.length) {
        return subscriptions_response?.listPushSubscriptionsResponse?.pushSubscriptions[0]?.subscriptionId;
    }
    return undefined;
}
async function get_delivery_id() {
    const subscriber_id = await get_subscriber_id();
    if (typeof subscriber_id !== 'undefined') {
        const result = await sdk_1.sdk.subscriber.listPushSubscriptionDeliveries(subscriber_id);
        if (result?.listPushSubscriptionDeliveriesResponse?.pushSubscriptionDeliveries
            ?.length) {
            return result?.listPushSubscriptionDeliveriesResponse
                ?.pushSubscriptionDeliveries[0]?.deliveryId;
        }
    }
    return undefined;
}
//# sourceMappingURL=index.js.map