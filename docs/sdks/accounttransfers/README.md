# AccountTransfers
(*accountTransfers*)

## Overview

### Available Operations

* [createTransfer](#createtransfer) - Create Transfer
* [listTransfers](#listtransfers) - List Transfers
* [acceptTransfer](#accepttransfer) - Accept Transfer
* [rejectTransfer](#rejecttransfer) - Reject Transfer
* [getTransfer](#gettransfer) - Get Transfer

## createTransfer

Creates a transfer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AccountTransfers_CreateTransfer" method="post" path="/acats/v1/correspondents/{correspondent_id}/accounts/{account_id}/transfers" -->
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
  const result = await apexascend.accountTransfers.createTransfer({
    deliverer: {},
  }, "00000000-0000-0000-0000-000000000002", "01H8FB90ZRRFWXB4XC2JPJ1D4Y");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { accountTransfersCreateTransfer } from "@apexfintechsolutions/ascend-sdk/funcs/accountTransfersCreateTransfer.js";

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
  const res = await accountTransfersCreateTransfer(apexascend, {
    deliverer: {},
  }, "00000000-0000-0000-0000-000000000002", "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountTransfersCreateTransfer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                | Example                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `correspondentId`                                                                                                                                                                                          | *string*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The correspondent id.                                                                                                                                                                                      | [object Object]                                                                                                                                                                                            |
| `accountId`                                                                                                                                                                                                | *string*                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                         | The account id.                                                                                                                                                                                            | [object Object]                                                                                                                                                                                            |
| `transferCreate`                                                                                                                                                                                           | [components.TransferCreate](../../models/components/transfercreate.md)                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                         | N/A                                                                                                                                                                                                        |                                                                                                                                                                                                            |
| `requestId`                                                                                                                                                                                                | *string*                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                         | A client-specified ID for the account transfer; no specific pattern is imposed. This field is used for idempotency to ensure that repeated requests with the same ID do not result in duplicate transfers. | [object Object]                                                                                                                                                                                            |
| `options`                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                      |                                                                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                             |                                                                                                                                                                                                            |
| `options.retries`                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                           |                                                                                                                                                                                                            |

### Response

**Promise\<[operations.AccountTransfersCreateTransferResponse](../../models/operations/accounttransferscreatetransferresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 409    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listTransfers

Lists existing transfers using a CEL filter.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AccountTransfers_ListTransfers" method="get" path="/acats/v1/correspondents/{correspondent_id}/accounts/{account_id}/transfers" -->
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
  const result = await apexascend.accountTransfers.listTransfers({
    correspondentId: "00000000-0000-0000-0000-000000000002",
    accountId: "01FAKEACCOUNT",
    pageSize: 25,
    pageToken: "CgwI5uHttgYQyJXO2wESJDAxOTFjOTMxLTA3YjMtYzU0ZC0yMDNmLWU1M2U0OTBkY2FhZRoicmVjZWl2ZXIuYWNjb3VudF9pZCBpbiBbJzEwMDAwQUEnXQ",
    filter: "deliverer.account_number == \"R9AHY8P\"",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { accountTransfersListTransfers } from "@apexfintechsolutions/ascend-sdk/funcs/accountTransfersListTransfers.js";

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
  const res = await accountTransfersListTransfers(apexascend, {
    correspondentId: "00000000-0000-0000-0000-000000000002",
    accountId: "01FAKEACCOUNT",
    pageSize: 25,
    pageToken: "CgwI5uHttgYQyJXO2wESJDAxOTFjOTMxLTA3YjMtYzU0ZC0yMDNmLWU1M2U0OTBkY2FhZRoicmVjZWl2ZXIuYWNjb3VudF9pZCBpbiBbJzEwMDAwQUEnXQ",
    filter: "deliverer.account_number == \"R9AHY8P\"",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountTransfersListTransfers failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.AccountTransfersListTransfersRequest](../../models/operations/accounttransferslisttransfersrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AccountTransfersListTransfersResponse](../../models/operations/accounttransferslisttransfersresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403         | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## acceptTransfer

Accept one side (incoming/outgoing) of an internal Ascend transfer. When both the incoming side and outgoing side of the transfer have been accepted then bookkeeping is done immediately. If neither, or only one side of a transfer is accepted, then both sides of the internal perform bookkeeping one full settlement day after they went into the bookkeeping queue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AccountTransfers_AcceptTransfer" method="post" path="/acats/v1/correspondents/{correspondent_id}/accounts/{account_id}/transfers/{transfer_id}:accept" -->
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
  const result = await apexascend.accountTransfers.acceptTransfer({
    name: "correspondents/00000000-0000-0000-0000-000000000002/accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/transfers/00000000-0000-0000-0000-000000000000",
  }, "00000000-0000-0000-0000-000000000002", "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "00000000-0000-0000-0000-000000000000");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { accountTransfersAcceptTransfer } from "@apexfintechsolutions/ascend-sdk/funcs/accountTransfersAcceptTransfer.js";

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
  const res = await accountTransfersAcceptTransfer(apexascend, {
    name: "correspondents/00000000-0000-0000-0000-000000000002/accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/transfers/00000000-0000-0000-0000-000000000000",
  }, "00000000-0000-0000-0000-000000000002", "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "00000000-0000-0000-0000-000000000000");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountTransfersAcceptTransfer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `correspondentId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The correspondent id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `transferId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The transfer id.                                                                                                                                                               | [object Object]                                                                                                                                                                |
| `acceptTransferRequestCreate`                                                                                                                                                  | [components.AcceptTransferRequestCreate](../../models/components/accepttransferrequestcreate.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AccountTransfersAcceptTransferResponse](../../models/operations/accounttransfersaccepttransferresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403         | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## rejectTransfer

Reject one side (incoming/outgoing) of an internal Ascend transfer. Rejecting one side automatically moves the contra side of the transfer to be rejected as well.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AccountTransfers_RejectTransfer" method="post" path="/acats/v1/correspondents/{correspondent_id}/accounts/{account_id}/transfers/{transfer_id}:reject" -->
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
  const result = await apexascend.accountTransfers.rejectTransfer({
    name: "correspondents/00000000-0000-0000-0000-000000000002/accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/transfers/00000000-0000-0000-0000-000000000000",
  }, "00000000-0000-0000-0000-000000000002", "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "00000000-0000-0000-0000-000000000000");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { accountTransfersRejectTransfer } from "@apexfintechsolutions/ascend-sdk/funcs/accountTransfersRejectTransfer.js";

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
  const res = await accountTransfersRejectTransfer(apexascend, {
    name: "correspondents/00000000-0000-0000-0000-000000000002/accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/transfers/00000000-0000-0000-0000-000000000000",
  }, "00000000-0000-0000-0000-000000000002", "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "00000000-0000-0000-0000-000000000000");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountTransfersRejectTransfer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `correspondentId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The correspondent id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `transferId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The transfer id.                                                                                                                                                               | [object Object]                                                                                                                                                                |
| `rejectTransferRequestCreate`                                                                                                                                                  | [components.RejectTransferRequestCreate](../../models/components/rejecttransferrequestcreate.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AccountTransfersRejectTransferResponse](../../models/operations/accounttransfersrejecttransferresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403         | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getTransfer

Gets an existing transfer

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AccountTransfers_GetTransfer" method="get" path="/acats/v1/correspondents/{correspondent_id}/accounts/{account_id}/transfers/{transfer_id}" -->
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
  const result = await apexascend.accountTransfers.getTransfer("00000000-0000-0000-0000-000000000002", "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "00000000-0000-0000-0000-000000000000");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { accountTransfersGetTransfer } from "@apexfintechsolutions/ascend-sdk/funcs/accountTransfersGetTransfer.js";

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
  const res = await accountTransfersGetTransfer(apexascend, "00000000-0000-0000-0000-000000000002", "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "00000000-0000-0000-0000-000000000000");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountTransfersGetTransfer failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `correspondentId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The correspondent id.                                                                                                                                                          | [object Object]                                                                                                                                                                |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `transferId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The transfer id.                                                                                                                                                               | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AccountTransfersGetTransferResponse](../../models/operations/accounttransfersgettransferresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |