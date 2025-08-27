# TradeBooking
(*tradeBooking*)

## Overview

### Available Operations

* [createTrade](#createtrade) - Create Trade
* [getTrade](#gettrade) - Get Trade
* [completeTrade](#completetrade) - Complete Trade
* [cancelTrade](#canceltrade) - Cancel Trade
* [rebookTrade](#rebooktrade) - Rebook Trade
* [createExecution](#createexecution) - Create Execution
* [getExecution](#getexecution) - Get Execution
* [cancelExecution](#cancelexecution) - Cancel Execution
* [rebookExecution](#rebookexecution) - Rebook Execution

## createTrade

Creates a trade with one or more executions. Combination of (account_id, client_order_id, and the process_date (determined by Booking service)) determines the uniqueness of the trade.

 Upon successful submission, returns the created trade and its details including Booking service enriched details.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_CreateTrade" method="post" path="/booking/v1/accounts/{account_id}/trades" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import {
  RouteType,
  TradeCreateAssetType,
  TradeCreateBrokerCapacity,
  TradeCreateIdentifierType,
  TradeCreateSide,
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
  const result = await apexascend.tradeBooking.createTrade({
    accountId: "02HASWB2DTMRT3DAM45P56J2T2",
    assetType: TradeCreateAssetType.Equity,
    brokerCapacity: TradeCreateBrokerCapacity.Agency,
    clientOrderId: "00be5285-0623-4560-8c58-f05af2c56ba0",
    executions: [
      {
        executionTime: new Date("2024-07-17T12:00:00Z"),
        externalId: "0H06HAP3A3Y",
        price: {},
        quantity: {},
      },
    ],
    identifier: "AAPL",
    identifierType: TradeCreateIdentifierType.Symbol,
    routeType: RouteType.Mngd,
    side: TradeCreateSide.Buy,
    sourceApplication: "Trading-App",
  }, "01FAKEACCOUNT1TYKWEYRH8S2K");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { tradeBookingCreateTrade } from "@apexfintechsolutions/ascend-sdk/funcs/tradeBookingCreateTrade.js";
import {
  RouteType,
  TradeCreateAssetType,
  TradeCreateBrokerCapacity,
  TradeCreateIdentifierType,
  TradeCreateSide,
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
  const res = await tradeBookingCreateTrade(apexascend, {
    accountId: "02HASWB2DTMRT3DAM45P56J2T2",
    assetType: TradeCreateAssetType.Equity,
    brokerCapacity: TradeCreateBrokerCapacity.Agency,
    clientOrderId: "00be5285-0623-4560-8c58-f05af2c56ba0",
    executions: [
      {
        executionTime: new Date("2024-07-17T12:00:00Z"),
        externalId: "0H06HAP3A3Y",
        price: {},
        quantity: {},
      },
    ],
    identifier: "AAPL",
    identifierType: TradeCreateIdentifierType.Symbol,
    routeType: RouteType.Mngd,
    side: TradeCreateSide.Buy,
    sourceApplication: "Trading-App",
  }, "01FAKEACCOUNT1TYKWEYRH8S2K");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeBookingCreateTrade failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeCreate`                                                                                                                                                                  | [components.TradeCreate](../../models/components/tradecreate.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingCreateTradeResponse](../../models/operations/bookingcreatetraderesponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 409    | application/json |
| errors.Status    | 500, 503, 504    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getTrade

Gets a trade and all executions by trade_id.

 Upon successful submission, returns the trade details and all the execution by trade_id.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_GetTrade" method="get" path="/booking/v1/accounts/{account_id}/trades/{trade_id}" -->
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
  const result = await apexascend.tradeBooking.getTrade("01FAKEACCOUNT1TYKWEYRH8S2K", "01FAKETRADEIDPROVIDEDFROMCREATETRADE");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { tradeBookingGetTrade } from "@apexfintechsolutions/ascend-sdk/funcs/tradeBookingGetTrade.js";

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
  const res = await tradeBookingGetTrade(apexascend, "01FAKEACCOUNT1TYKWEYRH8S2K", "01FAKETRADEIDPROVIDEDFROMCREATETRADE");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeBookingGetTrade failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The trade id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingGetTradeResponse](../../models/operations/bookinggettraderesponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503, 504    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## completeTrade

Complete a Trade by closing and generating any fees and withholdings if necessary. Once this endpoint returns an OK, the combination of details that generated the Trade (account_id, client_order_id, and the process_date) cannot be reused.

 Upon successful submission, returns completed trade details and all the executions. Trades that are left open will be automatically closed nightly before Ledger's EOD.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_CompleteTrade" method="post" path="/booking/v1/accounts/{account_id}/trades/{trade_id}:complete" -->
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
  const result = await apexascend.tradeBooking.completeTrade({
    name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM",
  }, "02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { tradeBookingCompleteTrade } from "@apexfintechsolutions/ascend-sdk/funcs/tradeBookingCompleteTrade.js";

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
  const res = await tradeBookingCompleteTrade(apexascend, {
    name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM",
  }, "02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeBookingCompleteTrade failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The trade id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `completeTradeRequestCreate`                                                                                                                                                   | [components.CompleteTradeRequestCreate](../../models/components/completetraderequestcreate.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingCompleteTradeResponse](../../models/operations/bookingcompletetraderesponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503, 504    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cancelTrade

Cancel a trade and all the executions using the original trade_id. CancelTrade will either cancel everything, or nothing at all if a failure occurs.

 Upon successful submission, returns an empty response.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_CancelTrade" method="post" path="/booking/v1/accounts/{account_id}/trades/{trade_id}:cancel" -->
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
  const result = await apexascend.tradeBooking.cancelTrade({
    name: "accounts/01FAKEACCOUNT1TYKWEYRH8S2K/trades/01FAKETRADEIDPROVIDEDFROMCREATETRADE",
  }, "01FAKEACCOUNT1TYKWEYRH8S2K", "01FAKETRADEIDPROVIDEDFROMCREATETRADE");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { tradeBookingCancelTrade } from "@apexfintechsolutions/ascend-sdk/funcs/tradeBookingCancelTrade.js";

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
  const res = await tradeBookingCancelTrade(apexascend, {
    name: "accounts/01FAKEACCOUNT1TYKWEYRH8S2K/trades/01FAKETRADEIDPROVIDEDFROMCREATETRADE",
  }, "01FAKEACCOUNT1TYKWEYRH8S2K", "01FAKETRADEIDPROVIDEDFROMCREATETRADE");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeBookingCancelTrade failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The trade id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `cancelTradeRequestCreate`                                                                                                                                                     | [components.CancelTradeRequestCreate](../../models/components/canceltraderequestcreate.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingCancelTradeResponse](../../models/operations/bookingcanceltraderesponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503, 504    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## rebookTrade

Rebook a trade by the original trade_id. The entire original trade's executions are rebooked using the executions provided in the request. If applicable, fees and backup withholdings will be re-calculated.

 Upon successful submission, returns the rebooked trade details and all the executions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_RebookTrade" method="post" path="/booking/v1/accounts/{account_id}/trades/{trade_id}:rebook" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import {
  RouteType,
  TradeCreateAssetType,
  TradeCreateBrokerCapacity,
  TradeCreateIdentifierType,
  TradeCreateSide,
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
  const result = await apexascend.tradeBooking.rebookTrade({
    name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM",
    trade: {
      accountId: "02HASWB2DTMRT3DAM45P56J2T2",
      assetType: TradeCreateAssetType.Equity,
      brokerCapacity: TradeCreateBrokerCapacity.Agency,
      clientOrderId: "00be5285-0623-4560-8c58-f05af2c56ba0",
      executions: [],
      identifier: "AAPL",
      identifierType: TradeCreateIdentifierType.Symbol,
      routeType: RouteType.Mngd,
      side: TradeCreateSide.Buy,
      sourceApplication: "Trading-App",
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
import { tradeBookingRebookTrade } from "@apexfintechsolutions/ascend-sdk/funcs/tradeBookingRebookTrade.js";
import {
  RouteType,
  TradeCreateAssetType,
  TradeCreateBrokerCapacity,
  TradeCreateIdentifierType,
  TradeCreateSide,
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
  const res = await tradeBookingRebookTrade(apexascend, {
    name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM",
    trade: {
      accountId: "02HASWB2DTMRT3DAM45P56J2T2",
      assetType: TradeCreateAssetType.Equity,
      brokerCapacity: TradeCreateBrokerCapacity.Agency,
      clientOrderId: "00be5285-0623-4560-8c58-f05af2c56ba0",
      executions: [],
      identifier: "AAPL",
      identifierType: TradeCreateIdentifierType.Symbol,
      routeType: RouteType.Mngd,
      side: TradeCreateSide.Buy,
      sourceApplication: "Trading-App",
    },
  }, "02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeBookingRebookTrade failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The trade id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `rebookTradeRequestCreate`                                                                                                                                                     | [components.RebookTradeRequestCreate](../../models/components/rebooktraderequestcreate.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingRebookTradeResponse](../../models/operations/bookingrebooktraderesponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503, 504    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createExecution

Create a new execution under an existing trade that is open.

 Upon successful submission, returns the created execution and its details.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_CreateExecution" method="post" path="/booking/v1/accounts/{account_id}/trades/{trade_id}/executions" -->
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
  const result = await apexascend.tradeBooking.createExecution({
    executionTime: new Date("2024-07-17T12:00:00Z"),
    externalId: "0H06HAP3A3Y",
    price: {},
    quantity: {},
  }, "01FAKEACCOUNT1TYKWEYRH8S2K", "01FAKETRADEIDPROVIDEDFROMCREATETRADE");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { tradeBookingCreateExecution } from "@apexfintechsolutions/ascend-sdk/funcs/tradeBookingCreateExecution.js";

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
  const res = await tradeBookingCreateExecution(apexascend, {
    executionTime: new Date("2024-07-17T12:00:00Z"),
    externalId: "0H06HAP3A3Y",
    price: {},
    quantity: {},
  }, "01FAKEACCOUNT1TYKWEYRH8S2K", "01FAKETRADEIDPROVIDEDFROMCREATETRADE");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeBookingCreateExecution failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The trade id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `executionCreate`                                                                                                                                                              | [components.ExecutionCreate](../../models/components/executioncreate.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingCreateExecutionResponse](../../models/operations/bookingcreateexecutionresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403         | application/json |
| errors.Status    | 500, 503, 504    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getExecution

Gets an execution by execution_id.

 Upon successful submission, returns the execution details by execution_id.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_GetExecution" method="get" path="/booking/v1/accounts/{account_id}/trades/{trade_id}/executions/{execution_id}" -->
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
  const result = await apexascend.tradeBooking.getExecution("01FAKEACCOUNT1TYKWEYRH8S2K", "01FAKETRADEIDPROVIDEDFROMCREATETRADE", "01FAKEEXECUTONIDPROVIDEDFROMBOOKINGAPI");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { tradeBookingGetExecution } from "@apexfintechsolutions/ascend-sdk/funcs/tradeBookingGetExecution.js";

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
  const res = await tradeBookingGetExecution(apexascend, "01FAKEACCOUNT1TYKWEYRH8S2K", "01FAKETRADEIDPROVIDEDFROMCREATETRADE", "01FAKEEXECUTONIDPROVIDEDFROMBOOKINGAPI");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeBookingGetExecution failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The trade id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `executionId`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The execution id.                                                                                                                                                              | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingGetExecutionResponse](../../models/operations/bookinggetexecutionresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503, 504    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cancelExecution

Cancel an execution using the original execution_id. If applicable, fees and backup withholdings will be re-calculated.

 Upon successful submission, returns the execution that was canceled.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_CancelExecution" method="post" path="/booking/v1/accounts/{account_id}/trades/{trade_id}/executions/{execution_id}:cancel" -->
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
  const result = await apexascend.tradeBooking.cancelExecution({
    name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM/executions/02G0XX2KDN3M9QKFKRE2HYSCMY",
  }, "02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM", "02G0XX2KDN3M9QKFKRE2HYSCMY");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { tradeBookingCancelExecution } from "@apexfintechsolutions/ascend-sdk/funcs/tradeBookingCancelExecution.js";

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
  const res = await tradeBookingCancelExecution(apexascend, {
    name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM/executions/02G0XX2KDN3M9QKFKRE2HYSCMY",
  }, "02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM", "02G0XX2KDN3M9QKFKRE2HYSCMY");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeBookingCancelExecution failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The trade id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `executionId`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The execution id.                                                                                                                                                              | [object Object]                                                                                                                                                                |
| `cancelExecutionRequestCreate`                                                                                                                                                 | [components.CancelExecutionRequestCreate](../../models/components/cancelexecutionrequestcreate.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingCancelExecutionResponse](../../models/operations/bookingcancelexecutionresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503, 504    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## rebookExecution

Rebook an execution by the original execution_id. If applicable, fees and backup withholdings will be re-calculated.

 Upon successful submission, returns the rebooked execution details.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Booking_RebookExecution" method="post" path="/booking/v1/accounts/{account_id}/trades/{trade_id}/executions/{execution_id}:rebook" -->
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
  const result = await apexascend.tradeBooking.rebookExecution({
    execution: {
      executionTime: new Date("2024-07-17T12:00:00Z"),
      externalId: "0H06HAP3A3Y",
      price: {},
      quantity: {},
    },
    name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM/executions/02G0XX2KDN3M9QKFKRE2HYSCMY",
  }, "02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM", "02G0XX2KDN3M9QKFKRE2HYSCMY");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { tradeBookingRebookExecution } from "@apexfintechsolutions/ascend-sdk/funcs/tradeBookingRebookExecution.js";

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
  const res = await tradeBookingRebookExecution(apexascend, {
    execution: {
      executionTime: new Date("2024-07-17T12:00:00Z"),
      externalId: "0H06HAP3A3Y",
      price: {},
      quantity: {},
    },
    name: "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM/executions/02G0XX2KDN3M9QKFKRE2HYSCMY",
  }, "02HASWB2DTMRT3DAM45P56J2T2", "01J0XX2KDN3M9QKFKRE2HYSCQM", "02G0XX2KDN3M9QKFKRE2HYSCMY");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tradeBookingRebookExecution failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `tradeId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The trade id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `executionId`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The execution id.                                                                                                                                                              | [object Object]                                                                                                                                                                |
| `rebookExecutionRequestCreate`                                                                                                                                                 | [components.RebookExecutionRequestCreate](../../models/components/rebookexecutionrequestcreate.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BookingRebookExecutionResponse](../../models/operations/bookingrebookexecutionresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503, 504    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |