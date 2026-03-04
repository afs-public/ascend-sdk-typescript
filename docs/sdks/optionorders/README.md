# OptionOrders
(*optionOrders*)

## Overview

### Available Operations

* [createOptionOrder](#createoptionorder) - Create Option Order
* [getOptionOrder](#getoptionorder) - Get Option Order
* [cancelOptionOrder](#canceloptionorder) - Cancel Option Order

## createOptionOrder

Creates a new option order.

 Currently only single-leg option orders are supported, but the data structures will support multi-leg orders in the future. The single-leg constraint will be repeated in this documentation, but validation rules related to the initial (future) multi-leg support are also documented.

 Upon successful submission, if the request is a duplicate, returns the existing order in its current state in the system. If the request is not a duplicate, returns the summary of the newly submitted order.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="OptionOrderService_CreateOptionOrder" method="post" path="/trading/v1/accounts/{account_id}/optionOrders" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import {
  OptionOrderCreateBrokerCapacity,
  OptionOrderCreateOrderType,
  OptionOrderCreateTimeInForce,
  PriceDirection,
} from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.optionOrders.createOptionOrder({
    brokerCapacity: OptionOrderCreateBrokerCapacity.Agency,
    clientOrderId: "a6d5258b-6b23-478a-8145-98e79d60427a",
    currencyCode: "USD",
    legs: [],
    limitPrice: {},
    orderDate: {},
    orderType: OptionOrderCreateOrderType.Limit,
    priceDirection: PriceDirection.Credit,
    quantity: {},
    timeInForce: OptionOrderCreateTimeInForce.Day,
  }, "01HBRQ5BW6ZAY4BNWP4GWRD80X");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { optionOrdersCreateOptionOrder } from "@apexfintechsolutions/ascend-sdk/funcs/optionOrdersCreateOptionOrder.js";
import {
  OptionOrderCreateBrokerCapacity,
  OptionOrderCreateOrderType,
  OptionOrderCreateTimeInForce,
  PriceDirection,
} from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await optionOrdersCreateOptionOrder(apexascend, {
    brokerCapacity: OptionOrderCreateBrokerCapacity.Agency,
    clientOrderId: "a6d5258b-6b23-478a-8145-98e79d60427a",
    currencyCode: "USD",
    legs: [],
    limitPrice: {},
    orderDate: {},
    orderType: OptionOrderCreateOrderType.Limit,
    priceDirection: PriceDirection.Credit,
    quantity: {},
    timeInForce: OptionOrderCreateTimeInForce.Day,
  }, "01HBRQ5BW6ZAY4BNWP4GWRD80X");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("optionOrdersCreateOptionOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `optionOrderCreate`                                                                                                                                                            | [components.OptionOrderCreate](../../models/components/optionordercreate.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.OptionOrderServiceCreateOptionOrderResponse](../../models/operations/optionorderservicecreateoptionorderresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 409 | application/json   |
| errors.Status      | 500, 503           | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## getOptionOrder

Gets an option order by option order ID.

 Upon successful submission, returns the details of the queried order.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="OptionOrderService_GetOptionOrder" method="get" path="/trading/v1/accounts/{account_id}/optionOrders/{optionOrder_id}" -->
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
  const result = await apexascend.optionOrders.getOptionOrder("01HBRQ5BW6ZAY4BNWP4GWRD80X", "ebb0c9b5-2c74-45c9-a4ab-40596b778706");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { optionOrdersGetOptionOrder } from "@apexfintechsolutions/ascend-sdk/funcs/optionOrdersGetOptionOrder.js";

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
  const res = await optionOrdersGetOptionOrder(apexascend, "01HBRQ5BW6ZAY4BNWP4GWRD80X", "ebb0c9b5-2c74-45c9-a4ab-40596b778706");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("optionOrdersGetOptionOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `optionOrderId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The optionOrder id.                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.OptionOrderServiceGetOptionOrderResponse](../../models/operations/optionorderservicegetoptionorderresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500, 503           | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## cancelOptionOrder

Submits an order cancellation request by option order ID. Confirmation of order cancellation requests are provided through asynchronous events.

 Upon successful submission, returns the details of the order pending cancellation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="OptionOrderService_CancelOptionOrder" method="post" path="/trading/v1/accounts/{account_id}/optionOrders/{optionOrder_id}:cancel" -->
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
  const result = await apexascend.optionOrders.cancelOptionOrder({
    name: "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/optionOrders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
  }, "01HBRQ5BW6ZAY4BNWP4GWRD80X", "ebb0c9b5-2c74-45c9-a4ab-40596b778706");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { optionOrdersCancelOptionOrder } from "@apexfintechsolutions/ascend-sdk/funcs/optionOrdersCancelOptionOrder.js";

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
  const res = await optionOrdersCancelOptionOrder(apexascend, {
    name: "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/optionOrders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
  }, "01HBRQ5BW6ZAY4BNWP4GWRD80X", "ebb0c9b5-2c74-45c9-a4ab-40596b778706");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("optionOrdersCancelOptionOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `optionOrderId`                                                                                                                                                                | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The optionOrder id.                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `cancelOptionOrderRequestCreate`                                                                                                                                               | [components.CancelOptionOrderRequestCreate](../../models/components/canceloptionorderrequestcreate.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.OptionOrderServiceCancelOptionOrderResponse](../../models/operations/optionorderservicecanceloptionorderresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500, 503           | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |