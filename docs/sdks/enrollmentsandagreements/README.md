# EnrollmentsAndAgreements
(*enrollmentsAndAgreements*)

## Overview

### Available Operations

* [enrollAccount](#enrollaccount) - Enroll Account
* [listAvailableEnrollments](#listavailableenrollments) - List Available Enrollments
* [accountsListAvailableEnrollmentsByAccountGroup](#accountslistavailableenrollmentsbyaccountgroup) - List Available Enrollments (by Account Group)
* [deactivateEnrollment](#deactivateenrollment) - Deactivate Enrollment
* [listEnrollments](#listenrollments) - List Account Enrollments
* [affirmAgreements](#affirmagreements) - Affirm Agreements
* [listAgreements](#listagreements) - List Account Agreements
* [listEntitlements](#listentitlements) - List Account Entitlements

## enrollAccount

Adds an Enrollment to an Account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Accounts_EnrollAccount" method="post" path="/accounts/v1/accounts/{account_id}:enroll" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { EnrollmentCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const result = await apexascend.enrollmentsAndAgreements.enrollAccount({
    enrollment: {
      principalApproverId: "02HB7N66WW02WL3B6B9W29K0HW",
      type: EnrollmentCreateType.RegistrationIndividual,
    },
  }, "01HC3MAQ4DR9QN1V8MJ4CN1HMK");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { enrollmentsAndAgreementsEnrollAccount } from "@apexfintechsolutions/ascend-sdk/funcs/enrollmentsAndAgreementsEnrollAccount.js";
import { EnrollmentCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

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
  const res = await enrollmentsAndAgreementsEnrollAccount(apexascend, {
    enrollment: {
      principalApproverId: "02HB7N66WW02WL3B6B9W29K0HW",
      type: EnrollmentCreateType.RegistrationIndividual,
    },
  }, "01HC3MAQ4DR9QN1V8MJ4CN1HMK");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enrollmentsAndAgreementsEnrollAccount failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `enrollAccountRequestCreate`                                                                                                                                                   | [components.EnrollAccountRequestCreate](../../models/components/enrollaccountrequestcreate.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AccountsEnrollAccountResponse](../../models/operations/accountsenrollaccountresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listAvailableEnrollments

Get a list of Enrollments available for an Account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Accounts_ListAvailableEnrollments" method="get" path="/accounts/v1/accounts/{account_id}/availableEnrollments" -->
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
  const result = await apexascend.enrollmentsAndAgreements.listAvailableEnrollments("01HC3MAQ4DR9QN1V8MJ4CN1HMK");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { enrollmentsAndAgreementsListAvailableEnrollments } from "@apexfintechsolutions/ascend-sdk/funcs/enrollmentsAndAgreementsListAvailableEnrollments.js";

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
  const res = await enrollmentsAndAgreementsListAvailableEnrollments(apexascend, "01HC3MAQ4DR9QN1V8MJ4CN1HMK");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enrollmentsAndAgreementsListAvailableEnrollments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                     | The account id.                                                                                                                                                                                                                                        | [object Object]                                                                                                                                                                                                                                        |
| `pageSize`                                                                                                                                                                                                                                             | *number*                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                     | The maximum number of available enrollments to return. The service may return fewer than this value. The maximum value is 100; values above 100 will be coerced to 100.                                                                                | [object Object]                                                                                                                                                                                                                                        |
| `pageToken`                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                     | A page token, received from a previous `ListAvailableEnrollments` call. Provide this to retrieve the subsequent page.<br/><br/> When paginating, all other parameters provided to `ListAvailableEnrollments` must match the call that provided the page token. | [object Object]                                                                                                                                                                                                                                        |
| `filter`                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                     | A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:<br/> `enrollment_type`                                    | [object Object]                                                                                                                                                                                                                                        |
| `options`                                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                                  |                                                                                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                         |                                                                                                                                                                                                                                                        |
| `options.retries`                                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                       |                                                                                                                                                                                                                                                        |

### Response

**Promise\<[operations.AccountsListAvailableEnrollmentsResponse](../../models/operations/accountslistavailableenrollmentsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## accountsListAvailableEnrollmentsByAccountGroup

Get a list of Enrollments available for an Account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Accounts_ListAvailableEnrollments_1" method="get" path="/accounts/v1/accountGroups/{accountGroup_id}/availableEnrollments" -->
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
  const result = await apexascend.enrollmentsAndAgreements.accountsListAvailableEnrollmentsByAccountGroup("01HC3MAQ4DR9QN1V8MJ4CN1HMK");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { enrollmentsAndAgreementsAccountsListAvailableEnrollmentsByAccountGroup } from "@apexfintechsolutions/ascend-sdk/funcs/enrollmentsAndAgreementsAccountsListAvailableEnrollmentsByAccountGroup.js";

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
  const res = await enrollmentsAndAgreementsAccountsListAvailableEnrollmentsByAccountGroup(apexascend, "01HC3MAQ4DR9QN1V8MJ4CN1HMK");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enrollmentsAndAgreementsAccountsListAvailableEnrollmentsByAccountGroup failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountGroupId`                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                     | The accountGroup id.                                                                                                                                                                                                                                   | [object Object]                                                                                                                                                                                                                                        |
| `pageSize`                                                                                                                                                                                                                                             | *number*                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                     | The maximum number of available enrollments to return. The service may return fewer than this value. The maximum value is 100; values above 100 will be coerced to 100.                                                                                | [object Object]                                                                                                                                                                                                                                        |
| `pageToken`                                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                     | A page token, received from a previous `ListAvailableEnrollments` call. Provide this to retrieve the subsequent page.<br/><br/> When paginating, all other parameters provided to `ListAvailableEnrollments` must match the call that provided the page token. | [object Object]                                                                                                                                                                                                                                        |
| `filter`                                                                                                                                                                                                                                               | *string*                                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                                     | A CEL string to filter results; See the [CEL Search](https://developer.apexclearing.com/apex-fintech-solutions/docs/cel-search) page in Guides for more information; Filter options include:<br/> `enrollment_type`                                    | [object Object]                                                                                                                                                                                                                                        |
| `options`                                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                                  |                                                                                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                         |                                                                                                                                                                                                                                                        |
| `options.retries`                                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                       |                                                                                                                                                                                                                                                        |

### Response

**Promise\<[operations.AccountsListAvailableEnrollments1Response](../../models/operations/accountslistavailableenrollments1response.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deactivateEnrollment

Deactivates an Account Enrollment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Accounts_DeactivateEnrollment" method="post" path="/accounts/v1/accounts/{account_id}/enrollments:deactivate" -->
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
  const result = await apexascend.enrollmentsAndAgreements.deactivateEnrollment({}, "01HC3MAQ4DR9QN1V8MJ4CN1HMK");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { enrollmentsAndAgreementsDeactivateEnrollment } from "@apexfintechsolutions/ascend-sdk/funcs/enrollmentsAndAgreementsDeactivateEnrollment.js";

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
  const res = await enrollmentsAndAgreementsDeactivateEnrollment(apexascend, {}, "01HC3MAQ4DR9QN1V8MJ4CN1HMK");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enrollmentsAndAgreementsDeactivateEnrollment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `deactivateEnrollmentRequestCreate`                                                                                                                                            | [components.DeactivateEnrollmentRequestCreate](../../models/components/deactivateenrollmentrequestcreate.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AccountsDeactivateEnrollmentResponse](../../models/operations/accountsdeactivateenrollmentresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listEnrollments

Gets a list of Enrollments for an Account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Accounts_ListEnrollments" method="get" path="/accounts/v1/accounts/{account_id}/enrollments" -->
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
  const result = await apexascend.enrollmentsAndAgreements.listEnrollments("01HC3MAQ4DR9QN1V8MJ4CN1HMK");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { enrollmentsAndAgreementsListEnrollments } from "@apexfintechsolutions/ascend-sdk/funcs/enrollmentsAndAgreementsListEnrollments.js";

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
  const res = await enrollmentsAndAgreementsListEnrollments(apexascend, "01HC3MAQ4DR9QN1V8MJ4CN1HMK");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enrollmentsAndAgreementsListEnrollments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                          | Example                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                   | The account id.                                                                                                                                                                                                                      | [object Object]                                                                                                                                                                                                                      |
| `pageSize`                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                   | The maximum number of enrollments to return.                                                                                                                                                                                         | [object Object]                                                                                                                                                                                                                      |
| `pageToken`                                                                                                                                                                                                                          | *string*                                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                                   | A page token, received from a previous `ListEnrollments` call. Provide this to retrieve the subsequent page.<br/><br/> When paginating, all other parameters provided to `ListEnrollments` must match the call that provided the page token. | [object Object]                                                                                                                                                                                                                      |
| `options`                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                |                                                                                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                       |                                                                                                                                                                                                                                      |
| `options.retries`                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                     |                                                                                                                                                                                                                                      |

### Response

**Promise\<[operations.AccountsListEnrollmentsResponse](../../models/operations/accountslistenrollmentsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## affirmAgreements

Affirm Agreements for an Account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Accounts_AffirmAgreements" method="post" path="/accounts/v1/accounts/{account_id}/agreements:affirm" -->
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
  const result = await apexascend.enrollmentsAndAgreements.affirmAgreements({
    accountAgreementIds: [
      "fa2f181c-f2fb-4bc2-b75a-79302c634ae5",
    ],
  }, "01HC3MAQ4DR9QN1V8MJ4CN1HMK");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { enrollmentsAndAgreementsAffirmAgreements } from "@apexfintechsolutions/ascend-sdk/funcs/enrollmentsAndAgreementsAffirmAgreements.js";

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
  const res = await enrollmentsAndAgreementsAffirmAgreements(apexascend, {
    accountAgreementIds: [
      "fa2f181c-f2fb-4bc2-b75a-79302c634ae5",
    ],
  }, "01HC3MAQ4DR9QN1V8MJ4CN1HMK");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enrollmentsAndAgreementsAffirmAgreements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The account id.                                                                                                                                                                | [object Object]                                                                                                                                                                |
| `affirmAgreementsRequestCreate`                                                                                                                                                | [components.AffirmAgreementsRequestCreate](../../models/components/affirmagreementsrequestcreate.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AccountsAffirmAgreementsResponse](../../models/operations/accountsaffirmagreementsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listAgreements

Gets a list of Agreements on an Account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Accounts_ListAgreements" method="get" path="/accounts/v1/accounts/{account_id}/agreements" -->
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
  const result = await apexascend.enrollmentsAndAgreements.listAgreements("01HC3MAQ4DR9QN1V8MJ4CN1HMK");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { enrollmentsAndAgreementsListAgreements } from "@apexfintechsolutions/ascend-sdk/funcs/enrollmentsAndAgreementsListAgreements.js";

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
  const res = await enrollmentsAndAgreementsListAgreements(apexascend, "01HC3MAQ4DR9QN1V8MJ4CN1HMK");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enrollmentsAndAgreementsListAgreements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                 | The account id.                                                                                                                                                                                                                    | [object Object]                                                                                                                                                                                                                    |
| `pageSize`                                                                                                                                                                                                                         | *number*                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                 | The maximum number of agreements to return.                                                                                                                                                                                        | [object Object]                                                                                                                                                                                                                    |
| `pageToken`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                 | A page token, received from a previous `ListAgreements` call. Provide this to retrieve the subsequent page.<br/><br/> When paginating, all other parameters provided to `ListAgreements` must match the call that provided the page token. | [object Object]                                                                                                                                                                                                                    |
| `options`                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                              |                                                                                                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                     |                                                                                                                                                                                                                                    |
| `options.retries`                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                   |                                                                                                                                                                                                                                    |

### Response

**Promise\<[operations.AccountsListAgreementsResponse](../../models/operations/accountslistagreementsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listEntitlements

Gets a list of Entitlements for an Account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Accounts_ListEntitlements" method="get" path="/accounts/v1/accounts/{account_id}/entitlements" -->
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
  const result = await apexascend.enrollmentsAndAgreements.listEntitlements("01HC3MAQ4DR9QN1V8MJ4CN1HMK");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { enrollmentsAndAgreementsListEntitlements } from "@apexfintechsolutions/ascend-sdk/funcs/enrollmentsAndAgreementsListEntitlements.js";

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
  const res = await enrollmentsAndAgreementsListEntitlements(apexascend, "01HC3MAQ4DR9QN1V8MJ4CN1HMK");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("enrollmentsAndAgreementsListEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            | Example                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                     | The account id.                                                                                                                                                                                                                        | [object Object]                                                                                                                                                                                                                        |
| `pageSize`                                                                                                                                                                                                                             | *number*                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                     | The maximum number of entitlements to return.                                                                                                                                                                                          | [object Object]                                                                                                                                                                                                                        |
| `pageToken`                                                                                                                                                                                                                            | *string*                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                     | A page token, received from a previous `ListEntitlements` call. Provide this to retrieve the subsequent page.<br/><br/> When paginating, all other parameters provided to `ListEntitlements` must match the call that provided the page token. | [object Object]                                                                                                                                                                                                                        |
| `options`                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                  |                                                                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                         |                                                                                                                                                                                                                                        |
| `options.retries`                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                       |                                                                                                                                                                                                                                        |

### Response

**Promise\<[operations.AccountsListEntitlementsResponse](../../models/operations/accountslistentitlementsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 403, 404    | application/json |
| errors.Status    | 500, 503         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |