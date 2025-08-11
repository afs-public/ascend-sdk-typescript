# DataRetrieval
(*dataRetrieval*)

## Overview

### Available Operations

* [listSnapshots](#listsnapshots) - List Snapshots

## listSnapshots

Returns details of a list of snapshots.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Snapshots_ListSnapshots" method="get" path="/analytics/v1/snapshots" -->
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
  const result = await apexascend.dataRetrieval.listSnapshots();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { dataRetrievalListSnapshots } from "@apexfintechsolutions/ascend-sdk/funcs/dataRetrievalListSnapshots.js";

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
  const res = await dataRetrievalListSnapshots(apexascend);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dataRetrievalListSnapshots failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `filter`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A CEL string to filter snapshot results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information;  | [object Object]                                                                                                                                                                |
| `pageSize`                                                                                                                                                                     | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The number of snapshots to be returned per page. Defaults to 500. Maximum is 1000.                                                                                             | [object Object]                                                                                                                                                                |
| `pageToken`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The token for retrieving the next page of snapshots, the value of which will have been returned in a previous response.                                                        | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.SnapshotsListSnapshotsResponse](../../models/operations/snapshotslistsnapshotsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403         | application/json |
| errors.Status    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |