# Assets
(*assets*)

## Overview

### Available Operations

* [listAssets](#listassets) - List Assets
* [getAsset](#getasset) - Get Asset
* [listAssetsCorrespondent](#listassetscorrespondent) - List Assets (By Correspondent)
* [getAssetCorrespondent](#getassetcorrespondent) - Get Asset (By Correspondent)

## listAssets

Lists assets

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
  const result = await apexascend.assets.listAssets();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { assetsListAssets } from "@apexfintechsolutions/ascend-sdk/funcs/assetsListAssets.js";

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
  const res = await assetsListAssets(apexascend);

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

| Parameter                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `parent`                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                | The parent resource name, which is the correspondent ID.                                                                                                                                                                                                          | [object Object]                                                                                                                                                                                                                                                   |
| `pageSize`                                                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                | The maximum number of assets to return. The service may return fewer than this value. Default is 100 (subject to change) The maximum is 1000, values exceeding this will be set to 1000 (subject to change)                                                       | [object Object]                                                                                                                                                                                                                                                   |
| `pageToken`                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                | A page token, received from a previous `ListAssets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAssets` must match the call that provided the page token in order to maintain a stable result set. | [object Object]                                                                                                                                                                                                                                                   |
| `filter`                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                | A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information;                                                                                              | [object Object]                                                                                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                                                         | RequestOptions                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                    |                                                                                                                                                                                                                                                                   |
| `options.retries`                                                                                                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                   |

### Response

**Promise\<[operations.AssetsListAssets1Response](../../models/operations/assetslistassets1response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.Status                | 400, 403, 404, 500, 503, 504 | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getAsset

Gets assets

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
  const result = await apexascend.assets.getAsset("8395");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { assetsGetAsset } from "@apexfintechsolutions/ascend-sdk/funcs/assetsGetAsset.js";

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
  const res = await assetsGetAsset(apexascend, "8395");

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
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset id.                                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AssetsGetAssetResponse](../../models/operations/assetsgetassetresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.Status           | 400, 403, 404, 500, 503 | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |

## listAssetsCorrespondent

Lists assets

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
  const result = await apexascend.assets.listAssetsCorrespondent("1234");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { assetsListAssetsCorrespondent } from "@apexfintechsolutions/ascend-sdk/funcs/assetsListAssetsCorrespondent.js";

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
  const res = await assetsListAssetsCorrespondent(apexascend, "1234");

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

| Parameter                                                                                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `correspondentId`                                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                                                                                                | The correspondent id.                                                                                                                                                                                                                                             | [object Object]                                                                                                                                                                                                                                                   |
| `pageSize`                                                                                                                                                                                                                                                        | *number*                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                | The maximum number of assets to return. The service may return fewer than this value. Default is 100 (subject to change) The maximum is 1000, values exceeding this will be set to 1000 (subject to change)                                                       | [object Object]                                                                                                                                                                                                                                                   |
| `pageToken`                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                | A page token, received from a previous `ListAssets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAssets` must match the call that provided the page token in order to maintain a stable result set. | [object Object]                                                                                                                                                                                                                                                   |
| `filter`                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                | A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information;                                                                                              | [object Object]                                                                                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                                                         | RequestOptions                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                | Used to set various options for making HTTP requests.                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                   |
| `options.fetchOptions`                                                                                                                                                                                                                                            | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                    |                                                                                                                                                                                                                                                                   |
| `options.retries`                                                                                                                                                                                                                                                 | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                   |

### Response

**Promise\<[operations.AssetsListAssetsCorrespondentResponse](../../models/operations/assetslistassetscorrespondentresponse.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.Status                | 400, 403, 404, 500, 503, 504 | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |

## getAssetCorrespondent

Gets assets

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
  const result = await apexascend.assets.getAssetCorrespondent("8395", "<id>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { assetsGetAssetCorrespondent } from "@apexfintechsolutions/ascend-sdk/funcs/assetsGetAssetCorrespondent.js";

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
  const res = await assetsGetAssetCorrespondent(apexascend, "8395", "<id>");

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
| `assetId`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The asset id.                                                                                                                                                                  |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AssetsGetAssetCorrespondentResponse](../../models/operations/assetsgetassetcorrespondentresponse.md)\>**

### Errors

| Error Type              | Status Code             | Content Type            |
| ----------------------- | ----------------------- | ----------------------- |
| errors.Status           | 400, 403, 404, 500, 503 | application/json        |
| errors.SDKError         | 4XX, 5XX                | \*/\*                   |