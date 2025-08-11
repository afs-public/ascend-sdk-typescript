# Subscriber
(*subscriber*)

## Overview

### Available Operations

* [createPushSubscription](#createpushsubscription) - Create Push Subscription
* [listPushSubscriptions](#listpushsubscriptions) - List Push Subscriptions
* [getPushSubscription](#getpushsubscription) - Get Push Subscription
* [updatePushSubscription](#updatepushsubscription) - Update Subscription
* [deletePushSubscription](#deletepushsubscription) - Delete Subscription
* [getPushSubscriptionDelivery](#getpushsubscriptiondelivery) - Get Subscription Event Delivery
* [listPushSubscriptionDeliveries](#listpushsubscriptiondeliveries) - List Push Subscription Event Deliveries

## createPushSubscription

Creates a new push subscription for event notifications.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Subscriber_CreatePushSubscription" method="post" path="/events/v1/subscriptions" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const result = await apexascend.subscriber.createPushSubscription({
    displayName: "This is an example HTTP configuration.",
    eventTypes: [
      "position.v1.updated",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { subscriberCreatePushSubscription } from "@apexfintechsolutions/ascend-sdk/funcs/subscriberCreatePushSubscription.js";

// Use `ApexascendCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apexascend = new ApexascendCore({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const res = await subscriberCreatePushSubscription(apexascend, {
    displayName: "This is an example HTTP configuration.",
    eventTypes: [
      "position.v1.updated",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriberCreatePushSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PushSubscriptionCreate](../../models/components/pushsubscriptioncreate.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscriberCreatePushSubscriptionResponse](../../models/operations/subscribercreatepushsubscriptionresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 409 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## listPushSubscriptions

Gets a list of push subscriptions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Subscriber_ListPushSubscriptions" method="get" path="/events/v1/subscriptions" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const result = await apexascend.subscriber.listPushSubscriptions();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { subscriberListPushSubscriptions } from "@apexfintechsolutions/ascend-sdk/funcs/subscriberListPushSubscriptions.js";

// Use `ApexascendCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apexascend = new ApexascendCore({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const res = await subscriberListPushSubscriptions(apexascend);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriberListPushSubscriptions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `filter`                                                                                                                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                   | A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; If empty, all subscriptions the user has permission to view will be returned; Filter options include:<br/> `name`<br/> `subscription_id`<br/> `client_id`<br/> `correspondent_id`<br/> `display_name`<br/> `event_types`<br/> `state`<br/> `http_callback.url`<br/> `http_callback.timeout_seconds` | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `pageSize`                                                                                                                                                                                                                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                   | The number of entries to return in a single page; Default = 100; Maximum = 1000                                                                                                                                                                                                                                                                                                                                                      | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `pageToken`                                                                                                                                                                                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                   | Page token used for pagination; Supplying a page token returns the next page of results                                                                                                                                                                                                                                                                                                                                              | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `options`                                                                                                                                                                                                                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### Response

**Promise\<[operations.SubscriberListPushSubscriptionsResponse](../../models/operations/subscriberlistpushsubscriptionsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 401, 403    | application/json |
| errors.Status    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getPushSubscription

Gets the details of a specific push subscription.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Subscriber_GetPushSubscription" method="get" path="/events/v1/subscriptions/{subscription_id}" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const result = await apexascend.subscriber.getPushSubscription("01H8MCDXH4JVH7KVNB2YY42907");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { subscriberGetPushSubscription } from "@apexfintechsolutions/ascend-sdk/funcs/subscriberGetPushSubscription.js";

// Use `ApexascendCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apexascend = new ApexascendCore({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const res = await subscriberGetPushSubscription(apexascend, "01H8MCDXH4JVH7KVNB2YY42907");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriberGetPushSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriptionId`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The subscription id.                                                                                                                                                           | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.SubscriberGetPushSubscriptionResponse](../../models/operations/subscribergetpushsubscriptionresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## updatePushSubscription

Updates the details of a push subscription.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Subscriber_UpdatePushSubscription" method="patch" path="/events/v1/subscriptions/{subscription_id}" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const result = await apexascend.subscriber.updatePushSubscription({}, "01H8MCDXH4JVH7KVNB2YY42907");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { subscriberUpdatePushSubscription } from "@apexfintechsolutions/ascend-sdk/funcs/subscriberUpdatePushSubscription.js";

// Use `ApexascendCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apexascend = new ApexascendCore({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const res = await subscriberUpdatePushSubscription(apexascend, {}, "01H8MCDXH4JVH7KVNB2YY42907");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriberUpdatePushSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriptionId`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The subscription id.                                                                                                                                                           | [object Object]                                                                                                                                                                |
| `pushSubscriptionUpdate`                                                                                                                                                       | [components.PushSubscriptionUpdate](../../models/components/pushsubscriptionupdate.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `updateMask`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The fields to update in subscription                                                                                                                                           |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.SubscriberUpdatePushSubscriptionResponse](../../models/operations/subscriberupdatepushsubscriptionresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## deletePushSubscription

Stops receiving events from a push subscription, and then deletes it.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Subscriber_DeletePushSubscription" method="delete" path="/events/v1/subscriptions/{subscription_id}" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const result = await apexascend.subscriber.deletePushSubscription("01H8MCDXH4JVH7KVNB2YY42907");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { subscriberDeletePushSubscription } from "@apexfintechsolutions/ascend-sdk/funcs/subscriberDeletePushSubscription.js";

// Use `ApexascendCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apexascend = new ApexascendCore({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const res = await subscriberDeletePushSubscription(apexascend, "01H8MCDXH4JVH7KVNB2YY42907");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriberDeletePushSubscription failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriptionId`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The subscription id.                                                                                                                                                           | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.SubscriberDeletePushSubscriptionResponse](../../models/operations/subscriberdeletepushsubscriptionresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## getPushSubscriptionDelivery

Gets the details of a specific push subscription delivery.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Subscriber_GetPushSubscriptionDelivery" method="get" path="/events/v1/subscriptions/{subscription_id}/deliveries/{delivery_id}" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const result = await apexascend.subscriber.getPushSubscriptionDelivery("01H8MCDXH4JVH7KVNB2YY42907", "01H8MCDXH415BJ962YDN4B02JK");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { subscriberGetPushSubscriptionDelivery } from "@apexfintechsolutions/ascend-sdk/funcs/subscriberGetPushSubscriptionDelivery.js";

// Use `ApexascendCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apexascend = new ApexascendCore({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const res = await subscriberGetPushSubscriptionDelivery(apexascend, "01H8MCDXH4JVH7KVNB2YY42907", "01H8MCDXH415BJ962YDN4B02JK");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriberGetPushSubscriptionDelivery failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriptionId`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The subscription id.                                                                                                                                                           | [object Object]                                                                                                                                                                |
| `deliveryId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The delivery id.                                                                                                                                                               | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.SubscriberGetPushSubscriptionDeliveryResponse](../../models/operations/subscribergetpushsubscriptiondeliveryresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## listPushSubscriptionDeliveries

Gets a list of a push subscription's event deliveries.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Subscriber_ListPushSubscriptionDeliveries" method="get" path="/events/v1/subscriptions/{subscription_id}/deliveries" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const result = await apexascend.subscriber.listPushSubscriptionDeliveries("01H8MCDXH4JVH7KVNB2YY42907");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { subscriberListPushSubscriptionDeliveries } from "@apexfintechsolutions/ascend-sdk/funcs/subscriberListPushSubscriptionDeliveries.js";

// Use `ApexascendCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apexascend = new ApexascendCore({
  security: {
    apiKey: "ABCDEFGHIJ0123456789abcdefghij0123456789",
    serviceAccountCreds: {
      privateKey: "-----BEGIN PRIVATE KEY--{OMITTED FOR BREVITY}",
      name: "FinFirm",
      organization: "correspondents/00000000-0000-0000-0000-000000000000",
      type: "serviceAccount",
    },
  },
});

async function run() {
  const res = await subscriberListPushSubscriptionDeliveries(apexascend, "01H8MCDXH4JVH7KVNB2YY42907");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("subscriberListPushSubscriptionDeliveries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                               | Type                                                                                                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                                                                                             | Example                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `subscriptionId`                                                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                      | The subscription id.                                                                                                                                                                                                                                                                                                                                                                    | [object Object]                                                                                                                                                                                                                                                                                                                                                                         |
| `filter`                                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                      | A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; If left empty, all deliveries the user has permission to view are returned; Filter options include:<br/> `name`<br/> `delivery_id`<br/> `event`<br/> `event_publish_time`<br/> `result`<br/> `last_response`<br/> `last_send_time`<br/> `duration` | [object Object]                                                                                                                                                                                                                                                                                                                                                                         |
| `pageSize`                                                                                                                                                                                                                                                                                                                                                                              | *number*                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                      | The number of entries to return in a single page; Default = 100; Maximum = 1000                                                                                                                                                                                                                                                                                                         | [object Object]                                                                                                                                                                                                                                                                                                                                                                         |
| `pageToken`                                                                                                                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                      | Page token used for pagination; Supplying a page token returns the next page of results                                                                                                                                                                                                                                                                                                 | [object Object]                                                                                                                                                                                                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                                                                                                                                                                                               | RequestOptions                                                                                                                                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                      | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                         |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                  | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                      | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                         |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                       | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                      | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                         |

### Response

**Promise\<[operations.SubscriberListPushSubscriptionDeliveriesResponse](../../models/operations/subscriberlistpushsubscriptiondeliveriesresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |