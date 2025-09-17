# ScheduleTransfers
(*scheduleTransfers*)

## Overview

### Available Operations

* [listScheduleSummaries](#listschedulesummaries) - List Schedule Summaries
* [createAchDepositSchedule](#createachdepositschedule) - Create ACH Deposit Schedule
* [listAchDepositSchedules](#listachdepositschedules) - List ACH Deposit Schedules
* [getAchDepositSchedule](#getachdepositschedule) - Get ACH Deposit Schedule
* [updateAchDepositSchedule](#updateachdepositschedule) - Update ACH Deposit Schedules
* [cancelAchDepositSchedule](#cancelachdepositschedule) - Cancel ACH Deposit Schedule
* [createAchWithdrawalSchedule](#createachwithdrawalschedule) - Create ACH Withdrawal Schedule
* [listAchWithdrawalSchedules](#listachwithdrawalschedules) - List ACH Withdrawal Schedules
* [getAchWithdrawalSchedule](#getachwithdrawalschedule) - Get ACH Withdrawal Schedule
* [updateAchWithdrawalSchedule](#updateachwithdrawalschedule) - Update ACH Withdrawal Schedule
* [cancelAchWithdrawalSchedule](#cancelachwithdrawalschedule) - Cancel ACH Withdrawal Schedule
* [createWireWithdrawalSchedule](#createwirewithdrawalschedule) - Create Wire Withdrawal Schedule
* [listWireWithdrawalSchedules](#listwirewithdrawalschedules) - List Wire Withdrawal Schedules
* [getWireWithdrawalSchedule](#getwirewithdrawalschedule) - Get Wire Withdrawal Schedule
* [updateWireWithdrawalSchedule](#updatewirewithdrawalschedule) - Update Wire Withdrawal Schedule
* [cancelWireWithdrawalSchedule](#cancelwirewithdrawalschedule) - Cancel Wire Withdrawal Schedule

## listScheduleSummaries

Lists transfer schedule summaries that match the filter in the request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="TransferScheduleSummaries_ListScheduleSummaries" method="get" path="/transfers/v1/schedules" -->
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
  const result = await apexascend.scheduleTransfers.listScheduleSummaries();

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersListScheduleSummaries } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersListScheduleSummaries.js";

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
  const res = await scheduleTransfersListScheduleSummaries(apexascend);
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("scheduleTransfersListScheduleSummaries failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `filter`                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                   | A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:<br/> `account`<br/> `mechanism`<br/> `direction`<br/> `state`<br/> `start_date`<br/> `end_date` | [object Object]                                                                                                                                                                                                                                                      |
| `pageSize`                                                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                   | The maximum number of schedules to return. The service may return fewer than this value. If unspecified, at most 25 schedules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.                                                | [object Object]                                                                                                                                                                                                                                                      |
| `pageToken`                                                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                                                   | The page token to request                                                                                                                                                                                                                                            | [object Object]                                                                                                                                                                                                                                                      |
| `options`                                                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                       |                                                                                                                                                                                                                                                                      |
| `options.retries`                                                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                      |

### Response

**Promise\<[operations.TransferScheduleSummariesListScheduleSummariesResponse](../../models/operations/transferschedulesummarieslistschedulesummariesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createAchDepositSchedule

Creates an ACH deposit transfer schedule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchDepositSchedules_CreateAchDepositSchedule" method="post" path="/transfers/v1/accounts/{account_id}/achDepositSchedules" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { TimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.scheduleTransfers.createAchDepositSchedule({
    bankRelationship: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
    scheduleDetails: {
      amount: {},
      clientScheduleId: "ABC-123",
      scheduleProperties: {
        startDate: {},
        timeUnit: TimeUnit.Month,
        unitMultiplier: 1,
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
import { scheduleTransfersCreateAchDepositSchedule } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersCreateAchDepositSchedule.js";
import { TimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await scheduleTransfersCreateAchDepositSchedule(apexascend, {
    bankRelationship: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
    scheduleDetails: {
      amount: {},
      clientScheduleId: "ABC-123",
      scheduleProperties: {
        startDate: {},
        timeUnit: TimeUnit.Month,
        unitMultiplier: 1,
      },
    },
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersCreateAchDepositSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achDepositScheduleCreate`                                                                                                                                                     | [components.AchDepositScheduleCreate](../../models/components/achdepositschedulecreate.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchDepositSchedulesCreateAchDepositScheduleResponse](../../models/operations/achdepositschedulescreateachdepositscheduleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 409    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listAchDepositSchedules

Return a list of ACH deposit schedules for the specified account and filter params

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchDepositSchedules_ListAchDepositSchedules" method="get" path="/transfers/v1/accounts/{account_id}/achDepositSchedules" -->
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
  const result = await apexascend.scheduleTransfers.listAchDepositSchedules("01H8FB90ZRRFWXB4XC2JPJ1D4Y");

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersListAchDepositSchedules } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersListAchDepositSchedules.js";

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
  const res = await scheduleTransfersListAchDepositSchedules(apexascend, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("scheduleTransfersListAchDepositSchedules failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              | The account id.                                                                                                                                                                                                                 | [object Object]                                                                                                                                                                                                                 |
| `filter`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:<br/> `state`<br/> `start_date`<br/> `end_date` | [object Object]                                                                                                                                                                                                                 |
| `pageSize`                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | The maximum number of schedules to return. The service may return fewer than this value. If unspecified, at most 25 schedules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.           | [object Object]                                                                                                                                                                                                                 |
| `pageToken`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | The page token to request                                                                                                                                                                                                       | [object Object]                                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                           |                                                                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                  |                                                                                                                                                                                                                                 |
| `options.retries`                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                |                                                                                                                                                                                                                                 |

### Response

**Promise\<[operations.AchDepositSchedulesListAchDepositSchedulesResponse](../../models/operations/achdepositscheduleslistachdepositschedulesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getAchDepositSchedule

Gets an ACH deposit transfer schedule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchDepositSchedules_GetAchDepositSchedule" method="get" path="/transfers/v1/accounts/{account_id}/achDepositSchedules/{achDepositSchedule_id}" -->
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
  const result = await apexascend.scheduleTransfers.getAchDepositSchedule("01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersGetAchDepositSchedule } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersGetAchDepositSchedule.js";

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
  const res = await scheduleTransfersGetAchDepositSchedule(apexascend, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersGetAchDepositSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achDepositScheduleId`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The achDepositSchedule id.                                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchDepositSchedulesGetAchDepositScheduleResponse](../../models/operations/achdepositschedulesgetachdepositscheduleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateAchDepositSchedule

Updates the amount of an ACH deposit transfer schedule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchDepositSchedules_UpdateAchDepositSchedule" method="patch" path="/transfers/v1/accounts/{account_id}/achDepositSchedules/{achDepositSchedule_id}" -->
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
  const result = await apexascend.scheduleTransfers.updateAchDepositSchedule({}, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersUpdateAchDepositSchedule } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersUpdateAchDepositSchedule.js";

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
  const res = await scheduleTransfersUpdateAchDepositSchedule(apexascend, {}, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersUpdateAchDepositSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achDepositScheduleId`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The achDepositSchedule id.                                                                                                                                                     | [object Object]                                                                                                                                                                |
| `achDepositScheduleUpdate`                                                                                                                                                     | [components.AchDepositScheduleUpdate](../../models/components/achdepositscheduleupdate.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `updateMask`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A field mask representing the update. Note: only the 'schedule_details.amount' field of a schedule is currently updatable                                                      |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchDepositSchedulesUpdateAchDepositScheduleResponse](../../models/operations/achdepositschedulesupdateachdepositscheduleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cancelAchDepositSchedule

Cancels an ACH deposit transfer schedule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchDepositSchedules_CancelAchDepositSchedule" method="post" path="/transfers/v1/accounts/{account_id}/achDepositSchedules/{achDepositSchedule_id}:cancel" -->
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
  const result = await apexascend.scheduleTransfers.cancelAchDepositSchedule({
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDepositSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersCancelAchDepositSchedule } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersCancelAchDepositSchedule.js";

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
  const res = await scheduleTransfersCancelAchDepositSchedule(apexascend, {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDepositSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersCancelAchDepositSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achDepositScheduleId`                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The achDepositSchedule id.                                                                                                                                                     | [object Object]                                                                                                                                                                |
| `cancelAchDepositScheduleRequestCreate`                                                                                                                                        | [components.CancelAchDepositScheduleRequestCreate](../../models/components/cancelachdepositschedulerequestcreate.md)                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchDepositSchedulesCancelAchDepositScheduleResponse](../../models/operations/achdepositschedulescancelachdepositscheduleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createAchWithdrawalSchedule

Creates an ACH withdrawal transfer schedule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchWithdrawalSchedules_CreateAchWithdrawalSchedule" method="post" path="/transfers/v1/accounts/{account_id}/achWithdrawalSchedules" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { TimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.scheduleTransfers.createAchWithdrawalSchedule({
    bankRelationship: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
    scheduleDetails: {
      clientScheduleId: "ABC-123",
      scheduleProperties: {
        startDate: {},
        timeUnit: TimeUnit.Month,
        unitMultiplier: 1,
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
import { scheduleTransfersCreateAchWithdrawalSchedule } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersCreateAchWithdrawalSchedule.js";
import { TimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await scheduleTransfersCreateAchWithdrawalSchedule(apexascend, {
    bankRelationship: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
    scheduleDetails: {
      clientScheduleId: "ABC-123",
      scheduleProperties: {
        startDate: {},
        timeUnit: TimeUnit.Month,
        unitMultiplier: 1,
      },
    },
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersCreateAchWithdrawalSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achWithdrawalScheduleCreate`                                                                                                                                                  | [components.AchWithdrawalScheduleCreate](../../models/components/achwithdrawalschedulecreate.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchWithdrawalSchedulesCreateAchWithdrawalScheduleResponse](../../models/operations/achwithdrawalschedulescreateachwithdrawalscheduleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 409    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listAchWithdrawalSchedules

Return a list of ACH withdrawal schedules for the specified account and filter params

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchWithdrawalSchedules_ListAchWithdrawalSchedules" method="get" path="/transfers/v1/accounts/{account_id}/achWithdrawalSchedules" -->
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
  const result = await apexascend.scheduleTransfers.listAchWithdrawalSchedules("01H8FB90ZRRFWXB4XC2JPJ1D4Y");

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersListAchWithdrawalSchedules } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersListAchWithdrawalSchedules.js";

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
  const res = await scheduleTransfersListAchWithdrawalSchedules(apexascend, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("scheduleTransfersListAchWithdrawalSchedules failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              | The account id.                                                                                                                                                                                                                 | [object Object]                                                                                                                                                                                                                 |
| `filter`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:<br/> `state`<br/> `start_date`<br/> `end_date` | [object Object]                                                                                                                                                                                                                 |
| `pageSize`                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | The maximum number of schedules to return. The service may return fewer than this value. If unspecified, at most 25 schedules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.           | [object Object]                                                                                                                                                                                                                 |
| `pageToken`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | The page token to request                                                                                                                                                                                                       | [object Object]                                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                           |                                                                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                  |                                                                                                                                                                                                                                 |
| `options.retries`                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                |                                                                                                                                                                                                                                 |

### Response

**Promise\<[operations.AchWithdrawalSchedulesListAchWithdrawalSchedulesResponse](../../models/operations/achwithdrawalscheduleslistachwithdrawalschedulesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getAchWithdrawalSchedule

Gets an ACH withdrawal transfer schedule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchWithdrawalSchedules_GetAchWithdrawalSchedule" method="get" path="/transfers/v1/accounts/{account_id}/achWithdrawalSchedules/{achWithdrawalSchedule_id}" -->
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
  const result = await apexascend.scheduleTransfers.getAchWithdrawalSchedule("01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersGetAchWithdrawalSchedule } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersGetAchWithdrawalSchedule.js";

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
  const res = await scheduleTransfersGetAchWithdrawalSchedule(apexascend, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersGetAchWithdrawalSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achWithdrawalScheduleId`                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The achWithdrawalSchedule id.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchWithdrawalSchedulesGetAchWithdrawalScheduleResponse](../../models/operations/achwithdrawalschedulesgetachwithdrawalscheduleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateAchWithdrawalSchedule

Updates the amount of an ACH withdrawal transfer schedule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchWithdrawalSchedules_UpdateAchWithdrawalSchedule" method="patch" path="/transfers/v1/accounts/{account_id}/achWithdrawalSchedules/{achWithdrawalSchedule_id}" -->
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
  const result = await apexascend.scheduleTransfers.updateAchWithdrawalSchedule({}, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersUpdateAchWithdrawalSchedule } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersUpdateAchWithdrawalSchedule.js";

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
  const res = await scheduleTransfersUpdateAchWithdrawalSchedule(apexascend, {}, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersUpdateAchWithdrawalSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achWithdrawalScheduleId`                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The achWithdrawalSchedule id.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `achWithdrawalScheduleUpdate`                                                                                                                                                  | [components.AchWithdrawalScheduleUpdate](../../models/components/achwithdrawalscheduleupdate.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `updateMask`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A field mask representing the update. Note: only the 'schedule_details.amount' field of a schedule is currently updatable                                                      |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchWithdrawalSchedulesUpdateAchWithdrawalScheduleResponse](../../models/operations/achwithdrawalschedulesupdateachwithdrawalscheduleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cancelAchWithdrawalSchedule

Cancels an ACH withdrawal transfer schedule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="AchWithdrawalSchedules_CancelAchWithdrawalSchedule" method="post" path="/transfers/v1/accounts/{account_id}/achWithdrawalSchedules/{achWithdrawalSchedule_id}:cancel" -->
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
  const result = await apexascend.scheduleTransfers.cancelAchWithdrawalSchedule({
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersCancelAchWithdrawalSchedule } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersCancelAchWithdrawalSchedule.js";

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
  const res = await scheduleTransfersCancelAchWithdrawalSchedule(apexascend, {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersCancelAchWithdrawalSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `achWithdrawalScheduleId`                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The achWithdrawalSchedule id.                                                                                                                                                  | [object Object]                                                                                                                                                                |
| `cancelAchWithdrawalScheduleRequestCreate`                                                                                                                                     | [components.CancelAchWithdrawalScheduleRequestCreate](../../models/components/cancelachwithdrawalschedulerequestcreate.md)                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AchWithdrawalSchedulesCancelAchWithdrawalScheduleResponse](../../models/operations/achwithdrawalschedulescancelachwithdrawalscheduleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## createWireWithdrawalSchedule

Creates a Wire withdrawal transfer schedule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="WireWithdrawalSchedules_CreateWireWithdrawalSchedule" method="post" path="/transfers/v1/accounts/{account_id}/wireWithdrawalSchedules" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { RecipientBankBankIdCreateType, TimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.scheduleTransfers.createWireWithdrawalSchedule({
    beneficiary: {
      account: "73849218650987",
    },
    recipientBank: {
      bankId: {
        id: "ABNANL2AXXX",
        type: RecipientBankBankIdCreateType.Bic,
      },
    },
    scheduleDetails: {
      clientScheduleId: "ABC-123",
      scheduleProperties: {
        startDate: {},
        timeUnit: TimeUnit.Month,
        unitMultiplier: 1,
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
import { scheduleTransfersCreateWireWithdrawalSchedule } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersCreateWireWithdrawalSchedule.js";
import { RecipientBankBankIdCreateType, TimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await scheduleTransfersCreateWireWithdrawalSchedule(apexascend, {
    beneficiary: {
      account: "73849218650987",
    },
    recipientBank: {
      bankId: {
        id: "ABNANL2AXXX",
        type: RecipientBankBankIdCreateType.Bic,
      },
    },
    scheduleDetails: {
      clientScheduleId: "ABC-123",
      scheduleProperties: {
        startDate: {},
        timeUnit: TimeUnit.Month,
        unitMultiplier: 1,
      },
    },
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersCreateWireWithdrawalSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `wireWithdrawalScheduleCreate`                                                                                                                                                 | [components.WireWithdrawalScheduleCreate](../../models/components/wirewithdrawalschedulecreate.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.WireWithdrawalSchedulesCreateWireWithdrawalScheduleResponse](../../models/operations/wirewithdrawalschedulescreatewirewithdrawalscheduleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 409    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listWireWithdrawalSchedules

Return a list of Wire withdrawal schedules for the specified account and filter params

### Example Usage

<!-- UsageSnippet language="typescript" operationID="WireWithdrawalSchedules_ListWireWithdrawalSchedules" method="get" path="/transfers/v1/accounts/{account_id}/wireWithdrawalSchedules" -->
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
  const result = await apexascend.scheduleTransfers.listWireWithdrawalSchedules("01H8FB90ZRRFWXB4XC2JPJ1D4Y");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersListWireWithdrawalSchedules } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersListWireWithdrawalSchedules.js";

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
  const res = await scheduleTransfersListWireWithdrawalSchedules(apexascend, "01H8FB90ZRRFWXB4XC2JPJ1D4Y");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersListWireWithdrawalSchedules failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     | Example                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                              | The account id.                                                                                                                                                                                                                 | [object Object]                                                                                                                                                                                                                 |
| `filter`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:<br/> `state`<br/> `start_date`<br/> `end_date` | [object Object]                                                                                                                                                                                                                 |
| `pageSize`                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | The maximum number of schedules to return. The service may return fewer than this value. If unspecified, at most 25 schedules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.           | [object Object]                                                                                                                                                                                                                 |
| `pageToken`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              | The page token to request                                                                                                                                                                                                       | [object Object]                                                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                       | RequestOptions                                                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                                              | Used to set various options for making HTTP requests.                                                                                                                                                                           |                                                                                                                                                                                                                                 |
| `options.fetchOptions`                                                                                                                                                                                                          | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                              | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                  |                                                                                                                                                                                                                                 |
| `options.retries`                                                                                                                                                                                                               | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                |                                                                                                                                                                                                                                 |

### Response

**Promise\<[operations.WireWithdrawalSchedulesListWireWithdrawalSchedulesResponse](../../models/operations/wirewithdrawalscheduleslistwirewithdrawalschedulesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getWireWithdrawalSchedule

Gets a Wire withdrawal transfer schedule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="WireWithdrawalSchedules_GetWireWithdrawalSchedule" method="get" path="/transfers/v1/accounts/{account_id}/wireWithdrawalSchedules/{wireWithdrawalSchedule_id}" -->
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
  const result = await apexascend.scheduleTransfers.getWireWithdrawalSchedule("01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersGetWireWithdrawalSchedule } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersGetWireWithdrawalSchedule.js";

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
  const res = await scheduleTransfersGetWireWithdrawalSchedule(apexascend, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersGetWireWithdrawalSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `wireWithdrawalScheduleId`                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The wireWithdrawalSchedule id.                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.WireWithdrawalSchedulesGetWireWithdrawalScheduleResponse](../../models/operations/wirewithdrawalschedulesgetwirewithdrawalscheduleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateWireWithdrawalSchedule

Updates the amount of a Wire withdrawal transfer schedule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="WireWithdrawalSchedules_UpdateWireWithdrawalSchedule" method="patch" path="/transfers/v1/accounts/{account_id}/wireWithdrawalSchedules/{wireWithdrawalSchedule_id}" -->
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
  const result = await apexascend.scheduleTransfers.updateWireWithdrawalSchedule({}, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersUpdateWireWithdrawalSchedule } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersUpdateWireWithdrawalSchedule.js";

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
  const res = await scheduleTransfersUpdateWireWithdrawalSchedule(apexascend, {}, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersUpdateWireWithdrawalSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `wireWithdrawalScheduleId`                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The wireWithdrawalSchedule id.                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `wireWithdrawalScheduleUpdate`                                                                                                                                                 | [components.WireWithdrawalScheduleUpdate](../../models/components/wirewithdrawalscheduleupdate.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `updateMask`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | A field mask representing the update. Note: only the 'schedule_details.amount' field of a schedule is currently updatable                                                      | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.WireWithdrawalSchedulesUpdateWireWithdrawalScheduleResponse](../../models/operations/wirewithdrawalschedulesupdatewirewithdrawalscheduleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## cancelWireWithdrawalSchedule

Cancels a Wire withdrawal transfer schedule

### Example Usage

<!-- UsageSnippet language="typescript" operationID="WireWithdrawalSchedules_CancelWireWithdrawalSchedule" method="post" path="/transfers/v1/accounts/{account_id}/wireWithdrawalSchedules/{wireWithdrawalSchedule_id}:cancel" -->
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
  const result = await apexascend.scheduleTransfers.cancelWireWithdrawalSchedule({
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireWithdrawalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { scheduleTransfersCancelWireWithdrawalSchedule } from "@apexfintechsolutions/ascend-sdk/funcs/scheduleTransfersCancelWireWithdrawalSchedule.js";

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
  const res = await scheduleTransfersCancelWireWithdrawalSchedule(apexascend, {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireWithdrawalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  }, "01H8FB90ZRRFWXB4XC2JPJ1D4Y", "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("scheduleTransfersCancelWireWithdrawalSchedule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `wireWithdrawalScheduleId`                                                                                                                                                     | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The wireWithdrawalSchedule id.                                                                                                                                                 | [object Object]                                                                                                                                                                |
| `cancelWireWithdrawalScheduleRequestCreate`                                                                                                                                    | [components.CancelWireWithdrawalScheduleRequestCreate](../../models/components/cancelwirewithdrawalschedulerequestcreate.md)                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.WireWithdrawalSchedulesCancelWireWithdrawalScheduleResponse](../../models/operations/wirewithdrawalschedulescancelwirewithdrawalscheduleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |