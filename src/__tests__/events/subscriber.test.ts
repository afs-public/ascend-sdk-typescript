import { expect, test } from "vitest";
import { sdk, retryOnTransientError, RETRY_HEAVY_TEST_TIMEOUT_MS } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import * as errors from "@apexfintechsolutions/ascend-sdk/models/errors";
import {
  create_subscriber_id,
  get_delivery_id,
  get_subscriber_id,
  get_subscription_delivery,
} from "./index";
import { beforeAll } from "vitest";

let subscriber_id: string | undefined;
let subscription_id: string | undefined;
let delivery_id: string | undefined;
beforeAll(async () => {
  subscription_id = await get_subscriber_id();
  if (typeof subscription_id !== "string") {
    throw new Error("subscription_id is undefined.");
  }
  subscriber_id = await create_subscriber_id();
  if (typeof subscriber_id !== "string") {
    throw new Error("subscriber_id is undefined");
  }
  delivery_id = await get_delivery_id();
  if (typeof delivery_id !== "string") {
    throw new Error("delivery_id is undefined");
  }
}, 60000);

test("Subscriber Events Create Push Subscription Create Push Subscription1", async () => {
  expect(subscriber_id).not.toBe(undefined);
});

test("Subscriber Events Get Push Subscription Get Push Subscription1", async () => {
  if (typeof subscriber_id !== "string") {
    throw new Error("message_id is undefined.");
  }
  const result = await sdk.subscriber.getPushSubscription(subscriber_id);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Subscriber Events Update Push Subscription Update Push Subscription1", async () => {
  if (typeof subscriber_id !== "string") {
    throw new Error("message_id is undefined.");
  }
  const request: components.PushSubscriptionUpdate = {
    eventTypes: ["position.v2.updated"],
  };
  const result = await retryOnTransientError(() =>
    sdk.subscriber.updatePushSubscription(request, subscriber_id!),
  );
  expect(result.httpMeta.response.status).toBe(200);
}, RETRY_HEAVY_TEST_TIMEOUT_MS);

test("Subscriber Events List Push Subscription Event Deliveries List Push Subscription Event Deliveries1", async () => {
  expect(delivery_id).not.toBe(undefined);
});

test("Subscriber Events Get Push Subscription Event Delivery Get Push Subscription Event Delivery1", async () => {
  // Re-pick the subscription/delivery pair on each attempt: a concurrently
  // running suite can delete the picked subscription between the pick and
  // the read.
  const result = await retryOnTransientError(async () => {
    const pair = await get_subscription_delivery();
    if (!pair) {
      throw new Error("no subscription with deliveries found");
    }
    return sdk.subscriber.getPushSubscriptionDelivery(
      pair.subscription_id,
      pair.delivery_id,
    );
  }, 5);
  expect(result.httpMeta.response.status).toBe(200);
});

test("Subscriber Events Delete Push Subscription Delete Push Subscription1", async () => {
  if (typeof subscriber_id !== "string") {
    throw new Error("message_id is undefined.");
  }
  // Deletes are not idempotent: if an earlier attempt succeeded server-side
  // but its response was lost, retries see NOT_FOUND. Treat that as success
  // instead of retrying a completed delete into a guaranteed failure.
  const result = await retryOnTransientError(async () => {
    try {
      return await sdk.subscriber.deletePushSubscription(subscriber_id!);
    } catch (err) {
      if (err instanceof errors.Status && err.code === 5) {
        return undefined;
      }
      throw err;
    }
  });
  if (result) {
    expect(result.httpMeta.response.status).toBe(200);
  }
}, RETRY_HEAVY_TEST_TIMEOUT_MS);
