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
  const now = new Date();

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
  const subscriptions =
    subscriptions_response?.listPushSubscriptionsResponse?.pushSubscriptions ?? [];
  if (!subscriptions.length) {
    return undefined;
  }
  // The first listed subscription can be a freshly created one with no
  // delivery history (e.g. from a concurrently running suite's create
  // test); prefer a subscription that already has deliveries.
  for (const subscription of subscriptions) {
    const subscriptionId = subscription?.subscriptionId;
    if (!subscriptionId) {
      continue;
    }
    if (await first_delivery_id(subscriptionId)) {
      return subscriptionId;
    }
  }
  return subscriptions[0]?.subscriptionId as string;
}

export async function get_delivery_id(): Promise<string | undefined> {
  const subscriber_id = await get_subscriber_id();

  if (typeof subscriber_id !== 'undefined') {
    return first_delivery_id(subscriber_id);
  }
  return undefined;
}

// Atomically picks a subscription that has deliveries together with its
// first delivery id. Callers that read a delivery should re-pick through
// this on failure: a concurrently running suite can delete the picked
// subscription between the pick and the read.
export async function get_subscription_delivery(): Promise<
  { subscription_id: string; delivery_id: string } | undefined
> {
  const subscriptions_response = await sdk.subscriber.listPushSubscriptions();
  const subscriptions =
    subscriptions_response?.listPushSubscriptionsResponse?.pushSubscriptions ?? [];
  for (const subscription of subscriptions) {
    const subscription_id = subscription?.subscriptionId;
    if (!subscription_id) {
      continue;
    }
    try {
      const delivery_id = await first_delivery_id(subscription_id);
      if (delivery_id) {
        return { subscription_id, delivery_id };
      }
    } catch {
      continue;
    }
  }
  return undefined;
}

async function first_delivery_id(
  subscription_id: string,
): Promise<string | undefined> {
  const result =
    await sdk.subscriber.listPushSubscriptionDeliveries(subscription_id);
  return result?.listPushSubscriptionDeliveriesResponse
    ?.pushSubscriptionDeliveries?.[0]?.deliveryId;
}
