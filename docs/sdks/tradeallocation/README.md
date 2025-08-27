# TradeAllocation
(*tradeAllocation*)

## Overview

### Available Operations

* [createTradeAllocation](#createtradeallocation) - Create Trade Allocation
* [getTradeAllocation](#gettradeallocation) - Get Trade Allocation
* [cancelTradeAllocation](#canceltradeallocation) - Cancel Trade Allocation
* [rebookTradeAllocation](#rebooktradeallocation) - Rebook Trade Allocation

## createTradeAllocation

Creates a new trade allocation. These are used to allocate or distribute positions between Apex accounts.

 Upon success, returns the created trade allocation and its enriched details.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_CreateTradeAllocation" method="post" path="/booking/v1/accounts/{account_id}/tradeAllocations" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import {
  ToSide,
  TradeAllocationCreateAssetType,
  TradeAllocationCreateBrokerCapacity,
  TradeAllocationCreateIdentifierType,
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
  const result = await apexascend.tradeAllocation.createTradeAllocation({
    assetType: TradeAllocationCreateAssetType.Equity,
    brokerCapacity: TradeAllocationCreateBrokerCapacity.Agency,
    executionTime: new Date("2024-07-17T12:00:00Z"),
    fromAccountId: "01HASWB2DTMRT3DAM45P56J2H3",
    identifier: "AAPL",
    identifierType: TradeAllocationCreateIdentifierType.Symbol,
    price: {},
    quantity: {},
    sourceApplication: "Trading-App",
    toAccountId: "02HASWB2DTMRT3DAM45P56J2T2",
    toSide: ToSide.Buy,
  }, "01FAKEACCOUNT1TYKWEYRH8S2K");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { tradeAllocationCreateTradeAllocation } from "@apexfintechsolutions/ascend-sdk/funcs/tradeAllocationCreateTradeAllocation.js";
import {
  ToSide,
  TradeAllocationCreateAssetType,
  TradeAllocationCreateBrokerCapacity,
  TradeAllocationCreateIdentifierType,
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
  const res = await tradeAllocationCreateTradeAllocation(apexascend, {
    assetType: TradeAllocationCreateAssetType.Equity,
    brokerCapacity: TradeAllocationCreateBrokerCapacity.Agency,
    executionTime: new Date("2024-07-17T12:00:00Z"),
    fromAccountId: "01HASWB2DTMRT3DAM45P56J2H3",
    identifier: "AAPL",
    identifierType: TradeAllocationCreateIdentifierType.Symbol,
    price: {},
    quantity: {},
    sourceApplication: "Trading-App",
    toAccountId: "02HASWB2DTMRT3DAM45P56J2T2",
    toSide: ToSide.Buy,
  }, "01FAKEACCOUNT1TYKWEYRH8S2K");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeAllocationCreateTradeAllocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeAllocationCreate`                                                                                                                                                        | [components.TradeAllocationCreate](../../models/components/tradeallocationcreate.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `requestId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A globally unique UUID that is specific to the request. This id is used to prevent duplicate requests from being processed.                                                    | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingCreateTradeAllocationResponse](../../models/operations/bookingcreatetradeallocationresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 403, 404, 409 | application/json   |
| errors.Status      | 500, 503, 504      | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## getTradeAllocation

Retrieves a trade allocation and its details.

 Upon successful submission, returns the trade allocation details.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_GetTradeAllocation" method="get" path="/booking/v1/accounts/{account_id}/tradeAllocations/{tradeAllocation_id}" -->
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
  const result = await apexascend.tradeAllocation.getTradeAllocation("02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { tradeAllocationGetTradeAllocation } from "@apexfintechsolutions/ascend-sdk/funcs/tradeAllocationGetTradeAllocation.js";

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
  const res = await tradeAllocationGetTradeAllocation(apexascend, "02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeAllocationGetTradeAllocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeAllocationId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The tradeAllocation id.                                                                                                                                                        | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingGetTradeAllocationResponse](../../models/operations/bookinggettradeallocationresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503, 504    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cancelTradeAllocation

Cancel a trade allocation using the original trade_allocation_id.

 Upon successful submission, returns an empty response. CancelTradeAllocation will either cancel everything, or nothing at all if a failure occurs.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_CancelTradeAllocation" method="post" path="/booking/v1/accounts/{account_id}/tradeAllocations/{tradeAllocation_id}:cancel" -->
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
  const result = await apexascend.tradeAllocation.cancelTradeAllocation({
    name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/tradeAllocations/01J0XX2KDN3M9QKFKRE2HYSCQM",
  }, "02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { tradeAllocationCancelTradeAllocation } from "@apexfintechsolutions/ascend-sdk/funcs/tradeAllocationCancelTradeAllocation.js";

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
  const res = await tradeAllocationCancelTradeAllocation(apexascend, {
    name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/tradeAllocations/01J0XX2KDN3M9QKFKRE2HYSCQM",
  }, "02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeAllocationCancelTradeAllocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeAllocationId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The tradeAllocation id.                                                                                                                                                        | [object Object]                                                                                                                                                                |
| `cancelTradeAllocationRequestCreate`                                                                                                                                           | [components.CancelTradeAllocationRequestCreate](../../models/components/canceltradeallocationrequestcreate.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingCancelTradeAllocationResponse](../../models/operations/bookingcanceltradeallocationresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503, 504    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## rebookTradeAllocation

Rebook a trade allocation by the original trade_allocation_id. The allocation is rebooked by canceling the original allocation and creating a new one with the provided details.

 Upon successful submission, returns both the original and new allocation, as separate resources.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_RebookTradeAllocation" method="post" path="/booking/v1/accounts/{account_id}/tradeAllocations/{tradeAllocation_id}:rebook" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import {
  ToSide,
  TradeAllocationCreateAssetType,
  TradeAllocationCreateBrokerCapacity,
  TradeAllocationCreateIdentifierType,
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
  const result = await apexascend.tradeAllocation.rebookTradeAllocation({
    name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/tradeAllocations/01J0XX2KDN3M9QKFKRE2HYSCQM",
    requestId: "8a0d35c0-428c-439e-9b03-b611530fe06f",
    tradeAllocation: {
      assetType: TradeAllocationCreateAssetType.Equity,
      brokerCapacity: TradeAllocationCreateBrokerCapacity.Agency,
      executionTime: new Date("2024-07-17T12:00:00Z"),
      fromAccountId: "01HASWB2DTMRT3DAM45P56J2H3",
      identifier: "AAPL",
      identifierType: TradeAllocationCreateIdentifierType.Symbol,
      price: {},
      quantity: {},
      sourceApplication: "Trading-App",
      toAccountId: "02HASWB2DTMRT3DAM45P56J2T2",
      toSide: ToSide.Buy,
    },
  }, "02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { tradeAllocationRebookTradeAllocation } from "@apexfintechsolutions/ascend-sdk/funcs/tradeAllocationRebookTradeAllocation.js";
import {
  ToSide,
  TradeAllocationCreateAssetType,
  TradeAllocationCreateBrokerCapacity,
  TradeAllocationCreateIdentifierType,
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
  const res = await tradeAllocationRebookTradeAllocation(apexascend, {
    name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/tradeAllocations/01J0XX2KDN3M9QKFKRE2HYSCQM",
    requestId: "8a0d35c0-428c-439e-9b03-b611530fe06f",
    tradeAllocation: {
      assetType: TradeAllocationCreateAssetType.Equity,
      brokerCapacity: TradeAllocationCreateBrokerCapacity.Agency,
      executionTime: new Date("2024-07-17T12:00:00Z"),
      fromAccountId: "01HASWB2DTMRT3DAM45P56J2H3",
      identifier: "AAPL",
      identifierType: TradeAllocationCreateIdentifierType.Symbol,
      price: {},
      quantity: {},
      sourceApplication: "Trading-App",
      toAccountId: "02HASWB2DTMRT3DAM45P56J2T2",
      toSide: ToSide.Buy,
    },
  }, "02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeAllocationRebookTradeAllocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeAllocationId`                                                                                                                                                            | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The tradeAllocation id.                                                                                                                                                        | [object Object]                                                                                                                                                                |
| `rebookTradeAllocationRequestCreate`                                                                                                                                           | [components.RebookTradeAllocationRequestCreate](../../models/components/rebooktradeallocationrequestcreate.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingRebookTradeAllocationResponse](../../models/operations/bookingrebooktradeallocationresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503, 504    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |