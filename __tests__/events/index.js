"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create_message_id = create_message_id;
exports.create_subscriber_id = create_subscriber_id;
exports.get_subscriber_id = get_subscriber_id;
exports.get_delivery_id = get_delivery_id;
const sdk_1 = require("../utils/sdk");
async function create_message_id() {
    var _a, _b, _c;
    const result = await sdk_1.sdk.reader.listEventMessages();
    if ((_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.listEventMessagesResponse) === null || _a === void 0 ? void 0 : _a.eventMessages) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.messageId) {
        return result.listEventMessagesResponse.eventMessages[0].messageId;
    }
    return undefined;
}
async function create_subscriber_id() {
    var _a, _b;
    const correspondentId = (_a = process.env["CORRESPONDENT_ID"]) !== null && _a !== void 0 ? _a : "";
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
    if ((_b = result === null || result === void 0 ? void 0 : result.pushSubscription) === null || _b === void 0 ? void 0 : _b.name) {
        return result.pushSubscription.name.split("/").pop();
    }
    return undefined;
}
async function get_subscriber_id() {
    var _a, _b, _c, _d;
    const subscriptions_response = await sdk_1.sdk.subscriber.listPushSubscriptions();
    if ((_b = (_a = subscriptions_response === null || subscriptions_response === void 0 ? void 0 : subscriptions_response.listPushSubscriptionsResponse) === null || _a === void 0 ? void 0 : _a.pushSubscriptions) === null || _b === void 0 ? void 0 : _b.length) {
        return (_d = (_c = subscriptions_response === null || subscriptions_response === void 0 ? void 0 : subscriptions_response.listPushSubscriptionsResponse) === null || _c === void 0 ? void 0 : _c.pushSubscriptions[0]) === null || _d === void 0 ? void 0 : _d.subscriptionId;
    }
    return undefined;
}
async function get_delivery_id() {
    var _a, _b, _c, _d;
    const subscriber_id = await get_subscriber_id();
    if (typeof subscriber_id !== 'undefined') {
        const result = await sdk_1.sdk.subscriber.listPushSubscriptionDeliveries(subscriber_id);
        if ((_b = (_a = result === null || result === void 0 ? void 0 : result.listPushSubscriptionDeliveriesResponse) === null || _a === void 0 ? void 0 : _a.pushSubscriptionDeliveries) === null || _b === void 0 ? void 0 : _b.length) {
            return (_d = (_c = result === null || result === void 0 ? void 0 : result.listPushSubscriptionDeliveriesResponse) === null || _c === void 0 ? void 0 : _c.pushSubscriptionDeliveries[0]) === null || _d === void 0 ? void 0 : _d.deliveryId;
        }
    }
    return undefined;
}
//# sourceMappingURL=index.js.map