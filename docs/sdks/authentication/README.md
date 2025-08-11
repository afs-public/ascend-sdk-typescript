# Authentication
(*authentication*)

## Overview

### Available Operations

* [generateServiceAccountToken](#generateserviceaccounttoken) - Generate Service Account Token
* [listSigningKeys](#listsigningkeys) - List Signing Keys

## generateServiceAccountToken

Creates an access token for a service account.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Authentication_GenerateServiceAccountToken" method="post" path="/iam/v1/serviceAccounts:generateAccessToken" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend();

async function run() {
  const result = await apexascend.authentication.generateServiceAccountToken({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    jws: "eyJhbGciOiAiUlMyNTYifQ.eyJuYW1lIjogImpkb3VnaCIsIm9yZ2FuaXphdGlvbiI6ICJjb3JyZXNwb25kZW50cy8xMjM0NTY3OC0xMjM0LTEyMzQtMTIzNC0xMjM0NTY3ODkxMDEiLCJkYXRldGltZSI6ICIyMDI0LTAyLTA1VDIxOjAyOjI3LjkwMTE4MFoifQ.IMy3KmYoG8Ppf+7hXN7tm7J4MrNpQLGL7WCWvhh4nZWAVKkluL3/u3KC6hZ6Mb/5p7Y54CgZ68aWT2BcP5y4VtzIZR1Chm5pxbLfgE4aJuk+FnF6K3Gc3bBjOWCL58pxY2aTb0iU/exDEA1cbMDvbCzmY5kRefDvorLOqgUS/tS2MJ2jv4RlZFPlmHv5PtOruJ8xUW19gEgGhsPXYYeSHFTE1ZlaDvyXrKtpOvlf+FVc2RTuEw529LZnzwH4/eJJR3BpSpHyJTjQqiaMT3wzpXXYKfCRqnDkSSKJDzCzTb0/uWK/Lf0uafxPXk5YLdis+dbo1zNQhVVKjwnMpk1vLw",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { authenticationGenerateServiceAccountToken } from "@apexfintechsolutions/ascend-sdk/funcs/authenticationGenerateServiceAccountToken.js";

// Use `ApexascendCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apexascend = new ApexascendCore();

async function run() {
  const res = await authenticationGenerateServiceAccountToken(apexascend, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    jws: "eyJhbGciOiAiUlMyNTYifQ.eyJuYW1lIjogImpkb3VnaCIsIm9yZ2FuaXphdGlvbiI6ICJjb3JyZXNwb25kZW50cy8xMjM0NTY3OC0xMjM0LTEyMzQtMTIzNC0xMjM0NTY3ODkxMDEiLCJkYXRldGltZSI6ICIyMDI0LTAyLTA1VDIxOjAyOjI3LjkwMTE4MFoifQ.IMy3KmYoG8Ppf+7hXN7tm7J4MrNpQLGL7WCWvhh4nZWAVKkluL3/u3KC6hZ6Mb/5p7Y54CgZ68aWT2BcP5y4VtzIZR1Chm5pxbLfgE4aJuk+FnF6K3Gc3bBjOWCL58pxY2aTb0iU/exDEA1cbMDvbCzmY5kRefDvorLOqgUS/tS2MJ2jv4RlZFPlmHv5PtOruJ8xUW19gEgGhsPXYYeSHFTE1ZlaDvyXrKtpOvlf+FVc2RTuEw529LZnzwH4/eJJR3BpSpHyJTjQqiaMT3wzpXXYKfCRqnDkSSKJDzCzTb0/uWK/Lf0uafxPXk5YLdis+dbo1zNQhVVKjwnMpk1vLw",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authenticationGenerateServiceAccountToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.GenerateServiceAccountTokenRequestCreate](../../models/components/generateserviceaccounttokenrequestcreate.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.AuthenticationGenerateServiceAccountTokenSecurity](../../models/operations/authenticationgenerateserviceaccounttokensecurity.md)                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.AuthenticationGenerateServiceAccountTokenResponse](../../models/operations/authenticationgenerateserviceaccounttokenresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 400, 401         | application/json |
| errors.Status    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listSigningKeys

Gets the public signing keys used to verify JSON Web Tokens generated by this service.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="Authentication_ListSigningKeys" method="get" path="/iam/v1/keys" -->
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend();

async function run() {
  const result = await apexascend.authentication.listSigningKeys({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ApexascendCore } from "@apexfintechsolutions/ascend-sdk/core.js";
import { authenticationListSigningKeys } from "@apexfintechsolutions/ascend-sdk/funcs/authenticationListSigningKeys.js";

// Use `ApexascendCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const apexascend = new ApexascendCore();

async function run() {
  const res = await authenticationListSigningKeys(apexascend, {
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("authenticationListSigningKeys failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.AuthenticationListSigningKeysSecurity](../../models/operations/authenticationlistsigningkeyssecurity.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |                                                                                                                                                                                |
| `pageSize`                                                                                                                                                                     | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The number of entries to return in a single page; Default = 100; Maximum = 1000                                                                                                | [object Object]                                                                                                                                                                |
| `pageToken`                                                                                                                                                                    | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | Page token used for pagination; Supplying a page token returns the next page of results                                                                                        | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[operations.AuthenticationListSigningKeysResponse](../../models/operations/authenticationlistsigningkeysresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.Status    | 500              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |