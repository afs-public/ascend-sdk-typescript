# Orders
(*orders*)

## Overview

### Available Operations

* [createOrder](#createorder) - Create Order
* [getOrder](#getorder) - Get Order
* [cancelOrder](#cancelorder) - Cancel Order
* [setExtraReportingData](#setextrareportingdata) - Set Extra Reporting Data
* [listCorrespondentOrders](#listcorrespondentorders) - List Correspondent Orders

## createOrder

Creates a new order for equity or fixed income securities.

 Equity quantities may be for fractional shares, whole shares, or notional dollar amounts. Fixed income orders may be specified in face value currency amounts, with prices expressed in conventional "percentage of par" values.

 Upon successful submission, if the request is a duplicate, returns the existing order in its current state in the system. If the request is not a duplicate, returns the summary of the newly submitted order.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="OrderService_CreateOrder" method="post" path="/trading/v1/accounts/{account_id}/orders" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { AssetType, IdentifierType, OrderType, Side, TimeInForce } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.orders.createOrder({
    assetType: AssetType.Equity,
    clientOrderId: "a6d5258b-6b23-478a-8145-98e79d60427a",
    identifier: "SBUX",
    identifierType: IdentifierType.Symbol,
    orderDate: {},
    orderType: OrderType.Market,
    side: Side.Buy,
    timeInForce: TimeInForce.Day,
  }, "01HBRQ5BW6ZAY4BNWP4GWRD80X");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { ordersCreateOrder } from "@apexfintechsolutions/ascend-sdk/funcs/ordersCreateOrder.js";
import { AssetType, IdentifierType, OrderType, Side, TimeInForce } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await ordersCreateOrder(apexascend, {
    assetType: AssetType.Equity,
    clientOrderId: "a6d5258b-6b23-478a-8145-98e79d60427a",
    identifier: "SBUX",
    identifierType: IdentifierType.Symbol,
    orderDate: {},
    orderType: OrderType.Market,
    side: Side.Buy,
    timeInForce: TimeInForce.Day,
  }, "01HBRQ5BW6ZAY4BNWP4GWRD80X");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreateOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `orderCreate`                                                                                                                                                                  | [components.OrderCreate](../../models/components/ordercreate.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.OrderServiceCreateOrderResponse](../../models/operations/orderservicecreateorderresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 409 | application/json   |
| errors.Status      | 500, 503           | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## getOrder

Gets an order by order ID.

 Upon successful submission, returns the details of the queried order.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="OrderService_GetOrder" method="get" path="/trading/v1/accounts/{account_id}/orders/{order_id}" -->
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
  const result = await apexascend.orders.getOrder("01HBRQ5BW6ZAY4BNWP4GWRD80X", "ebb0c9b5-2c74-45c9-a4ab-40596b778706");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { ordersGetOrder } from "@apexfintechsolutions/ascend-sdk/funcs/ordersGetOrder.js";

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
  const res = await ordersGetOrder(apexascend, "01HBRQ5BW6ZAY4BNWP4GWRD80X", "ebb0c9b5-2c74-45c9-a4ab-40596b778706");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersGetOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `orderId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The order id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.OrderServiceGetOrderResponse](../../models/operations/orderservicegetorderresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500, 503           | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## cancelOrder

Submits an order cancellation request by order ID. Confirmation of order cancellation requests are provided through asynchronous events.

 Upon successful submission, returns the details of the order pending cancellation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="OrderService_CancelOrder" method="post" path="/trading/v1/accounts/{account_id}/orders/{order_id}:cancel" -->
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
  const result = await apexascend.orders.cancelOrder({
    name: "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/orders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
  }, "01HBRQ5BW6ZAY4BNWP4GWRD80X", "ebb0c9b5-2c74-45c9-a4ab-40596b778706");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { ordersCancelOrder } from "@apexfintechsolutions/ascend-sdk/funcs/ordersCancelOrder.js";

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
  const res = await ordersCancelOrder(apexascend, {
    name: "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/orders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
  }, "01HBRQ5BW6ZAY4BNWP4GWRD80X", "ebb0c9b5-2c74-45c9-a4ab-40596b778706");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancelOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `orderId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The order id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `cancelOrderRequestCreate`                                                                                                                                                     | [components.CancelOrderRequestCreate](../../models/components/cancelorderrequestcreate.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.OrderServiceCancelOrderResponse](../../models/operations/orderservicecancelorderresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500, 503           | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## setExtraReportingData

Sets extra reporting data to an existing order. Any SetExtraReportingDataRequest must include the name of the order and the cancel_confirmed_time

### Example Usage

<!-- UsageSnippet language="typescript" operationID="OrderService_SetExtraReportingData" method="post" path="/trading/v1/accounts/{account_id}/orders/{order_id}:setExtraReportingData" -->
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
  const result = await apexascend.orders.setExtraReportingData({
    cancelConfirmedTime: new Date("2025-12-13T15:28:17.262732Z"),
    name: "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/orders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
  }, "01HBRQ5BW6ZAY4BNWP4GWRD80X", "ebb0c9b5-2c74-45c9-a4ab-40596b778706");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { ordersSetExtraReportingData } from "@apexfintechsolutions/ascend-sdk/funcs/ordersSetExtraReportingData.js";

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
  const res = await ordersSetExtraReportingData(apexascend, {
    cancelConfirmedTime: new Date("2025-12-13T15:28:17.262732Z"),
    name: "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/orders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
  }, "01HBRQ5BW6ZAY4BNWP4GWRD80X", "ebb0c9b5-2c74-45c9-a4ab-40596b778706");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersSetExtraReportingData failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `orderId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The order id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `setExtraReportingDataRequestCreate`                                                                                                                                           | [components.SetExtraReportingDataRequestCreate](../../models/components/setextrareportingdatarequestcreate.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.OrderServiceSetExtraReportingDataResponse](../../models/operations/orderservicesetextrareportingdataresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500, 503           | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## listCorrespondentOrders

Lists orders matching the specified filter criteria. Results are paginated and sorted in the reverse order of their creation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="OrderService_ListCorrespondentOrders" method="get" path="/trading/v1/correspondents/{correspondent_id}/orders" -->
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
  const result = await apexascend.orders.listCorrespondentOrders("01HBRQ5BW6ZAY4BNWP4GWRD80X");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { ordersListCorrespondentOrders } from "@apexfintechsolutions/ascend-sdk/funcs/ordersListCorrespondentOrders.js";

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
  const res = await ordersListCorrespondentOrders(apexascend, "01HBRQ5BW6ZAY4BNWP4GWRD80X");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersListCorrespondentOrders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `correspondentId`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | The correspondent id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `filter`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | CEL filter string expressing what orders should be listed. The only properties available for filtering are the boolean `open` and `order_date`. Each of these represent fields on the Orders object, and more details about each can be found attached to the properties.<br/><br/> If `open` is not provided, both "open" and "not open" orders will be returned. All `order_date` searches are limited to orders within the most recent 365 days. If no `order_date` is specified, the default will search between now and 365 days ago. | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `pageSize`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | *number*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | The number of records to return in a single page. The maximum page size is 100. If a value is not provided, the default of 100 will be used. If a value less than one, or greater than the maximum, is provided, the default value will be used.                                                                                                                                                                                                                                                                                   | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `pageToken`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | The token for the next page of content to fetch. When paginating, all other parameters provided to `ListOrders` must match the call that provided the page token.                                                                                                                                                                                                                                                                                                                                                                  | [object Object]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `options`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

### Response

**Promise\<[operations.OrderServiceListCorrespondentOrdersResponse](../../models/operations/orderservicelistcorrespondentordersresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 401, 403    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |