# PreIPOCompanies
(*preIPOCompanies*)

## Overview

### Available Operations

* [listPreIpoCompanies](#listpreipocompanies) - List Pre IPO Company
* [getPreIpoCompany](#getpreipocompany) - Get Pre IPO Company

## listPreIpoCompanies

Lists Pre IPO Companies.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PreIpoCompanies_ListPreIpoCompanies" method="get" path="/trading/v1/preIpoCompanies" -->
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
  const result = await apexascend.preIPOCompanies.listPreIpoCompanies();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { preIPOCompaniesListPreIPOCompanies } from "@apexfintechsolutions/ascend-sdk/funcs/preIPOCompaniesListPreIPOCompanies.js";

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
  const res = await preIPOCompaniesListPreIPOCompanies(apexascend);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("preIPOCompaniesListPreIPOCompanies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                                                                                                                                                                               | *number*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | The maximum number of Pre IPO Companies to return. The service may return fewer than this value. If unspecified, at most 100 Pre IPO Companies will be returned. The maximum value is 100; values above 100 will be coerced to 100.                      | [object Object]                                                                                                                                                                                                                                          |
| `pageToken`                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                       | A page token, received from a previous `ListPreIpoCompaniesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPreIpoCompaniesRequest` must match the call that provided the page token. | [object Object]                                                                                                                                                                                                                                          |
| `options`                                                                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                                                                    |                                                                                                                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                           |                                                                                                                                                                                                                                                          |
| `options.retries`                                                                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                         |                                                                                                                                                                                                                                                          |

### Response

**Promise\<[operations.PreIpoCompaniesListPreIpoCompaniesResponse](../../models/operations/preipocompanieslistpreipocompaniesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 401, 403    | application/json |
| errors.Status    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getPreIpoCompany

Gets a Pre IPO Company.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PreIpoCompanies_GetPreIpoCompany" method="get" path="/trading/v1/preIpoCompanies/{preIpoCompany_id}" -->
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
  const result = await apexascend.preIPOCompanies.getPreIpoCompany("3fa85f64-5717-4562-b3fc-2c963f66afa6");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { preIPOCompaniesGetPreIPOCompany } from "@apexfintechsolutions/ascend-sdk/funcs/preIPOCompaniesGetPreIPOCompany.js";

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
  const res = await preIPOCompaniesGetPreIPOCompany(apexascend, "3fa85f64-5717-4562-b3fc-2c963f66afa6");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("preIPOCompaniesGetPreIPOCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `preIpoCompanyId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The preIpoCompany id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.PreIpoCompaniesGetPreIpoCompanyResponse](../../models/operations/preipocompaniesgetpreipocompanyresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |