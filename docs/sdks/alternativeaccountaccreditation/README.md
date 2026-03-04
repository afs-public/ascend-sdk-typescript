# AlternativeAccountAccreditation
(*alternativeAccountAccreditation*)

## Overview

### Available Operations

* [getAccountAccreditation](#getaccountaccreditation) - Get Account Accreditation
* [setAccountAccreditationType](#setaccountaccreditationtype) - Set Account Accreditation

## getAccountAccreditation

Gets the accreditation properties for the specified account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AccountAccreditationService_GetAccountAccreditation" method="get" path="/trading/v1/accounts/{account_id}/accreditation" -->
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
  const result = await apexascend.alternativeAccountAccreditation.getAccountAccreditation("01JR8YQT40WAQT8S95ZQGS1QN0");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { alternativeAccountAccreditationGetAccountAccreditation } from "@apexfintechsolutions/ascend-sdk/funcs/alternativeAccountAccreditationGetAccountAccreditation.js";

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
  const res = await alternativeAccountAccreditationGetAccountAccreditation(apexascend, "01JR8YQT40WAQT8S95ZQGS1QN0");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alternativeAccountAccreditationGetAccountAccreditation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AccountAccreditationServiceGetAccountAccreditationResponse](../../models/operations/accountaccreditationservicegetaccountaccreditationresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 401, 403    | application/json |
| errors.Status    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## setAccountAccreditationType

Sets the accreditation type for an account. Accounts must be accredited to participate in alternative investment orders.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AccountAccreditationService_SetAccountAccreditationType" method="post" path="/trading/v1/accounts/{account_id}/accreditation:setType" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { SetAccountAccreditationTypeRequestCreateAccreditationType } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.alternativeAccountAccreditation.setAccountAccreditationType({
    accreditationType: SetAccountAccreditationTypeRequestCreateAccreditationType.NetWorthGt1M,
    name: "accounts/01JR8YQT40WAQT8S95ZQGS1QN0/accreditation",
  }, "01JR8YQT40WAQT8S95ZQGS1QN0");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { alternativeAccountAccreditationSetAccountAccreditationType } from "@apexfintechsolutions/ascend-sdk/funcs/alternativeAccountAccreditationSetAccountAccreditationType.js";
import { SetAccountAccreditationTypeRequestCreateAccreditationType } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await alternativeAccountAccreditationSetAccountAccreditationType(apexascend, {
    accreditationType: SetAccountAccreditationTypeRequestCreateAccreditationType.NetWorthGt1M,
    name: "accounts/01JR8YQT40WAQT8S95ZQGS1QN0/accreditation",
  }, "01JR8YQT40WAQT8S95ZQGS1QN0");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("alternativeAccountAccreditationSetAccountAccreditationType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `setAccountAccreditationTypeRequestCreate`                                                                                                                                     | [components.SetAccountAccreditationTypeRequestCreate](../../models/components/setaccountaccreditationtyperequestcreate.md)                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AccountAccreditationServiceSetAccountAccreditationTypeResponse](../../models/operations/accountaccreditationservicesetaccountaccreditationtyperesponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.Status      | 400, 401, 403, 404 | application/json   |
| errors.Status      | 500                | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |