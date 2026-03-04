# AlternativeInvestmentDocuments
(*alternativeInvestmentDocuments*)

## Overview

### Available Operations

* [listAlternativeInvestmentDocuments](#listalternativeinvestmentdocuments) - List Alternative Investment Documents
* [getAlternativeInvestmentDocument](#getalternativeinvestmentdocument) - Get Alternative Investment Document
* [downloadAlternativeInvestmentDocument](#downloadalternativeinvestmentdocument) - Download Alternative Investment Documents

## listAlternativeInvestmentDocuments

Retrieves a list of all investment document details for the specified asset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AlternativeInvestmentDocuments_ListAlternativeInvestmentDocuments" method="get" path="/trading/v1/assets/{asset_id}/alternativeInvestmentDocuments" -->
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
  const result = await apexascend.alternativeInvestmentDocuments.listAlternativeInvestmentDocuments("123");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { alternativeInvestmentDocumentsListAlternativeInvestmentDocuments } from "@apexfintechsolutions/ascend-sdk/funcs/alternativeInvestmentDocumentsListAlternativeInvestmentDocuments.js";

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
  const res = await alternativeInvestmentDocumentsListAlternativeInvestmentDocuments(apexascend, "123");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alternativeInvestmentDocumentsListAlternativeInvestmentDocuments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                                           | Example                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assetId`                                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                                    | The asset id.                                                                                                                                                                                                                                                                         | [object Object]                                                                                                                                                                                                                                                                       |
| `pageSize`                                                                                                                                                                                                                                                                            | *number*                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | The maximum number of orders to return. - Max value = 100  - Values above 100 will be coerced to 100.  - If the specified value is greater than the number of orders, the service will return fewer than the specified value.  - If unspecified, at most 100 orders will be returned. | [object Object]                                                                                                                                                                                                                                                                       |
| `pageToken`                                                                                                                                                                                                                                                                           | *string*                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | For pagination, provide the page token, received from a previous `ListInvestmentDocuments` call, to retrieve the subsequent page.  All other parameters provided to `ListInvestmentDocuments` must match the request that provided the page token.                                    | [object Object]                                                                                                                                                                                                                                                                       |
| `filter`                                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | A CEL string to filter results. All fields from the response can be used as filters.<br/><br/> See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) guide for syntax details and examples.                                                 | [object Object]                                                                                                                                                                                                                                                                       |
| `options`                                                                                                                                                                                                                                                                             | RequestOptions                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                 |                                                                                                                                                                                                                                                                                       |
| `options.fetchOptions`                                                                                                                                                                                                                                                                | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                        |                                                                                                                                                                                                                                                                                       |
| `options.retries`                                                                                                                                                                                                                                                                     | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                    | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                       |

### Response

**Promise\<[operations.AlternativeInvestmentDocumentsListAlternativeInvestmentDocumentsResponse](../../models/operations/alternativeinvestmentdocumentslistalternativeinvestmentdocumentsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 401, 403    | application/json |
| errors.Status    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getAlternativeInvestmentDocument

Retrieves a specific investment document for the specified asset.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AlternativeInvestmentDocuments_GetAlternativeInvestmentDocument" method="get" path="/trading/v1/assets/{asset_id}/alternativeInvestmentDocuments/{alternativeInvestmentDocument_id}" -->
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
  const result = await apexascend.alternativeInvestmentDocuments.getAlternativeInvestmentDocument("123", "01H7YH8QKZJ8V4Q2X8F4G6JQ2B");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { alternativeInvestmentDocumentsGetAlternativeInvestmentDocument } from "@apexfintechsolutions/ascend-sdk/funcs/alternativeInvestmentDocumentsGetAlternativeInvestmentDocument.js";

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
  const res = await alternativeInvestmentDocumentsGetAlternativeInvestmentDocument(apexascend, "123", "01H7YH8QKZJ8V4Q2X8F4G6JQ2B");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alternativeInvestmentDocumentsGetAlternativeInvestmentDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `alternativeInvestmentDocumentId`                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The alternativeInvestmentDocument id.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AlternativeInvestmentDocumentsGetAlternativeInvestmentDocumentResponse](../../models/operations/alternativeinvestmentdocumentsgetalternativeinvestmentdocumentresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## downloadAlternativeInvestmentDocument

Returns a URI to download the specified investment document.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AlternativeInvestmentDocuments_DownloadAlternativeInvestmentDocument" method="get" path="/trading/v1/assets/{asset_id}/alternativeInvestmentDocuments/{alternativeInvestmentDocument_id}:download" -->
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
  const result = await apexascend.alternativeInvestmentDocuments.downloadAlternativeInvestmentDocument("123", "01H7YH8QKZJ8V4Q2X8F4G6JQ2B");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { alternativeInvestmentDocumentsDownloadAlternativeInvestmentDocument } from "@apexfintechsolutions/ascend-sdk/funcs/alternativeInvestmentDocumentsDownloadAlternativeInvestmentDocument.js";

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
  const res = await alternativeInvestmentDocumentsDownloadAlternativeInvestmentDocument(apexascend, "123", "01H7YH8QKZJ8V4Q2X8F4G6JQ2B");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alternativeInvestmentDocumentsDownloadAlternativeInvestmentDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `alternativeInvestmentDocumentId`                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The alternativeInvestmentDocument id.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AlternativeInvestmentDocumentsDownloadAlternativeInvestmentDocumentResponse](../../models/operations/alternativeinvestmentdocumentsdownloadalternativeinvestmentdocumentresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |