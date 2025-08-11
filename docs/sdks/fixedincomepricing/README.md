# FixedIncomePricing
(*fixedIncomePricing*)

## Overview

### Available Operations

* [previewOrderCost](#previewordercost) - Preview Order Cost
* [retrieveQuote](#retrievequote) - Retrieve Quote
* [retrieveFixedIncomeMarks](#retrievefixedincomemarks) - Retrieve Fixed Income Marks

## previewOrderCost

Returns a calculation estimating the costs involved in ordering a given quantity of a Fixed Income asset at a specified limit price.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="OrderPriceService_PreviewOrderCost" method="post" path="/trading/v1/accounts/{account_id}/orders:previewOrderCost" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import {
  LimitPriceCreateType,
  OrderCostPreviewRequestCreateAssetType,
  OrderCostPreviewRequestCreateIdentifierType,
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
  const result = await apexascend.fixedIncomePricing.previewOrderCost({
    assetType: OrderCostPreviewRequestCreateAssetType.FixedIncome,
    identifier: "37833100",
    identifierType: OrderCostPreviewRequestCreateIdentifierType.Cusip,
    limitPrice: {
      price: {},
      type: LimitPriceCreateType.PricePerUnit,
    },
    parent: "<value>",
    quantity: {},
  }, "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { fixedIncomePricingPreviewOrderCost } from "@apexfintechsolutions/ascend-sdk/funcs/fixedIncomePricingPreviewOrderCost.js";
import {
  LimitPriceCreateType,
  OrderCostPreviewRequestCreateAssetType,
  OrderCostPreviewRequestCreateIdentifierType,
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
  const res = await fixedIncomePricingPreviewOrderCost(apexascend, {
    assetType: OrderCostPreviewRequestCreateAssetType.FixedIncome,
    identifier: "37833100",
    identifierType: OrderCostPreviewRequestCreateIdentifierType.Cusip,
    limitPrice: {
      price: {},
      type: LimitPriceCreateType.PricePerUnit,
    },
    parent: "<value>",
    quantity: {},
  }, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fixedIncomePricingPreviewOrderCost failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                |
| `orderCostPreviewRequestCreate`                                                                                                                                                | [components.OrderCostPreviewRequestCreate](../../models/components/ordercostpreviewrequestcreate.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OrderPriceServicePreviewOrderCostResponse](../../models/operations/orderpriceservicepreviewordercostresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 401, 403    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## retrieveQuote

Returns quote information containing the best bid/ask for the given Fixed Income asset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="OrderPriceService_RetrieveQuote" method="post" path="/trading/v1/accounts/{account_id}/orders:retrieveAssetQuote" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { RetrieveQuoteRequestCreateAssetType, RetrieveQuoteRequestCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.fixedIncomePricing.retrieveQuote({
    assetType: RetrieveQuoteRequestCreateAssetType.FixedIncome,
    identifier: "37833100",
    identifierType: RetrieveQuoteRequestCreateIdentifierType.Cusip,
    parent: "<value>",
  }, "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { fixedIncomePricingRetrieveQuote } from "@apexfintechsolutions/ascend-sdk/funcs/fixedIncomePricingRetrieveQuote.js";
import { RetrieveQuoteRequestCreateAssetType, RetrieveQuoteRequestCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await fixedIncomePricingRetrieveQuote(apexascend, {
    assetType: RetrieveQuoteRequestCreateAssetType.FixedIncome,
    identifier: "37833100",
    identifierType: RetrieveQuoteRequestCreateIdentifierType.Cusip,
    parent: "<value>",
  }, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fixedIncomePricingRetrieveQuote failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                |
| `retrieveQuoteRequestCreate`                                                                                                                                                   | [components.RetrieveQuoteRequestCreate](../../models/components/retrievequoterequestcreate.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OrderPriceServiceRetrieveQuoteResponse](../../models/operations/orderpriceserviceretrievequoteresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 401, 403    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## retrieveFixedIncomeMarks

Returns marks for a specified set of Fixed Income assets (up to 100 per request)

### Example Usage

<!-- UsageSnippet language="typescript" operationID="OrderPriceService_RetrieveFixedIncomeMarks" method="post" path="/trading/v1/correspondents/{correspondent_id}/prices:retrieveFixedIncomeMarks" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.fixedIncomePricing.retrieveFixedIncomeMarks({
    parent: "<value>",
    securityIdentifiers: [
      {
        identifier: "US0378331005",
        identifierType: RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType.Isin,
      },
      {
        identifier: "38259P508",
        identifierType: RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType.Cusip,
      },
    ],
  }, "<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { fixedIncomePricingRetrieveFixedIncomeMarks } from "@apexfintechsolutions/ascend-sdk/funcs/fixedIncomePricingRetrieveFixedIncomeMarks.js";
import { RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await fixedIncomePricingRetrieveFixedIncomeMarks(apexascend, {
    parent: "<value>",
    securityIdentifiers: [
      {
        identifier: "US0378331005",
        identifierType: RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType.Isin,
      },
      {
        identifier: "38259P508",
        identifierType: RetrieveFixedIncomeMarksRequestSecurityIdentifiersCreateIdentifierType.Cusip,
      },
    ],
  }, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("fixedIncomePricingRetrieveFixedIncomeMarks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `correspondentId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The correspondent id.                                                                                                                                                          |
| `retrieveFixedIncomeMarksRequestCreate`                                                                                                                                        | [components.RetrieveFixedIncomeMarksRequestCreate](../../models/components/retrievefixedincomemarksrequestcreate.md)                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OrderPriceServiceRetrieveFixedIncomeMarksResponse](../../models/operations/orderpriceserviceretrievefixedincomemarksresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 401, 403    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |