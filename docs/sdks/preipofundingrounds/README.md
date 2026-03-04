# PreIPOFundingRounds
(*preIPOFundingRounds*)

## Overview

### Available Operations

* [listPreIpoCompanyFundingRounds](#listpreipocompanyfundingrounds) - List Pre IPO Company Funding Rounds
* [getPreIpoCompanyFundingRound](#getpreipocompanyfundinground) - Get Pre IPO Company Funding Round

## listPreIpoCompanyFundingRounds

Lists Pre IPO Company Funding Rounds.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PreIpoCompanyFundingRounds_ListPreIpoCompanyFundingRounds" method="get" path="/trading/v1/preIpoCompanies/{preIpoCompany_id}/fundingRounds" -->
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
  const result = await apexascend.preIPOFundingRounds.listPreIpoCompanyFundingRounds("3fa85f64-5717-4562-b3fc-2c963f66afa6");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { preIPOFundingRoundsListPreIPOCompanyFundingRounds } from "@apexfintechsolutions/ascend-sdk/funcs/preIPOFundingRoundsListPreIPOCompanyFundingRounds.js";

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
  const res = await preIPOFundingRoundsListPreIPOCompanyFundingRounds(apexascend, "3fa85f64-5717-4562-b3fc-2c963f66afa6");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("preIPOFundingRoundsListPreIPOCompanyFundingRounds failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                                                    | Example                                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `preIpoCompanyId`                                                                                                                                                                                                                                                              | *string*                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                             | The preIpoCompany id.                                                                                                                                                                                                                                                          | [object Object]                                                                                                                                                                                                                                                                |
| `pageSize`                                                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | The maximum number of Pre IPO Company Funding Rounds to return. The service may return fewer than this value. If unspecified, at most 100 Pre IPO Company Funding Rounds will be returned. The maximum value is 100; values above 100 will be coerced to 100.                  | [object Object]                                                                                                                                                                                                                                                                |
| `pageToken`                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                             | A page token, received from a previous `ListPreIpoCompanyFundingRoundsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPreIpoCompanyFundingRoundsRequest` must match the call that provided the page token. | [object Object]                                                                                                                                                                                                                                                                |
| `options`                                                                                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                 |                                                                                                                                                                                                                                                                                |
| `options.retries`                                                                                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                |

### Response

**Promise\<[operations.PreIpoCompanyFundingRoundsListPreIpoCompanyFundingRoundsResponse](../../models/operations/preipocompanyfundingroundslistpreipocompanyfundingroundsresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## getPreIpoCompanyFundingRound

Gets a Pre IPO Company Funding Round.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="PreIpoCompanyFundingRounds_GetPreIpoCompanyFundingRound" method="get" path="/trading/v1/preIpoCompanies/{preIpoCompany_id}/fundingRounds/{fundingRound_id}" -->
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
  const result = await apexascend.preIPOFundingRounds.getPreIpoCompanyFundingRound("3fa85f64-5717-4562-b3fc-2c963f66afa6", "5f29def7-445a-46e1-b0af-e475c5481820");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { preIPOFundingRoundsGetPreIPOCompanyFundingRound } from "@apexfintechsolutions/ascend-sdk/funcs/preIPOFundingRoundsGetPreIPOCompanyFundingRound.js";

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
  const res = await preIPOFundingRoundsGetPreIPOCompanyFundingRound(apexascend, "3fa85f64-5717-4562-b3fc-2c963f66afa6", "5f29def7-445a-46e1-b0af-e475c5481820");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("preIPOFundingRoundsGetPreIPOCompanyFundingRound failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `preIpoCompanyId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The preIpoCompany id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `fundingRoundId`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The fundingRound id.                                                                                                                                                           | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.PreIpoCompanyFundingRoundsGetPreIpoCompanyFundingRoundResponse](../../models/operations/preipocompanyfundingroundsgetpreipocompanyfundingroundresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |