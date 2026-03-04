# AlternativeInvestments
(*alternativeInvestments*)

## Overview

### Available Operations

* [listAlternativeInvestments](#listalternativeinvestments) - List Alternative Investment Assets
* [getAlternativeInvestment](#getalternativeinvestment) - Get Alternative Investment Asset

## listAlternativeInvestments

Retrieves a list of available alternative investment assets and their details.  Replace `{asset_id}` in the endpoint path with a dash to act as a wild card.  Ex:`/trading/v1/assets/-/alternativeInvestments`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AlternativeInvestments_ListAlternativeInvestments" method="get" path="/trading/v1/assets/{asset_id}/alternativeInvestments" -->
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
  const result = await apexascend.alternativeInvestments.listAlternativeInvestments("-");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { alternativeInvestmentsListAlternativeInvestments } from "@apexfintechsolutions/ascend-sdk/funcs/alternativeInvestmentsListAlternativeInvestments.js";

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
  const res = await alternativeInvestmentsListAlternativeInvestments(apexascend, "-");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alternativeInvestmentsListAlternativeInvestments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assetId`                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                    | The asset id.                                                                                                                                                                                                                                                                         | [object Object]                                                                                                                                                                                                                                                                       |
| `pageSize`                                                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | The maximum number of orders to return.  - Max value =100  - Values above 100 will be coerced to 100.  - If the specified value is greater than the number of orders, the service will return fewer than the specified value.  - If unspecified, at most 100 orders will be returned. | [object Object]                                                                                                                                                                                                                                                                       |
| `pageToken`                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | For pagination, provide the page token, received from a previous `ListAlternativeInvestments` call, to retrieve the subsequent page.  All other parameters provided to `ListAlternativeInvestments` must match the request that provided the page token.                              | [object Object]                                                                                                                                                                                                                                                                       |
| `filter`                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | A CEL string to filter results. All fields from the response can be used as filters.<br/><br/> See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) guide for syntax details and examples.                                                 | [object Object]                                                                                                                                                                                                                                                                       |
| `options`                                                                                                                                                                                                                                                                             | RequestOptions                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                        |                                                                                                                                                                                                                                                                                       |
| `options.retries`                                                                                                                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                       |

### Response

**Promise\<[operations.AlternativeInvestmentsListAlternativeInvestmentsResponse](../../models/operations/alternativeinvestmentslistalternativeinvestmentsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 401, 403    | application/json |
| errors.Status    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getAlternativeInvestment

Retrieves the specified alternative investment asset details.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AlternativeInvestments_GetAlternativeInvestment" method="get" path="/trading/v1/assets/{asset_id}/alternativeInvestment" -->
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
  const result = await apexascend.alternativeInvestments.getAlternativeInvestment("123");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { alternativeInvestmentsGetAlternativeInvestment } from "@apexfintechsolutions/ascend-sdk/funcs/alternativeInvestmentsGetAlternativeInvestment.js";

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
  const res = await alternativeInvestmentsGetAlternativeInvestment(apexascend, "123");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alternativeInvestmentsGetAlternativeInvestment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AlternativeInvestmentsGetAlternativeInvestmentResponse](../../models/operations/alternativeinvestmentsgetalternativeinvestmentresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |