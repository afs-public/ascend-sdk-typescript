# Investigations
(*investigations*)

## Overview

### Available Operations

* [getInvestigation](#getinvestigation) - Get Investigations
* [updateInvestigation](#updateinvestigation) - Update Investigation 
* [listInvestigations](#listinvestigations) - List Investigations
* [linkDocuments](#linkdocuments) - Link Documents
* [getWatchlistItem](#getwatchlistitem) - Get Watchlist Item
* [getCustomerIdentification](#getcustomeridentification) - Get Identity Verification

## getInvestigation

Use this endpoint to get the current state of an investigation by request reference UUID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="InvestigationService_GetInvestigation" method="get" path="/investigations/v1/investigations/{investigation_id}" -->
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
  const result = await apexascend.investigations.getInvestigation("01HEWVF4ZSNKYRP293J53ASJCJ");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { investigationsGetInvestigation } from "@apexfintechsolutions/ascend-sdk/funcs/investigationsGetInvestigation.js";

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
  const res = await investigationsGetInvestigation(apexascend, "01HEWVF4ZSNKYRP293J53ASJCJ");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("investigationsGetInvestigation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `investigationId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The investigation id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.InvestigationServiceGetInvestigationResponse](../../models/operations/investigationservicegetinvestigationresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateInvestigation

Use this endpoint to update the details of an investigation by request reference UUID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="InvestigationService_UpdateInvestigation" method="patch" path="/investigations/v1/investigations/{investigation_id}" -->
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
  const result = await apexascend.investigations.updateInvestigation({}, "01HEWVF4ZSNKYRP293J53ASJCJ");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { investigationsUpdateInvestigation } from "@apexfintechsolutions/ascend-sdk/funcs/investigationsUpdateInvestigation.js";

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
  const res = await investigationsUpdateInvestigation(apexascend, {}, "01HEWVF4ZSNKYRP293J53ASJCJ");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("investigationsUpdateInvestigation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `investigationId`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                | The investigation id.                                                                                                                                                                                                             | [object Object]                                                                                                                                                                                                                   |
| `investigationUpdate`                                                                                                                                                                                                             | [components.InvestigationUpdate](../../models/components/investigationupdate.md)                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                                                                                | N/A                                                                                                                                                                                                                               |                                                                                                                                                                                                                                   |
| `updateMask`                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                | The list of fields to update. Updatable Fields:<br/>  - identity_verification<br/>  - investigation_request_state<br/>  - watchlist_matches<br/>   - watchlist_id<br/>   - watchlist_item_id<br/>   - match_state<br/>   - exclude_from_screening<br/>  - comment | [object Object]                                                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                         | RequestOptions                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                                                                             |                                                                                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                    |                                                                                                                                                                                                                                   |
| `options.retries`                                                                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                  |                                                                                                                                                                                                                                   |

### Response

**Promise\<[operations.InvestigationServiceUpdateInvestigationResponse](../../models/operations/investigationserviceupdateinvestigationresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listInvestigations

Use this endpoint to retrieve a list of investigation summaries based on optional search parameters

### Example Usage

<!-- UsageSnippet language="typescript" operationID="InvestigationService_ListInvestigations" method="get" path="/investigations/v1/investigations" -->
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
  const result = await apexascend.investigations.listInvestigations();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { investigationsListInvestigations } from "@apexfintechsolutions/ascend-sdk/funcs/investigationsListInvestigations.js";

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
  const res = await investigationsListInvestigations(apexascend);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("investigationsListInvestigations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                                                                                                                                                                                                                                                                                                                  | *number*                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | The maximum number of records to return. Default is 50 The maximum is 200, values exceeding this will be set to 200                                                                                                                                                                                                                                                                         | [object Object]                                                                                                                                                                                                                                                                                                                                                                             |
| `pageToken`                                                                                                                                                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | The page token used to request a specific page of the search results                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                             |
| `filter`                                                                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:<br/> ListInvestigationStatesResponse.investigation_states                                                                                                                                      | [object Object]                                                                                                                                                                                                                                                                                                                                                                             |
| `orderBy`                                                                                                                                                                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | The order in which investigations are listed. Only one field and direction can be specified. Supported fields (followed by 'asc' or 'desc'; 'asc' is default if left blank):<br/>  - investigation_request_state<br/>  - correspondent_id<br/>  - scope<br/>  - identity_verification<br/>  - watchlist_screen<br/>  - person.given_name<br/>  - person.family_name<br/>  - entity.legal_name<br/>  - created_at<br/>  - updated_at | [object Object]                                                                                                                                                                                                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                                                                                                                                                                                   | RequestOptions                                                                                                                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                                                                                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                                             |
| `options.retries`                                                                                                                                                                                                                                                                                                                                                                           | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                          | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                                                                                                                            |                                                                                                                                                                                                                                                                                                                                                                                             |

### Response

**Promise\<[operations.InvestigationServiceListInvestigationsResponse](../../models/operations/investigationservicelistinvestigationsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## linkDocuments

Use this endpoint to update identity verification document IDs.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="InvestigationService_LinkDocuments" method="post" path="/investigations/v1/investigations/{investigation_id}:linkDocuments" -->
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
  const result = await apexascend.investigations.linkDocuments({
    identityVerificationDocumentIds: [
      "0f01ae1f-d24c-4171-8f3f-c0b820bf3044",
    ],
  }, "01HEWVF4ZSNKYRP293J53ASJCJ");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { investigationsLinkDocuments } from "@apexfintechsolutions/ascend-sdk/funcs/investigationsLinkDocuments.js";

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
  const res = await investigationsLinkDocuments(apexascend, {
    identityVerificationDocumentIds: [
      "0f01ae1f-d24c-4171-8f3f-c0b820bf3044",
    ],
  }, "01HEWVF4ZSNKYRP293J53ASJCJ");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("investigationsLinkDocuments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `investigationId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The investigation id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `linkDocumentsRequestCreate`                                                                                                                                                   | [components.LinkDocumentsRequestCreate](../../models/components/linkdocumentsrequestcreate.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.InvestigationServiceLinkDocumentsResponse](../../models/operations/investigationservicelinkdocumentsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getWatchlistItem

Gets the details of an investigation by watchlist type and valid watchlist id

### Example Usage

<!-- UsageSnippet language="typescript" operationID="WatchlistService_GetWatchlistItem" method="get" path="/investigations/v1/watchlists/{watchlist_id}/items/{item_id}" -->
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
  const result = await apexascend.investigations.getWatchlistItem("DOWJONES", "123456");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { investigationsGetWatchlistItem } from "@apexfintechsolutions/ascend-sdk/funcs/investigationsGetWatchlistItem.js";

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
  const res = await investigationsGetWatchlistItem(apexascend, "DOWJONES", "123456");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("investigationsGetWatchlistItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `watchlistId`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The watchlist id.                                                                                                                                                              | [object Object]                                                                                                                                                                |
| `itemId`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The item id.                                                                                                                                                                   | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.WatchlistServiceGetWatchlistItemResponse](../../models/operations/watchlistservicegetwatchlistitemresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getCustomerIdentification

Gets a CustomerIdentification by CustomerIdentification ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="CustomerIdentificationResultService_GetCustomerIdentification" method="get" path="/cip/v1/correspondents/{correspondent_id}/customerIdentifications/{customerIdentification_id}" -->
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
  const result = await apexascend.investigations.getCustomerIdentification("01HPMZZM6RKMVZA1JQ63RQKJRP", "01HEWVF4ZSNKYRP293J53ASJCJ");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { investigationsGetCustomerIdentification } from "@apexfintechsolutions/ascend-sdk/funcs/investigationsGetCustomerIdentification.js";

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
  const res = await investigationsGetCustomerIdentification(apexascend, "01HPMZZM6RKMVZA1JQ63RQKJRP", "01HEWVF4ZSNKYRP293J53ASJCJ");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("investigationsGetCustomerIdentification failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                      | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    | Example                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `correspondentId`                                                                                                                                                                              | *string*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                             | The correspondent id.                                                                                                                                                                          | [object Object]                                                                                                                                                                                |
| `customerIdentificationId`                                                                                                                                                                     | *string*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                             | The customerIdentification id.                                                                                                                                                                 | [object Object]                                                                                                                                                                                |
| `view`                                                                                                                                                                                         | [operations.CustomerIdentificationResultServiceGetCustomerIdentificationQueryParamView](../../models/operations/customeridentificationresultservicegetcustomeridentificationqueryparamview.md) | :heavy_minus_sign:                                                                                                                                                                             | Optional. The view to return. Defaults to BASIC.                                                                                                                                               | [object Object]                                                                                                                                                                                |
| `options`                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                          |                                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                        | :heavy_minus_sign:                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                 |                                                                                                                                                                                                |
| `options.retries`                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                               |                                                                                                                                                                                                |

### Response

**Promise\<[operations.CustomerIdentificationResultServiceGetCustomerIdentificationResponse](../../models/operations/customeridentificationresultservicegetcustomeridentificationresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |