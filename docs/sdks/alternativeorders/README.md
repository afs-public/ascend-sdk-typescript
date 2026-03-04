# AlternativeOrders
(*alternativeOrders*)

## Overview

### Available Operations

* [createAlternativeOrder](#createalternativeorder) - Create Alternative Order
* [listAlternativeOrders](#listalternativeorders) - List Alternative Orders
* [getAlternativeOrder](#getalternativeorder) - Get Alternative Order
* [retrievePendingInvestorActions](#retrievependinginvestoractions) - Get Pending Investor Actions
* [settleAlternativeOrder](#settlealternativeorder) - Simulate Alternative Order Booking

## createAlternativeOrder

Creates an order for an alternative investment asset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AlternativeOrders_CreateAlternativeOrder" method="post" path="/trading/v1/accounts/{account_id}/alternativeOrders" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { AlternativeOrderCreateIdentifierType, AlternativeOrderCreateSide } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.alternativeOrders.createAlternativeOrder({
    clientOrderId: "f5074670-1b25-439f-9b5c-702027660800",
    identifier: "8395",
    identifierType: AlternativeOrderCreateIdentifierType.AssetId,
    side: AlternativeOrderCreateSide.Buy,
  }, "01JR8YQT40WAQT8S95ZQGS1QN0");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { alternativeOrdersCreateAlternativeOrder } from "@apexfintechsolutions/ascend-sdk/funcs/alternativeOrdersCreateAlternativeOrder.js";
import { AlternativeOrderCreateIdentifierType, AlternativeOrderCreateSide } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await alternativeOrdersCreateAlternativeOrder(apexascend, {
    clientOrderId: "f5074670-1b25-439f-9b5c-702027660800",
    identifier: "8395",
    identifierType: AlternativeOrderCreateIdentifierType.AssetId,
    side: AlternativeOrderCreateSide.Buy,
  }, "01JR8YQT40WAQT8S95ZQGS1QN0");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alternativeOrdersCreateAlternativeOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `alternativeOrderCreate`                                                                                                                                                       | [components.AlternativeOrderCreate](../../models/components/alternativeordercreate.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AlternativeOrdersCreateAlternativeOrderResponse](../../models/operations/alternativeorderscreatealternativeorderresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.Status           | 400, 401, 403, 404, 409 | application/json        |
| errors.Status           | 500                     | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## listAlternativeOrders

Retrieves a list of alternative investment orders for the specified account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AlternativeOrders_ListAlternativeOrders" method="get" path="/trading/v1/accounts/{account_id}/alternativeOrders" -->
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
  const result = await apexascend.alternativeOrders.listAlternativeOrders("01JR8YQT40WAQT8S95ZQGS1QN0");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { alternativeOrdersListAlternativeOrders } from "@apexfintechsolutions/ascend-sdk/funcs/alternativeOrdersListAlternativeOrders.js";

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
  const res = await alternativeOrdersListAlternativeOrders(apexascend, "01JR8YQT40WAQT8S95ZQGS1QN0");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alternativeOrdersListAlternativeOrders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                 | The account id.                                                                                                                                                                                                                                                                    | [object Object]                                                                                                                                                                                                                                                                    |
| `pageSize`                                                                                                                                                                                                                                                                         | *number*                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                 | The maximum number of orders to return. - Max value = 100 - Values above 100 will be coerced to 100. - If the specified value is greater than the number of orders, the service will return fewer than the specified value. - If unspecified, at most 100 orders will be returned. | [object Object]                                                                                                                                                                                                                                                                    |
| `pageToken`                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                 | For pagination, provide the page token, received from a previous `ListAlternativeOrders` call, to retrieve the subsequent page. All other parameters provided to `ListAlternativeOrders` must match the request that provided the page token.                                      | [object Object]                                                                                                                                                                                                                                                                    |
| `filter`                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                 | A CEL string to filter results. All fields from the response can be used as filters.<br/><br/> See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) guide for syntax details and examples.                                              | [object Object]                                                                                                                                                                                                                                                                    |
| `options`                                                                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                     |                                                                                                                                                                                                                                                                                    |
| `options.retries`                                                                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                    |

### Response

**Promise\<[operations.AlternativeOrdersListAlternativeOrdersResponse](../../models/operations/alternativeorderslistalternativeordersresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 401, 403    | application/json |
| errors.Status    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getAlternativeOrder

Retrieves the details for the specified alternative investment order.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AlternativeOrders_GetAlternativeOrder" method="get" path="/trading/v1/accounts/{account_id}/alternativeOrders/{alternativeOrder_id}" -->
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
  const result = await apexascend.alternativeOrders.getAlternativeOrder("01JR8YQT40WAQT8S95ZQGS1QN0", "01H5TSDAD9MQ98B8KF36J3Q8P9");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { alternativeOrdersGetAlternativeOrder } from "@apexfintechsolutions/ascend-sdk/funcs/alternativeOrdersGetAlternativeOrder.js";

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
  const res = await alternativeOrdersGetAlternativeOrder(apexascend, "01JR8YQT40WAQT8S95ZQGS1QN0", "01H5TSDAD9MQ98B8KF36J3Q8P9");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alternativeOrdersGetAlternativeOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `alternativeOrderId`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The alternativeOrder id.                                                                                                                                                       | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AlternativeOrdersGetAlternativeOrderResponse](../../models/operations/alternativeordersgetalternativeorderresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## retrievePendingInvestorActions

Retrieves the links for any order documents that are awaiting signature and the `party_id` of the party responsible for signing them.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AlternativeOrders_RetrievePendingInvestorActions" method="get" path="/trading/v1/accounts/{account_id}/alternativeOrders/{alternativeOrder_id}:retrievePendingInvestorActions" -->
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
  const result = await apexascend.alternativeOrders.retrievePendingInvestorActions("01JR8YQT40WAQT8S95ZQGS1QN0", "01H5TSDAD9MQ98B8KF36J3Q8P9");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { alternativeOrdersRetrievePendingInvestorActions } from "@apexfintechsolutions/ascend-sdk/funcs/alternativeOrdersRetrievePendingInvestorActions.js";

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
  const res = await alternativeOrdersRetrievePendingInvestorActions(apexascend, "01JR8YQT40WAQT8S95ZQGS1QN0", "01H5TSDAD9MQ98B8KF36J3Q8P9");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alternativeOrdersRetrievePendingInvestorActions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `alternativeOrderId`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The alternativeOrder id.                                                                                                                                                       | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AlternativeOrdersRetrievePendingInvestorActionsResponse](../../models/operations/alternativeordersretrievependinginvestoractionsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 401, 403    | application/json |
| errors.Status    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## settleAlternativeOrder

Simulates settlement process for an alternative order. For use in UAT environment only.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AlternativeOrders_SettleAlternativeOrder" method="post" path="/trading/v1/accounts/{account_id}/alternativeOrders/{alternativeOrder_id}:settle" -->
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
  const result = await apexascend.alternativeOrders.settleAlternativeOrder({
    name: "accounts/01JR8YQT40WAQT8S95ZQGS1QN0/alternativeOrders/01H5TSDAD9MQ98B8KF36J3Q8P9",
  }, "01JR8YQT40WAQT8S95ZQGS1QN0", "01H5TSDAD9MQ98B8KF36J3Q8P9");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { alternativeOrdersSettleAlternativeOrder } from "@apexfintechsolutions/ascend-sdk/funcs/alternativeOrdersSettleAlternativeOrder.js";

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
  const res = await alternativeOrdersSettleAlternativeOrder(apexascend, {
    name: "accounts/01JR8YQT40WAQT8S95ZQGS1QN0/alternativeOrders/01H5TSDAD9MQ98B8KF36J3Q8P9",
  }, "01JR8YQT40WAQT8S95ZQGS1QN0", "01H5TSDAD9MQ98B8KF36J3Q8P9");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alternativeOrdersSettleAlternativeOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `alternativeOrderId`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The alternativeOrder id.                                                                                                                                                       | [object Object]                                                                                                                                                                |
| `settleAlternativeOrderRequestCreate`                                                                                                                                          | [components.SettleAlternativeOrderRequestCreate](../../models/components/settlealternativeorderrequestcreate.md)                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AlternativeOrdersSettleAlternativeOrderResponse](../../models/operations/alternativeorderssettlealternativeorderresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |