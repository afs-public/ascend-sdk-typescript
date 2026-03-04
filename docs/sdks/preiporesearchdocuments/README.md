# PreIPOResearchDocuments
(*preIPOResearchDocuments*)

## Overview

### Available Operations

* [listPreIpoCompanyResearchDocuments](#listpreipocompanyresearchdocuments) - List Pre IPO Company Research Documents

## listPreIpoCompanyResearchDocuments

Lists Pre IPO Company Research Documents.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PreIpoCompanyResearchDocuments_ListPreIpoCompanyResearchDocuments" method="get" path="/trading/v1/preIpoCompanies/{preIpoCompany_id}/researchDocuments" -->
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
  const result = await apexascend.preIPOResearchDocuments.listPreIpoCompanyResearchDocuments("3fa85f64-5717-4562-b3fc-2c963f66afa6");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { preIPOResearchDocumentsListPreIPOCompanyResearchDocuments } from "@apexfintechsolutions/ascend-sdk/funcs/preIPOResearchDocumentsListPreIPOCompanyResearchDocuments.js";

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
  const res = await preIPOResearchDocumentsListPreIPOCompanyResearchDocuments(apexascend, "3fa85f64-5717-4562-b3fc-2c963f66afa6");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("preIPOResearchDocumentsListPreIPOCompanyResearchDocuments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `preIpoCompanyId`                                                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                     | The preIpoCompany id.                                                                                                                                                                                                                                                                  | [object Object]                                                                                                                                                                                                                                                                        |
| `pageSize`                                                                                                                                                                                                                                                                             | *number*                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | The maximum number of Pre IPO Company Research Documents to return. The service may return fewer than this value. If unspecified, at most 100 Pre IPO Company Research Documents will be returned. The maximum value is 100; values above 100 will be coerced to 100.                  | [object Object]                                                                                                                                                                                                                                                                        |
| `pageToken`                                                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | A page token, received from a previous `ListPreIpoCompanyResearchDocumentsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPreIpoCompanyResearchDocumentsRequest` must match the call that provided the page token. | [object Object]                                                                                                                                                                                                                                                                        |
| `filter`                                                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | A CEL string to filter results. Filterable fields:<br/> - type<br/> - relation<br/> Only `&&` and `==` operators are allowed.<br/> See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search)<br/> page in Guides for more information;           | [object Object]                                                                                                                                                                                                                                                                        |
| `options`                                                                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                  |                                                                                                                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                         |                                                                                                                                                                                                                                                                                        |
| `options.retries`                                                                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                        |

### Response

**Promise\<[operations.PreIpoCompanyResearchDocumentsListPreIpoCompanyResearchDocumentsResponse](../../models/operations/preipocompanyresearchdocumentslistpreipocompanyresearchdocumentsresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |