# BasketOrders
(*basketOrders*)

## Overview

### Available Operations

* [createBasket](#createbasket) - Create Basket
* [addOrders](#addorders) - Add Orders
* [getBasket](#getbasket) - Get Basket
* [submitBasket](#submitbasket) - Submit Basket
* [listBasketOrders](#listbasketorders) - List Basket Orders
* [listCompressedOrders](#listcompressedorders) - List Compressed Orders

## createBasket

Creates an empty basket

 Upon successful submission, if the request is a duplicate, returns the existing basket in its current state in the system. If the request is not a duplicate, returns the summary of the newly created basket.

### Example Usage

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
  const result = await apexascend.basketOrders.createBasket({
    clientBasketId: "39347a0d-860b-48e8-a04d-511133f057e3",
    correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
  }, "01HPMZZM6RKMVZA1JQ63RQKJRP");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { basketOrdersCreateBasket } from "@apexfintechsolutions/ascend-sdk/funcs/basketOrdersCreateBasket.js";

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
  const res = await basketOrdersCreateBasket(apexascend, {
    clientBasketId: "39347a0d-860b-48e8-a04d-511133f057e3",
    correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
  }, "01HPMZZM6RKMVZA1JQ63RQKJRP");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `correspondentId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The correspondent id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `basketCreate`                                                                                                                                                                 | [components.BasketCreate](../../models/components/basketcreate.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BasketOrdersServiceCreateBasketResponse](../../models/operations/basketordersservicecreatebasketresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.Status                | 400, 401, 403, 409, 500, 503 | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## addOrders

Adds a list of basket orders to a basket

 Upon successful submission, returns the basket with a new total count of orders within the basket

### Example Usage

```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import {
  BasketOrderCreateAssetType,
  BasketOrderCreateIdentifierType,
  BasketOrderCreateOrderType,
  BasketOrderCreateSide,
  BasketOrderCreateTimeInForce,
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
  const result = await apexascend.basketOrders.addOrders({
    basketOrders: [
      {
        accountId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
        assetType: BasketOrderCreateAssetType.Equity,
        clientOrderId: "a6d5258b-6b23-478a-8145-98e79d60427a",
        identifier: "SBUX",
        identifierType: BasketOrderCreateIdentifierType.Symbol,
        orderType: BasketOrderCreateOrderType.Market,
        side: BasketOrderCreateSide.Buy,
        timeInForce: BasketOrderCreateTimeInForce.Day,
      },
      {
        accountId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
        assetType: BasketOrderCreateAssetType.Equity,
        clientOrderId: "a6d5258b-6b23-478a-8145-98e79d60427a",
        identifier: "SBUX",
        identifierType: BasketOrderCreateIdentifierType.Symbol,
        orderType: BasketOrderCreateOrderType.Market,
        side: BasketOrderCreateSide.Buy,
        timeInForce: BasketOrderCreateTimeInForce.Day,
      },
    ],
    name: "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521",
  }, "01HPMZZM6RKMVZA1JQ63RQKJRP", "fffd326-72fa-4d2b-bd1f-45384fe5d521");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { basketOrdersAddOrders } from "@apexfintechsolutions/ascend-sdk/funcs/basketOrdersAddOrders.js";
import {
  BasketOrderCreateAssetType,
  BasketOrderCreateIdentifierType,
  BasketOrderCreateOrderType,
  BasketOrderCreateSide,
  BasketOrderCreateTimeInForce,
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
  const res = await basketOrdersAddOrders(apexascend, {
    basketOrders: [
      {
        accountId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
        assetType: BasketOrderCreateAssetType.Equity,
        clientOrderId: "a6d5258b-6b23-478a-8145-98e79d60427a",
        identifier: "SBUX",
        identifierType: BasketOrderCreateIdentifierType.Symbol,
        orderType: BasketOrderCreateOrderType.Market,
        side: BasketOrderCreateSide.Buy,
        timeInForce: BasketOrderCreateTimeInForce.Day,
      },
      {
        accountId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
        assetType: BasketOrderCreateAssetType.Equity,
        clientOrderId: "a6d5258b-6b23-478a-8145-98e79d60427a",
        identifier: "SBUX",
        identifierType: BasketOrderCreateIdentifierType.Symbol,
        orderType: BasketOrderCreateOrderType.Market,
        side: BasketOrderCreateSide.Buy,
        timeInForce: BasketOrderCreateTimeInForce.Day,
      },
    ],
    name: "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521",
  }, "01HPMZZM6RKMVZA1JQ63RQKJRP", "fffd326-72fa-4d2b-bd1f-45384fe5d521");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `correspondentId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The correspondent id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `basketId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The basket id.                                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `addOrdersRequestCreate`                                                                                                                                                       | [components.AddOrdersRequestCreate](../../models/components/addordersrequestcreate.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BasketOrdersServiceAddOrdersResponse](../../models/operations/basketordersserviceaddordersresponse.md)\>**

### Errors

| Error Type                        | Status Code                       | Content Type                      |
| --------------------------------- | --------------------------------- | --------------------------------- |
| errors.Status                     | 400, 401, 403, 404, 409, 500, 503 | application/json                  |
| errors.SDKError                   | 4XX, 5XX                          | \*/\*                             |

## getBasket

Gets a basket by basket ID.

 Upon successful submission, returns the details of the queried basket

### Example Usage

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
  const result = await apexascend.basketOrders.getBasket("01HPMZZM6RKMVZA1JQ63RQKJRP", "fffd326-72fa-4d2b-bd1f-45384fe5d521");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { basketOrdersGetBasket } from "@apexfintechsolutions/ascend-sdk/funcs/basketOrdersGetBasket.js";

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
  const res = await basketOrdersGetBasket(apexascend, "01HPMZZM6RKMVZA1JQ63RQKJRP", "fffd326-72fa-4d2b-bd1f-45384fe5d521");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `correspondentId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The correspondent id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `basketId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The basket id.                                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BasketOrdersServiceGetBasketResponse](../../models/operations/basketordersservicegetbasketresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.Status                | 400, 401, 403, 404, 500, 503 | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## submitBasket

Submits a basket for execution in the market

 Upon successful submission, if the request is a duplicate, returns the existing basket in its current state in the system. If the request is not a duplicate, returns the summary of the newly submitted basket in a SUBMITTED state

### Example Usage

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
  const result = await apexascend.basketOrders.submitBasket({
    name: "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521",
  }, "01HPMZZM6RKMVZA1JQ63RQKJRP", "fffd326-72fa-4d2b-bd1f-45384fe5d521");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { basketOrdersSubmitBasket } from "@apexfintechsolutions/ascend-sdk/funcs/basketOrdersSubmitBasket.js";

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
  const res = await basketOrdersSubmitBasket(apexascend, {
    name: "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521",
  }, "01HPMZZM6RKMVZA1JQ63RQKJRP", "fffd326-72fa-4d2b-bd1f-45384fe5d521");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `correspondentId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The correspondent id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `basketId`                                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The basket id.                                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `submitBasketRequestCreate`                                                                                                                                                    | [components.SubmitBasketRequestCreate](../../models/components/submitbasketrequestcreate.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BasketOrdersServiceSubmitBasketResponse](../../models/operations/basketordersservicesubmitbasketresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.Status                | 400, 401, 403, 404, 500, 503 | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## listBasketOrders

Gets a list of basket orders within a basket.

 Upon successful submission, returns a list of basket orders for the basket. If the list of basket orders becomes too large, a token is returned to retrieve the next page of basket orders.

### Example Usage

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
  const result = await apexascend.basketOrders.listBasketOrders("01HPMZZM6RKMVZA1JQ63RQKJRP", "fffd326-72fa-4d2b-bd1f-45384fe5d521");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { basketOrdersListBasketOrders } from "@apexfintechsolutions/ascend-sdk/funcs/basketOrdersListBasketOrders.js";

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
  const res = await basketOrdersListBasketOrders(apexascend, "01HPMZZM6RKMVZA1JQ63RQKJRP", "fffd326-72fa-4d2b-bd1f-45384fe5d521");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `correspondentId`                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                   | The correspondent id.                                                                                                                                                                                                                | [object Object]                                                                                                                                                                                                                      |
| `basketId`                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                   | The basket id.                                                                                                                                                                                                                       | [object Object]                                                                                                                                                                                                                      |
| `pageSize`                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                   | The maximum number of basket orders to return. The service may return fewer than this value. If unspecified, at most 1000 basket orders will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.      | [object Object]                                                                                                                                                                                                                      |
| `pageToken`                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                   | A page token, received from a previous `ListBasketOrders` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBasketOrders` must match the call that provided the page token. | [object Object]                                                                                                                                                                                                                      |
| `options`                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                |                                                                                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                       |                                                                                                                                                                                                                                      |
| `options.retries`                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                     |                                                                                                                                                                                                                                      |

### Response

**Promise\<[operations.BasketOrdersServiceListBasketOrdersResponse](../../models/operations/basketordersservicelistbasketordersresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.Status                | 400, 401, 403, 404, 500, 503 | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## listCompressedOrders

Gets a list of compressed orders within a basket.

 Upon successful submission, returns a list of compressed orders for the basket. If the basket has not been submitted yet, this list will be empty. If the list of compressed orders becomes too large, a token is returned to retrieve the next page of compressed orders.

### Example Usage

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
  const result = await apexascend.basketOrders.listCompressedOrders("01HPMZZM6RKMVZA1JQ63RQKJRP", "fffd326-72fa-4d2b-bd1f-45384fe5d521");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { basketOrdersListCompressedOrders } from "@apexfintechsolutions/ascend-sdk/funcs/basketOrdersListCompressedOrders.js";

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
  const res = await basketOrdersListCompressedOrders(apexascend, "01HPMZZM6RKMVZA1JQ63RQKJRP", "fffd326-72fa-4d2b-bd1f-45384fe5d521");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `correspondentId`                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                           | The correspondent id.                                                                                                                                                                                                                        | [object Object]                                                                                                                                                                                                                              |
| `basketId`                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                           | The basket id.                                                                                                                                                                                                                               | [object Object]                                                                                                                                                                                                                              |
| `pageSize`                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The maximum number of compressed orders to return. The service may return fewer than this value. If unspecified, at most 1000 compressed orders will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.      | [object Object]                                                                                                                                                                                                                              |
| `pageToken`                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | A page token, received from a previous `ListCompressedOrders` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompressedOrders` must match the call that provided the page token. | [object Object]                                                                                                                                                                                                                              |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |                                                                                                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |                                                                                                                                                                                                                                              |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |                                                                                                                                                                                                                                              |

### Response

**Promise\<[operations.BasketOrdersServiceListCompressedOrdersResponse](../../models/operations/basketordersservicelistcompressedordersresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.Status                | 400, 401, 403, 404, 500, 503 | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |