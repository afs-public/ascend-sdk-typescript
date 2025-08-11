# BankRelationships
(*bankRelationships*)

## Overview

### Available Operations

* [createBankRelationship](#createbankrelationship) - Create Bank Relationship
* [listBankRelationships](#listbankrelationships) - List Bank Relationships
* [getBankRelationship](#getbankrelationship) - Get Bank Relationship
* [updateBankRelationship](#updatebankrelationship) - Update Bank Relationship
* [cancelBankRelationship](#cancelbankrelationship) - Cancel Bank Relationship
* [verifyMicroDeposits](#verifymicrodeposits) - Verify Micro Deposits
* [reissueMicroDeposits](#reissuemicrodeposits) - Reissue Micro Deposits
* [reuseBankRelationship](#reusebankrelationship) - Reuse Bank Relationship

## createBankRelationship

Creates a bank relationship.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="BankRelationships_CreateBankRelationship" method="post" path="/transfers/v1/accounts/{account_id}/bankRelationships" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { VerificationMethod } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.bankRelationships.createBankRelationship({
    nickname: "My Primary Bank",
    verificationMethod: VerificationMethod.MicroDeposit,
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { bankRelationshipsCreateBankRelationship } from "@apexfintechsolutions/ascend-sdk/funcs/bankRelationshipsCreateBankRelationship.js";
import { VerificationMethod } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await bankRelationshipsCreateBankRelationship(apexascend, {
    nickname: "My Primary Bank",
    verificationMethod: VerificationMethod.MicroDeposit,
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankRelationshipsCreateBankRelationship failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `bankRelationshipCreate`                                                                                                                                                       | [components.BankRelationshipCreate](../../models/components/bankrelationshipcreate.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BankRelationshipsCreateBankRelationshipResponse](../../models/operations/bankrelationshipscreatebankrelationshipresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listBankRelationships

Lists bank relationships for an account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="BankRelationships_ListBankRelationships" method="get" path="/transfers/v1/accounts/{account_id}/bankRelationships" -->
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
  const result = await apexascend.bankRelationships.listBankRelationships("01H8FB90ZRRFWXB4XC2JPJ1D4Y");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { bankRelationshipsListBankRelationships } from "@apexfintechsolutions/ascend-sdk/funcs/bankRelationshipsListBankRelationships.js";

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
  const res = await bankRelationshipsListBankRelationships(apexascend, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankRelationshipsListBankRelationships failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                    | Example                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                             | The account id.                                                                                                                                                                                                                                | [object Object]                                                                                                                                                                                                                                |
| `pageSize`                                                                                                                                                                                                                                     | *number*                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                             | The maximum number of bank relationships to return. The service may return fewer than this value. If unspecified, at most 50 bank relationships will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.        | [object Object]                                                                                                                                                                                                                                |
| `pageToken`                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                             | A page token, received from a previous `ListBankRelationships` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBankRelationships` must match the call that provided the page token. | [object Object]                                                                                                                                                                                                                                |
| `state`                                                                                                                                                                                                                                        | [operations.State](../../models/operations/state.md)                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                             | The state of bank relationships to filter by. Unspecified returns relationships of all states.                                                                                                                                                 | [object Object]                                                                                                                                                                                                                                |
| `options`                                                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                                                          |                                                                                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                 |                                                                                                                                                                                                                                                |
| `options.retries`                                                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                               |                                                                                                                                                                                                                                                |

### Response

**Promise\<[operations.BankRelationshipsListBankRelationshipsResponse](../../models/operations/bankrelationshipslistbankrelationshipsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getBankRelationship

Gets an existing bank relationship.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="BankRelationships_GetBankRelationship" method="get" path="/transfers/v1/accounts/{account_id}/bankRelationships/{bankRelationship_id}" -->
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
  const result = await apexascend.bankRelationships.getBankRelationship("01H8FB90ZRRFWXB4XC2JPJ1D4Y", "651ef9de0dee00240813e60e");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { bankRelationshipsGetBankRelationship } from "@apexfintechsolutions/ascend-sdk/funcs/bankRelationshipsGetBankRelationship.js";

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
  const res = await bankRelationshipsGetBankRelationship(apexascend, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "651ef9de0dee00240813e60e");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankRelationshipsGetBankRelationship failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `bankRelationshipId`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The bankRelationship id.                                                                                                                                                       | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BankRelationshipsGetBankRelationshipResponse](../../models/operations/bankrelationshipsgetbankrelationshipresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateBankRelationship

Updates an existing bank relationship.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="BankRelationships_UpdateBankRelationship" method="patch" path="/transfers/v1/accounts/{account_id}/bankRelationships/{bankRelationship_id}" -->
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
  const result = await apexascend.bankRelationships.updateBankRelationship({}, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "651ef9de0dee00240813e60e");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { bankRelationshipsUpdateBankRelationship } from "@apexfintechsolutions/ascend-sdk/funcs/bankRelationshipsUpdateBankRelationship.js";

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
  const res = await bankRelationshipsUpdateBankRelationship(apexascend, {}, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "651ef9de0dee00240813e60e");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankRelationshipsUpdateBankRelationship failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `bankRelationshipId`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The bankRelationship id.                                                                                                                                                       | [object Object]                                                                                                                                                                |
| `bankRelationshipUpdate`                                                                                                                                                       | [components.BankRelationshipUpdate](../../models/components/bankrelationshipupdate.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `updateMask`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The field of the bank relationship to update. Only `nickname` is supported.                                                                                                    | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BankRelationshipsUpdateBankRelationshipResponse](../../models/operations/bankrelationshipsupdatebankrelationshipresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cancelBankRelationship

Cancels an existing bank relationship.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="BankRelationships_CancelBankRelationship" method="post" path="/transfers/v1/accounts/{account_id}/bankRelationships/{bankRelationship_id}:cancel" -->
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
  const result = await apexascend.bankRelationships.cancelBankRelationship({
    comment: "User Request",
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "651ef9de0dee00240813e60e");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { bankRelationshipsCancelBankRelationship } from "@apexfintechsolutions/ascend-sdk/funcs/bankRelationshipsCancelBankRelationship.js";

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
  const res = await bankRelationshipsCancelBankRelationship(apexascend, {
    comment: "User Request",
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "651ef9de0dee00240813e60e");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankRelationshipsCancelBankRelationship failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `bankRelationshipId`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The bankRelationship id.                                                                                                                                                       | [object Object]                                                                                                                                                                |
| `cancelBankRelationshipRequestCreate`                                                                                                                                          | [components.CancelBankRelationshipRequestCreate](../../models/components/cancelbankrelationshiprequestcreate.md)                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BankRelationshipsCancelBankRelationshipResponse](../../models/operations/bankrelationshipscancelbankrelationshipresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## verifyMicroDeposits

Verifies a pending bank relationship with the `MICRO_DEPOSIT` verification method. Successful verification of the micro deposit amounts will result in the relationship moving to the `APPROVED` state. The micro deposits will be taken back from the bank account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="BankRelationships_VerifyMicroDeposits" method="post" path="/transfers/v1/accounts/{account_id}/bankRelationships/{bankRelationship_id}:verifyMicroDeposits" -->
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
  const result = await apexascend.bankRelationships.verifyMicroDeposits({
    amounts: {
      amount1: {},
      amount2: {},
    },
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "651ef9de0dee00240813e60e");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { bankRelationshipsVerifyMicroDeposits } from "@apexfintechsolutions/ascend-sdk/funcs/bankRelationshipsVerifyMicroDeposits.js";

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
  const res = await bankRelationshipsVerifyMicroDeposits(apexascend, {
    amounts: {
      amount1: {},
      amount2: {},
    },
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "651ef9de0dee00240813e60e");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankRelationshipsVerifyMicroDeposits failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `bankRelationshipId`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The bankRelationship id.                                                                                                                                                       | [object Object]                                                                                                                                                                |
| `verifyMicroDepositsRequestCreate`                                                                                                                                             | [components.VerifyMicroDepositsRequestCreate](../../models/components/verifymicrodepositsrequestcreate.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BankRelationshipsVerifyMicroDepositsResponse](../../models/operations/bankrelationshipsverifymicrodepositsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## reissueMicroDeposits

Reissues micro deposits after micro deposit verification has failed. The user should have received a message that new micro deposits should be reissued.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="BankRelationships_ReissueMicroDeposits" method="post" path="/transfers/v1/accounts/{account_id}/bankRelationships/{bankRelationship_id}:reissue" -->
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
  const result = await apexascend.bankRelationships.reissueMicroDeposits({
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "651ef9de0dee00240813e60e");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { bankRelationshipsReissueMicroDeposits } from "@apexfintechsolutions/ascend-sdk/funcs/bankRelationshipsReissueMicroDeposits.js";

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
  const res = await bankRelationshipsReissueMicroDeposits(apexascend, {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "651ef9de0dee00240813e60e");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankRelationshipsReissueMicroDeposits failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `bankRelationshipId`                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The bankRelationship id.                                                                                                                                                       | [object Object]                                                                                                                                                                |
| `reissueMicroDepositsRequestCreate`                                                                                                                                            | [components.ReissueMicroDepositsRequestCreate](../../models/components/reissuemicrodepositsrequestcreate.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BankRelationshipsReissueMicroDepositsResponse](../../models/operations/bankrelationshipsreissuemicrodepositsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## reuseBankRelationship

Reuses an existing bank relationship for a new account. The source bank relationship must be approved. The new account must be related to the parent account of the `source_bank_relationship`. The new relationship will be created with the `USE_EXISTING` verification method in place of the source bank relationship's verification method.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="BankRelationships_ReuseBankRelationship" method="post" path="/transfers/v1/accounts/{account_id}/bankRelationships:reuse" -->
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
  const result = await apexascend.bankRelationships.reuseBankRelationship({
    parent: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Z",
    sourceBankRelationship: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Z");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { bankRelationshipsReuseBankRelationship } from "@apexfintechsolutions/ascend-sdk/funcs/bankRelationshipsReuseBankRelationship.js";

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
  const res = await bankRelationshipsReuseBankRelationship(apexascend, {
    parent: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Z",
    sourceBankRelationship: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Z");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("bankRelationshipsReuseBankRelationship failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `reuseBankRelationshipRequestCreate`                                                                                                                                           | [components.ReuseBankRelationshipRequestCreate](../../models/components/reusebankrelationshiprequestcreate.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.BankRelationshipsReuseBankRelationshipResponse](../../models/operations/bankrelationshipsreusebankrelationshipresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |