import { expect, test } from "vitest";
import { sdk, timeout } from "../utils/sdk";
import * as components from "@apexfintechsolutions/ascend-sdk/models/components";
import {
  create_subscriber_id,
  get_delivery_id,
  get_subscriber_id,
} from "./index";
import { beforeAll } from "vitest";

let subscription_id: string | undefined;
let subscriber_id: string | undefined;
let delivery_id: string | undefined;
beforeAll(async () => {
  subscription_id = await create_subscriber_id();
  if (typeof subscription_id !== "string") {
    throw new Error("subscription_id is undefined.");
  }
  await timeout(5000);
  subscriber_id = await get_subscriber_id();
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
  await timeout(25000);
  if (typeof subscriber_id !== "string") {
    throw new Error("message_id is undefined.");
  }
  const request: components.PushSubscriptionUpdate = {
    eventTypes: ["position.v2.updated"],
  };
  const result = await sdk.subscriber.updatePushSubscription(
    request,
    subscriber_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Subscriber Events List Push Subscription Event Deliveries List Push Subscription Event Deliveries1", async () => {
  expect(delivery_id).not.toBe(undefined);
});

test("Subscriber Events Get Push Subscription Event Delivery Get Push Subscription Event Delivery1", async () => {
  if (typeof delivery_id !== "string") {
    throw new Error("delivery_id is undefined");
  }
  if (typeof subscriber_id !== "string") {
    throw new Error("subscriber_id is undefined");
  }
  const result = await sdk.subscriber.getPushSubscriptionDelivery(
    subscriber_id,
    delivery_id,
  );
  expect(result.httpMeta.response.status).toBe(200);
});

test("Subscriber Events Delete Push Subscription Delete Push Subscription1", async () => {
  await timeout(5000);
  if (typeof subscriber_id !== "string") {
    throw new Error("message_id is undefined.");
  }
  const result = await sdk.subscriber.deletePushSubscription(subscriber_id);
  expect(result.httpMeta.response.status).toBe(200);
});
