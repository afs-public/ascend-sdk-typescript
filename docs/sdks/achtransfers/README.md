# ACHTransfers
(*achTransfers*)

## Overview

### Available Operations

* [createAchDeposit](#createachdeposit) - Create ACH Deposit
* [getAchDeposit](#getachdeposit) - Get ACH Deposit
* [cancelAchDeposit](#cancelachdeposit) - Cancel ACH Deposit
* [createAchWithdrawal](#createachwithdrawal) - Create ACH Withdrawal
* [getAchWithdrawal](#getachwithdrawal) - Get ACH Withdrawal
* [cancelAchWithdrawal](#cancelachwithdrawal) - Cancel ACH Withdrawal

## createAchDeposit

Creates an ACH deposit.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchDeposits_CreateAchDeposit" method="post" path="/transfers/v1/accounts/{account_id}/achDeposits" -->
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
  const result = await apexascend.achTransfers.createAchDeposit({
    amount: {},
    bankRelationship: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
    clientTransferId: "179dcd33-49f8-4615-989c-560fb387c4fd",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { achTransfersCreateACHDeposit } from "@apexfintechsolutions/ascend-sdk/funcs/achTransfersCreateACHDeposit.js";

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
  const res = await achTransfersCreateACHDeposit(apexascend, {
    amount: {},
    bankRelationship: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
    clientTransferId: "179dcd33-49f8-4615-989c-560fb387c4fd",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("achTransfersCreateACHDeposit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achDepositCreate`                                                                                                                                                             | [components.AchDepositCreate](../../models/components/achdepositcreate.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchDepositsCreateAchDepositResponse](../../models/operations/achdepositscreateachdepositresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 409    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getAchDeposit

Gets an existing ACH deposit.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchDeposits_GetAchDeposit" method="get" path="/transfers/v1/accounts/{account_id}/achDeposits/{achDeposit_id}" -->
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
  const result = await apexascend.achTransfers.getAchDeposit("01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20230817000319");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { achTransfersGetACHDeposit } from "@apexfintechsolutions/ascend-sdk/funcs/achTransfersGetACHDeposit.js";

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
  const res = await achTransfersGetACHDeposit(apexascend, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20230817000319");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("achTransfersGetACHDeposit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achDepositId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The achDeposit id.                                                                                                                                                             | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchDepositsGetAchDepositResponse](../../models/operations/achdepositsgetachdepositresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cancelAchDeposit

Cancels an existing ACH deposit.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchDeposits_CancelAchDeposit" method="post" path="/transfers/v1/accounts/{account_id}/achDeposits/{achDeposit_id}:cancel" -->
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
  const result = await apexascend.achTransfers.cancelAchDeposit({
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20230817000319");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { achTransfersCancelACHDeposit } from "@apexfintechsolutions/ascend-sdk/funcs/achTransfersCancelACHDeposit.js";

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
  const res = await achTransfersCancelACHDeposit(apexascend, {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20230817000319");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("achTransfersCancelACHDeposit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achDepositId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The achDeposit id.                                                                                                                                                             | [object Object]                                                                                                                                                                |
| `cancelAchDepositRequestCreate`                                                                                                                                                | [components.CancelAchDepositRequestCreate](../../models/components/cancelachdepositrequestcreate.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchDepositsCancelAchDepositResponse](../../models/operations/achdepositscancelachdepositresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createAchWithdrawal

Creates an ACH withdrawal.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchWithdrawals_CreateAchWithdrawal" method="post" path="/transfers/v1/accounts/{account_id}/achWithdrawals" -->
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
  const result = await apexascend.achTransfers.createAchWithdrawal({
    bankRelationship: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
    clientTransferId: "179dcd33-49f8-4615-989c-560fb387c4fd",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { achTransfersCreateACHWithdrawal } from "@apexfintechsolutions/ascend-sdk/funcs/achTransfersCreateACHWithdrawal.js";

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
  const res = await achTransfersCreateACHWithdrawal(apexascend, {
    bankRelationship: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
    clientTransferId: "179dcd33-49f8-4615-989c-560fb387c4fd",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("achTransfersCreateACHWithdrawal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achWithdrawalCreate`                                                                                                                                                          | [components.AchWithdrawalCreate](../../models/components/achwithdrawalcreate.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchWithdrawalsCreateAchWithdrawalResponse](../../models/operations/achwithdrawalscreateachwithdrawalresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 409    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getAchWithdrawal

Gets an existing ACH withdrawal.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchWithdrawals_GetAchWithdrawal" method="get" path="/transfers/v1/accounts/{account_id}/achWithdrawals/{achWithdrawal_id}" -->
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
  const result = await apexascend.achTransfers.getAchWithdrawal("01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20230620500726");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { achTransfersGetACHWithdrawal } from "@apexfintechsolutions/ascend-sdk/funcs/achTransfersGetACHWithdrawal.js";

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
  const res = await achTransfersGetACHWithdrawal(apexascend, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20230620500726");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("achTransfersGetACHWithdrawal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achWithdrawalId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The achWithdrawal id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchWithdrawalsGetAchWithdrawalResponse](../../models/operations/achwithdrawalsgetachwithdrawalresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cancelAchWithdrawal

Cancels an existing ACH withdrawal.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchWithdrawals_CancelAchWithdrawal" method="post" path="/transfers/v1/accounts/{account_id}/achWithdrawals/{achWithdrawal_id}:cancel" -->
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
  const result = await apexascend.achTransfers.cancelAchWithdrawal({
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawals/20230620500726",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20230620500726");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { achTransfersCancelACHWithdrawal } from "@apexfintechsolutions/ascend-sdk/funcs/achTransfersCancelACHWithdrawal.js";

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
  const res = await achTransfersCancelACHWithdrawal(apexascend, {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawals/20230620500726",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20230620500726");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("achTransfersCancelACHWithdrawal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achWithdrawalId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The achWithdrawal id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `cancelAchWithdrawalRequestCreate`                                                                                                                                             | [components.CancelAchWithdrawalRequestCreate](../../models/components/cancelachwithdrawalrequestcreate.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchWithdrawalsCancelAchWithdrawalResponse](../../models/operations/achwithdrawalscancelachwithdrawalresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |