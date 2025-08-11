# InstantCashTransferICT
(*instantCashTransferICT*)

## Overview

### Available Operations

* [createIctDeposit](#createictdeposit) - Create ICT Deposit
* [getIctDeposit](#getictdeposit) - Get ICT Deposit
* [cancelIctDeposit](#cancelictdeposit) - Cancel ICT Deposit
* [createIctWithdrawal](#createictwithdrawal) - Create ICT Withdrawal
* [getIctWithdrawal](#getictwithdrawal) - Get ICT Withdrawal
* [cancelIctWithdrawal](#cancelictwithdrawal) - Cancel ICT Withdrawal
* [locateIctReport](#locateictreport) - Locate ICT Report

## createIctDeposit

Creates an ICT deposit

### Example Usage

<!-- UsageSnippet language="typescript" operationID="IctDeposits_CreateIctDeposit" method="post" path="/transfers/v1/accounts/{account_id}/ictDeposits" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { Program } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.instantCashTransferICT.createIctDeposit({
    amount: {},
    clientTransferId: "ABC-123",
    program: Program.DepositOnly,
    travelRule: {
      originatingInstitution: {
        accountId: "<id>",
        title: "<value>",
      },
    },
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { instantCashTransferICTCreateICTDeposit } from "@apexfintechsolutions/ascend-sdk/funcs/instantCashTransferICTCreateICTDeposit.js";
import { Program } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await instantCashTransferICTCreateICTDeposit(apexascend, {
    amount: {},
    clientTransferId: "ABC-123",
    program: Program.DepositOnly,
    travelRule: {
      originatingInstitution: {
        accountId: "<id>",
        title: "<value>",
      },
    },
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("instantCashTransferICTCreateICTDeposit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `ictDepositCreate`                                                                                                                                                             | [components.IctDepositCreate](../../models/components/ictdepositcreate.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.IctDepositsCreateIctDepositResponse](../../models/operations/ictdepositscreateictdepositresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 409    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getIctDeposit

Gets an existing ICT deposit

### Example Usage

<!-- UsageSnippet language="typescript" operationID="IctDeposits_GetIctDeposit" method="get" path="/transfers/v1/accounts/{account_id}/ictDeposits/{ictDeposit_id}" -->
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
  const result = await apexascend.instantCashTransferICT.getIctDeposit("01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20240321000472");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { instantCashTransferICTGetICTDeposit } from "@apexfintechsolutions/ascend-sdk/funcs/instantCashTransferICTGetICTDeposit.js";

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
  const res = await instantCashTransferICTGetICTDeposit(apexascend, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20240321000472");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("instantCashTransferICTGetICTDeposit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `ictDepositId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ictDeposit id.                                                                                                                                                             | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.IctDepositsGetIctDepositResponse](../../models/operations/ictdepositsgetictdepositresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cancelIctDeposit

Cancels an existing ICT deposit

### Example Usage

<!-- UsageSnippet language="typescript" operationID="IctDeposits_CancelIctDeposit" method="post" path="/transfers/v1/accounts/{account_id}/ictDeposits/{ictDeposit_id}:cancel" -->
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
  const result = await apexascend.instantCashTransferICT.cancelIctDeposit({
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictDeposits/20240321000472",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20240321000472");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { instantCashTransferICTCancelICTDeposit } from "@apexfintechsolutions/ascend-sdk/funcs/instantCashTransferICTCancelICTDeposit.js";

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
  const res = await instantCashTransferICTCancelICTDeposit(apexascend, {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictDeposits/20240321000472",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20240321000472");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("instantCashTransferICTCancelICTDeposit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `ictDepositId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ictDeposit id.                                                                                                                                                             | [object Object]                                                                                                                                                                |
| `cancelIctDepositRequestCreate`                                                                                                                                                | [components.CancelIctDepositRequestCreate](../../models/components/cancelictdepositrequestcreate.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.IctDepositsCancelIctDepositResponse](../../models/operations/ictdepositscancelictdepositresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createIctWithdrawal

Creates an ICT withdrawal

### Example Usage

<!-- UsageSnippet language="typescript" operationID="IctWithdrawals_CreateIctWithdrawal" method="post" path="/transfers/v1/accounts/{account_id}/ictWithdrawals" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { IctWithdrawalCreateProgram } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.instantCashTransferICT.createIctWithdrawal({
    clientTransferId: "20230817000319",
    program: IctWithdrawalCreateProgram.BrokerPartner,
    travelRule: {
      recipientInstitution: {
        accountId: "<id>",
        title: "<value>",
      },
    },
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { instantCashTransferICTCreateICTWithdrawal } from "@apexfintechsolutions/ascend-sdk/funcs/instantCashTransferICTCreateICTWithdrawal.js";
import { IctWithdrawalCreateProgram } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await instantCashTransferICTCreateICTWithdrawal(apexascend, {
    clientTransferId: "20230817000319",
    program: IctWithdrawalCreateProgram.BrokerPartner,
    travelRule: {
      recipientInstitution: {
        accountId: "<id>",
        title: "<value>",
      },
    },
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("instantCashTransferICTCreateICTWithdrawal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `ictWithdrawalCreate`                                                                                                                                                          | [components.IctWithdrawalCreate](../../models/components/ictwithdrawalcreate.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.IctWithdrawalsCreateIctWithdrawalResponse](../../models/operations/ictwithdrawalscreateictwithdrawalresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 409    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getIctWithdrawal

Gets an existing ICT withdrawal

### Example Usage

<!-- UsageSnippet language="typescript" operationID="IctWithdrawals_GetIctWithdrawal" method="get" path="/transfers/v1/accounts/{account_id}/ictWithdrawals/{ictWithdrawal_id}" -->
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
  const result = await apexascend.instantCashTransferICT.getIctWithdrawal("01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20240321000472");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { instantCashTransferICTGetICTWithdrawal } from "@apexfintechsolutions/ascend-sdk/funcs/instantCashTransferICTGetICTWithdrawal.js";

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
  const res = await instantCashTransferICTGetICTWithdrawal(apexascend, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20240321000472");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("instantCashTransferICTGetICTWithdrawal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `ictWithdrawalId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ictWithdrawal id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.IctWithdrawalsGetIctWithdrawalResponse](../../models/operations/ictwithdrawalsgetictwithdrawalresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cancelIctWithdrawal

Cancels an existing ICT withdrawal

### Example Usage

<!-- UsageSnippet language="typescript" operationID="IctWithdrawals_CancelIctWithdrawal" method="post" path="/transfers/v1/accounts/{account_id}/ictWithdrawals/{ictWithdrawal_id}:cancel" -->
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
  const result = await apexascend.instantCashTransferICT.cancelIctWithdrawal({
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictWithdrawals/20240321000472",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20240321000472");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { instantCashTransferICTCancelICTWithdrawal } from "@apexfintechsolutions/ascend-sdk/funcs/instantCashTransferICTCancelICTWithdrawal.js";

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
  const res = await instantCashTransferICTCancelICTWithdrawal(apexascend, {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictWithdrawals/20240321000472",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "20240321000472");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("instantCashTransferICTCancelICTWithdrawal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `ictWithdrawalId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ictWithdrawal id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `cancelIctWithdrawalRequestCreate`                                                                                                                                             | [components.CancelIctWithdrawalRequestCreate](../../models/components/cancelictwithdrawalrequestcreate.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.IctWithdrawalsCancelIctWithdrawalResponse](../../models/operations/ictwithdrawalscancelictwithdrawalresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## locateIctReport

Returns a signed link pointing to a recon report file for a specific ICT batch.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="IctReconReports_LocateIctReport" method="get" path="/transfers/v1/correspondents/{correspondent_id}/ictReconReports:locate" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { ProgramDateFilterProgram } from "@apexfintechsolutions/ascend-sdk/models/operations";

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
  const result = await apexascend.instantCashTransferICT.locateIctReport({
    correspondentId: "01H8MCDXH4HYJJAV921BDKCC83",
    batchId: "24114.108.2b2c1.001",
    programDateFilterProgram: ProgramDateFilterProgram.BrokerPartner,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { instantCashTransferICTLocateICTReport } from "@apexfintechsolutions/ascend-sdk/funcs/instantCashTransferICTLocateICTReport.js";
import { ProgramDateFilterProgram } from "@apexfintechsolutions/ascend-sdk/models/operations";

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
  const res = await instantCashTransferICTLocateICTReport(apexascend, {
    correspondentId: "01H8MCDXH4HYJJAV921BDKCC83",
    batchId: "24114.108.2b2c1.001",
    programDateFilterProgram: ProgramDateFilterProgram.BrokerPartner,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("instantCashTransferICTLocateICTReport failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.IctReconReportsLocateIctReportRequest](../../models/operations/ictreconreportslocateictreportrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.IctReconReportsLocateIctReportResponse](../../models/operations/ictreconreportslocateictreportresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |