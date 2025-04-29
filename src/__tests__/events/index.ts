import { sdk } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";

export async function create_message_id(): Promise<string | undefined> {
  const result = await sdk.reader.listEventMessages();
  if (result?.listEventMessagesResponse?.eventMessages?.[0]?.messageId) {
    return result.listEventMessagesResponse.eventMessages[0].messageId;
  }
  return undefined;
}

export async function create_subscriber_id(): Promise<string | undefined> {
  const correspondentId = process.env["CORRESPONDENT_ID"] ?? "";
  if (!correspondentId) {
    throw new Error("CORRESPONDENT_ID is undefined or empty.");
  }
  let now = new Date();

  const request: components.PushSubscriptionCreate = {
    correspondentId: correspondentId,
    displayName: now.toLocaleString(),
    eventTypes: ["position.v1.updated"],
    httpCallback: {
      clientSecret: "mysecretkey1",
      timeoutSeconds: 30,
      url: "https://brokercheck.finra.org/",
    },
  };

  const result = await sdk.subscriber.createPushSubscription(request);
  if (result?.pushSubscription?.name) {
    return result.pushSubscription.name.split("/").pop();
  }
  return undefined;
}

export async function get_subscriber_id(): Promise<string | undefined> {
  const subscriptions_response = await sdk.subscriber.listPushSubscriptions();
  if (subscriptions_response?.listPushSubscriptionsResponse?.pushSubscriptions?.length) {
    return subscriptions_response?.listPushSubscriptionsResponse?.pushSubscriptions[0]?.subscriptionId as string;
  }
  return undefined;
}

export async function get_delivery_id(): Promise<string | undefined> {
  const subscriber_id = await get_subscriber_id();

  if (typeof subscriber_id !== 'undefined') {
    const result =
      await sdk.subscriber.listPushSubscriptionDeliveries(subscriber_id);
    if (
      result?.listPushSubscriptionDeliveriesResponse?.pushSubscriptionDeliveries
        ?.length
    ) {
      return result?.listPushSubscriptionDeliveriesResponse
        ?.pushSubscriptionDeliveries[0]?.deliveryId;
    }
  }
  return undefined;
}
