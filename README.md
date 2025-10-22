# Introducing the Apex Typescript SDK

In today's fast-paced digital ecosystem, developers need tools that not only streamline the development process but also unlock new possibilities for innovation and efficiency.

Enter the Apex Typescript SDK, a cutting-edge software development kit designed to empower fintech app developers like never before.
With our SDK, you can more easily integrate new account creation, optimize trading, and elevate your applications with realtime buying power, all through a seamless SDK interface.

Whether you're building complex, data-driven platforms or simplified, user-centric applications, Apex Typescript SDK was created to offer the flexibility, power, and ease of use to bring your visions to life faster and more effectively.
Join us in redefining the boundaries of what your applications can achieve.
Start your journey with Apex today.

## SDK Installation

### NPM

```bash
npm add @apexfintechsolutions/ascend-sdk
```

### PNPM

```bash
pnpm add @apexfintechsolutions/ascend-sdk
```

### Bun

```bash
bun add @apexfintechsolutions/ascend-sdk
```

### Yarn

```bash
yarn add @apexfintechsolutions/ascend-sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

<!-- No SDK Installation [installation] -->

## Supported JavaScript Runtimes

This SDK is intended to be used in JavaScript runtimes that support the following features:

* [Web Fetch API][web-fetch]
* [Web Streams API](web-streams) and in particular `ReadableStream`
* [Async iterables][async-iter] using `Symbol.asyncIterator`

[web-fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[web-streams]: https://developer.mozilla.org/en-US/docs/Web/API/Streams_API
[async-iter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols

Runtime environments that are explicitly supported are:

- Evergreen browsers which include: Chrome, Safari, Edge, Firefox
- Node.js active and maintenance LTS releases
    - Currently, this is v18 and v20
- Bun v1 and above
- Deno v1.39
    - Note that Deno does not currently have native support for streaming file uploads backed by the filesystem ([issue link][deno-file-streaming])

[deno-file-streaming]: https://github.com/denoland/deno/issues/11018

<!-- No Requirements [requirements] -->

## Initializing the SDK

The following sample shows how to initialise the SDK, using the API Key and Service Account Credentials you received during sign-up:
```typescript
import {Apexascend} from "@apexfintechsolutions/ascend-sdk";

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
    // With an instance of the SDK, invoke any operation e.g.
    let resp = await apexascend.accountCreation.getAccount("VALID_ACCOUNT_ID");
    console.log(resp);
}

run();
```

<!-- No SDK Example Usage [usage] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ApexascendError`](./src/models/errors/apexascenderror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property                  | Type       | Description                                                                             |
| ------------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`           | `string`   | Error message                                                                           |
| `error.httpMeta.response` | `Response` | HTTP response. Access to headers and more.                                              |
| `error.httpMeta.request`  | `Request`  | HTTP request. Access to headers and more.                                               |
| `error.data$`             |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import * as errors from "@apexfintechsolutions/ascend-sdk/models/errors";

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
  try {
    const result = await apexascend.accountCreation.getAccount(
      "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
    );

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.ApexascendError) {
      console.log(error.message);
      console.log(error.httpMeta.response.status);
      console.log(error.httpMeta.response.headers);
      console.log(error.httpMeta.request);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.Status) {
        console.log(error.data$.code); // number
        console.log(error.data$.details); // Any[]
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`ApexascendError`](./src/models/errors/apexascenderror.ts): The base class for HTTP error responses.
  * [`Status`](./src/models/errors/status.ts): The status message serves as the general-purpose service error message. Each status message includes a gRPC error code, error message, and error details.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`ApexascendError`](./src/models/errors/apexascenderror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name   | Server                     | Description                |
| ------ | -------------------------- | -------------------------- |
| `uat`  | `https://uat.apexapis.com` | our uat environment        |
| `prod` | `https://api.apexapis.com` | our production environment |
| `sbx`  | `https://sbx.apexapis.com` | our sandbox environment    |

#### Example

```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend({
  server: "sbx",
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
  const result = await apexascend.accountCreation.getAccount(
    "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
  );

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend({
  serverURL: "https://uat.apexapis.com",
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
  const result = await apexascend.accountCreation.getAccount(
    "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
  );

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";
import { HTTPClient } from "@apexfintechsolutions/ascend-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Apexascend({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- No Authentication [security] -->

<!-- No Summary [summary] -->

<!-- No Table of Contents [toc] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accountCreation](docs/sdks/accountcreation/README.md)

* [createAccount](docs/sdks/accountcreation/README.md#createaccount) - Create Account
* [getAccount](docs/sdks/accountcreation/README.md#getaccount) - Get Account

### [accountManagement](docs/sdks/accountmanagement/README.md)

* [listAccounts](docs/sdks/accountmanagement/README.md#listaccounts) - List Accounts
* [updateAccount](docs/sdks/accountmanagement/README.md#updateaccount) - Update Account
* [addParty](docs/sdks/accountmanagement/README.md#addparty) - Add Party
* [updateParty](docs/sdks/accountmanagement/README.md#updateparty) - Update Party
* [replaceParty](docs/sdks/accountmanagement/README.md#replaceparty) - Replace Party
* [removeParty](docs/sdks/accountmanagement/README.md#removeparty) - Remove Party
* [closeAccount](docs/sdks/accountmanagement/README.md#closeaccount) - Close Account
* [createTrustedContact](docs/sdks/accountmanagement/README.md#createtrustedcontact) - Create Trusted Contact
* [updateTrustedContact](docs/sdks/accountmanagement/README.md#updatetrustedcontact) - Update Trusted Contact
* [deleteTrustedContact](docs/sdks/accountmanagement/README.md#deletetrustedcontact) - Delete Trusted Contact
* [createInterestedParty](docs/sdks/accountmanagement/README.md#createinterestedparty) - Create Interested Party
* [updateInterestedParty](docs/sdks/accountmanagement/README.md#updateinterestedparty) - Update Interested Party
* [deleteInterestedParty](docs/sdks/accountmanagement/README.md#deleteinterestedparty) - Delete Interested Party
* [listAvailableRestrictions](docs/sdks/accountmanagement/README.md#listavailablerestrictions) - List Available Restrictions
* [createRestriction](docs/sdks/accountmanagement/README.md#createrestriction) - Create Restriction
* [endRestriction](docs/sdks/accountmanagement/README.md#endrestriction) - End Restriction

### [accountTransfers](docs/sdks/accounttransfers/README.md)

* [createTransfer](docs/sdks/accounttransfers/README.md#createtransfer) - Create Transfer
* [listTransfers](docs/sdks/accounttransfers/README.md#listtransfers) - List Transfers
* [acceptTransfer](docs/sdks/accounttransfers/README.md#accepttransfer) - Accept Transfer
* [rejectTransfer](docs/sdks/accounttransfers/README.md#rejecttransfer) - Reject Transfer
* [getTransfer](docs/sdks/accounttransfers/README.md#gettransfer) - Get Transfer

### [achTransfers](docs/sdks/achtransfers/README.md)

* [createAchDeposit](docs/sdks/achtransfers/README.md#createachdeposit) - Create ACH Deposit
* [getAchDeposit](docs/sdks/achtransfers/README.md#getachdeposit) - Get ACH Deposit
* [cancelAchDeposit](docs/sdks/achtransfers/README.md#cancelachdeposit) - Cancel ACH Deposit
* [createAchWithdrawal](docs/sdks/achtransfers/README.md#createachwithdrawal) - Create ACH Withdrawal
* [getAchWithdrawal](docs/sdks/achtransfers/README.md#getachwithdrawal) - Get ACH Withdrawal
* [cancelAchWithdrawal](docs/sdks/achtransfers/README.md#cancelachwithdrawal) - Cancel ACH Withdrawal


### [assets](docs/sdks/assets/README.md)

* [listAssets](docs/sdks/assets/README.md#listassets) - List Assets
* [getAsset](docs/sdks/assets/README.md#getasset) - Get Asset
* [listAssetsCorrespondent](docs/sdks/assets/README.md#listassetscorrespondent) - List Assets (By Correspondent)
* [getAssetCorrespondent](docs/sdks/assets/README.md#getassetcorrespondent) - Get Asset (By Correspondent)

### [assetTradingConfig](docs/sdks/assettradingconfig/README.md)

* [getAssetTradingConfig](docs/sdks/assettradingconfig/README.md#getassettradingconfig) - Get Asset Trading Config
* [listAssetTradingConfigs](docs/sdks/assettradingconfig/README.md#listassettradingconfigs) - List Asset Trading Configs

### [authentication](docs/sdks/authentication/README.md)

* [generateServiceAccountToken](docs/sdks/authentication/README.md#generateserviceaccounttoken) - Generate Service Account Token
* [listSigningKeys](docs/sdks/authentication/README.md#listsigningkeys) - List Signing Keys

### [bankRelationships](docs/sdks/bankrelationships/README.md)

* [createBankRelationship](docs/sdks/bankrelationships/README.md#createbankrelationship) - Create Bank Relationship
* [listBankRelationships](docs/sdks/bankrelationships/README.md#listbankrelationships) - List Bank Relationships
* [getBankRelationship](docs/sdks/bankrelationships/README.md#getbankrelationship) - Get Bank Relationship
* [updateBankRelationship](docs/sdks/bankrelationships/README.md#updatebankrelationship) - Update Bank Relationship
* [cancelBankRelationship](docs/sdks/bankrelationships/README.md#cancelbankrelationship) - Cancel Bank Relationship
* [verifyMicroDeposits](docs/sdks/bankrelationships/README.md#verifymicrodeposits) - Verify Micro Deposits
* [reissueMicroDeposits](docs/sdks/bankrelationships/README.md#reissuemicrodeposits) - Reissue Micro Deposits
* [reuseBankRelationship](docs/sdks/bankrelationships/README.md#reusebankrelationship) - Reuse Bank Relationship

### [basketOrders](docs/sdks/basketorders/README.md)

* [createBasket](docs/sdks/basketorders/README.md#createbasket) - Create Basket
* [addOrders](docs/sdks/basketorders/README.md#addorders) - Add Orders
* [getBasket](docs/sdks/basketorders/README.md#getbasket) - Get Basket
* [submitBasket](docs/sdks/basketorders/README.md#submitbasket) - Submit Basket
* [listBasketOrders](docs/sdks/basketorders/README.md#listbasketorders) - List Basket Orders
* [listCompressedOrders](docs/sdks/basketorders/README.md#listcompressedorders) - List Compressed Orders
* [removeOrders](docs/sdks/basketorders/README.md#removeorders) - Remove Basket Orders

### [cashBalances](docs/sdks/cashbalances/README.md)

* [calculateCashBalance](docs/sdks/cashbalances/README.md#calculatecashbalance) - Get Cash Balance

### [checks](docs/sdks/checks/README.md)

* [getCheckDeposit](docs/sdks/checks/README.md#getcheckdeposit) - Get Check Deposit

### [dataRetrieval](docs/sdks/dataretrieval/README.md)

* [listSnapshots](docs/sdks/dataretrieval/README.md#listsnapshots) - List Snapshots

### [enrollmentsAndAgreements](docs/sdks/enrollmentsandagreements/README.md)

* [enrollAccount](docs/sdks/enrollmentsandagreements/README.md#enrollaccount) - Enroll Account
* [listAvailableEnrollments](docs/sdks/enrollmentsandagreements/README.md#listavailableenrollments) - List Available Enrollments
* [accountsListAvailableEnrollmentsByAccountGroup](docs/sdks/enrollmentsandagreements/README.md#accountslistavailableenrollmentsbyaccountgroup) - List Available Enrollments (by Account Group)
* [deactivateEnrollment](docs/sdks/enrollmentsandagreements/README.md#deactivateenrollment) - Deactivate Enrollment
* [listEnrollments](docs/sdks/enrollmentsandagreements/README.md#listenrollments) - List Account Enrollments
* [affirmAgreements](docs/sdks/enrollmentsandagreements/README.md#affirmagreements) - Affirm Agreements
* [listAgreements](docs/sdks/enrollmentsandagreements/README.md#listagreements) - List Account Agreements
* [listEntitlements](docs/sdks/enrollmentsandagreements/README.md#listentitlements) - List Account Entitlements

### [feesAndCredits](docs/sdks/feesandcredits/README.md)

* [createFee](docs/sdks/feesandcredits/README.md#createfee) - Create Fee
* [getFee](docs/sdks/feesandcredits/README.md#getfee) - Get Fee
* [cancelFee](docs/sdks/feesandcredits/README.md#cancelfee) - Cancel Fee
* [createCredit](docs/sdks/feesandcredits/README.md#createcredit) - Create Credit
* [getCredit](docs/sdks/feesandcredits/README.md#getcredit) - Get Credit
* [cancelCredit](docs/sdks/feesandcredits/README.md#cancelcredit) - Cancel Credit

### [fixedIncomePricing](docs/sdks/fixedincomepricing/README.md)

* [previewOrderCost](docs/sdks/fixedincomepricing/README.md#previewordercost) - Preview Order Cost
* [retrieveQuote](docs/sdks/fixedincomepricing/README.md#retrievequote) - Retrieve Quote
* [retrieveFixedIncomeMarks](docs/sdks/fixedincomepricing/README.md#retrievefixedincomemarks) - Retrieve Fixed Income Marks

### [instantCashTransferICT](docs/sdks/instantcashtransferict/README.md)

* [createIctDeposit](docs/sdks/instantcashtransferict/README.md#createictdeposit) - Create ICT Deposit
* [getIctDeposit](docs/sdks/instantcashtransferict/README.md#getictdeposit) - Get ICT Deposit
* [cancelIctDeposit](docs/sdks/instantcashtransferict/README.md#cancelictdeposit) - Cancel ICT Deposit
* [createIctWithdrawal](docs/sdks/instantcashtransferict/README.md#createictwithdrawal) - Create ICT Withdrawal
* [getIctWithdrawal](docs/sdks/instantcashtransferict/README.md#getictwithdrawal) - Get ICT Withdrawal
* [cancelIctWithdrawal](docs/sdks/instantcashtransferict/README.md#cancelictwithdrawal) - Cancel ICT Withdrawal
* [locateIctReport](docs/sdks/instantcashtransferict/README.md#locateictreport) - Locate ICT Report

### [investigations](docs/sdks/investigations/README.md)

* [getInvestigation](docs/sdks/investigations/README.md#getinvestigation) - Get Investigations
* [updateInvestigation](docs/sdks/investigations/README.md#updateinvestigation) - Update Investigation 
* [listInvestigations](docs/sdks/investigations/README.md#listinvestigations) - List Investigations
* [linkDocuments](docs/sdks/investigations/README.md#linkdocuments) - Link Documents
* [getWatchlistItem](docs/sdks/investigations/README.md#getwatchlistitem) - Get Watchlist Item
* [getCustomerIdentification](docs/sdks/investigations/README.md#getcustomeridentification) - Get Identity Verification

### [investorDocs](docs/sdks/investordocs/README.md)

* [batchCreateUploadLinks](docs/sdks/investordocs/README.md#batchcreateuploadlinks) - Batch Create Upload Links
* [listDocuments](docs/sdks/investordocs/README.md#listdocuments) - List Documents

### [journals](docs/sdks/journals/README.md)

* [retrieveCashJournalConstraints](docs/sdks/journals/README.md#retrievecashjournalconstraints) - Retrieve Cash Journal Constraints
* [createCashJournal](docs/sdks/journals/README.md#createcashjournal) - Create Cash Journal
* [getCashJournal](docs/sdks/journals/README.md#getcashjournal) - Get Cash Journal
* [cancelCashJournal](docs/sdks/journals/README.md#cancelcashjournal) - Cancel Cash Journal
* [checkPartyType](docs/sdks/journals/README.md#checkpartytype) - Retrieve Cash Journal Party

### [ledger](docs/sdks/ledger/README.md)

* [listEntries](docs/sdks/ledger/README.md#listentries) - List Entries
* [listActivities](docs/sdks/ledger/README.md#listactivities) - List Activities
* [listPositions](docs/sdks/ledger/README.md#listpositions) - List Positions
* [getActivity](docs/sdks/ledger/README.md#getactivity) - Get Activity
* [getEntry](docs/sdks/ledger/README.md#getentry) - Get Entry

### [margins](docs/sdks/margins/README.md)

* [getBuyingPower](docs/sdks/margins/README.md#getbuyingpower) - Get Buying Power

### [orders](docs/sdks/orders/README.md)

* [createOrder](docs/sdks/orders/README.md#createorder) - Create Order
* [getOrder](docs/sdks/orders/README.md#getorder) - Get Order
* [cancelOrder](docs/sdks/orders/README.md#cancelorder) - Cancel Order
* [setExtraReportingData](docs/sdks/orders/README.md#setextrareportingdata) - Set Extra Reporting Data
* [listCorrespondentOrders](docs/sdks/orders/README.md#listcorrespondentorders) - List Correspondent Orders

### [personManagement](docs/sdks/personmanagement/README.md)

* [createLegalNaturalPerson](docs/sdks/personmanagement/README.md#createlegalnaturalperson) - Create Legal Natural Person
* [listLegalNaturalPersons](docs/sdks/personmanagement/README.md#listlegalnaturalpersons) - List Legal Natural Persons
* [getLegalNaturalPerson](docs/sdks/personmanagement/README.md#getlegalnaturalperson) - Get Legal Natural Persons
* [updateLegalNaturalPerson](docs/sdks/personmanagement/README.md#updatelegalnaturalperson) - Update Legal Natural Person
* [assignLargeTrader](docs/sdks/personmanagement/README.md#assignlargetrader) - Assign Large Trader
* [endLargeTraderLegalNaturalPerson](docs/sdks/personmanagement/README.md#endlargetraderlegalnaturalperson) - End Large Trader
* [createLegalEntity](docs/sdks/personmanagement/README.md#createlegalentity) - Create Legal Entity
* [listLegalEntities](docs/sdks/personmanagement/README.md#listlegalentities) - List Legal Entity
* [getLegalEntity](docs/sdks/personmanagement/README.md#getlegalentity) - Get Legal Entity
* [updateLegalEntity](docs/sdks/personmanagement/README.md#updatelegalentity) - Update Legal Entity
* [assignLargeTraderLegalEntity](docs/sdks/personmanagement/README.md#assignlargetraderlegalentity) - Assign Entity Large Trader
* [endLargeTrader](docs/sdks/personmanagement/README.md#endlargetrader) - End Entity Large Trader

### [reader](docs/sdks/reader/README.md)

* [listEventMessages](docs/sdks/reader/README.md#listeventmessages) - List Event Messages
* [getEventMessage](docs/sdks/reader/README.md#geteventmessage) - Get Event Message

### [retirements](docs/sdks/retirements/README.md)

* [listContributionSummaries](docs/sdks/retirements/README.md#listcontributionsummaries) - List Contribution Summaries
* [retrieveContributionConstraints](docs/sdks/retirements/README.md#retrievecontributionconstraints) - Retrieve Contribution Constraints
* [listDistributionSummaries](docs/sdks/retirements/README.md#listdistributionsummaries) - List Distribution Summaries
* [retrieveDistributionConstraints](docs/sdks/retirements/README.md#retrievedistributionconstraints) - Retrieve Distribution Constraints

### [scheduleTransfers](docs/sdks/scheduletransfers/README.md)

* [listScheduleSummaries](docs/sdks/scheduletransfers/README.md#listschedulesummaries) - List Schedule Summaries
* [createAchDepositSchedule](docs/sdks/scheduletransfers/README.md#createachdepositschedule) - Create ACH Deposit Schedule
* [listAchDepositSchedules](docs/sdks/scheduletransfers/README.md#listachdepositschedules) - List ACH Deposit Schedules
* [getAchDepositSchedule](docs/sdks/scheduletransfers/README.md#getachdepositschedule) - Get ACH Deposit Schedule
* [updateAchDepositSchedule](docs/sdks/scheduletransfers/README.md#updateachdepositschedule) - Update ACH Deposit Schedules
* [cancelAchDepositSchedule](docs/sdks/scheduletransfers/README.md#cancelachdepositschedule) - Cancel ACH Deposit Schedule
* [createAchWithdrawalSchedule](docs/sdks/scheduletransfers/README.md#createachwithdrawalschedule) - Create ACH Withdrawal Schedule
* [listAchWithdrawalSchedules](docs/sdks/scheduletransfers/README.md#listachwithdrawalschedules) - List ACH Withdrawal Schedules
* [getAchWithdrawalSchedule](docs/sdks/scheduletransfers/README.md#getachwithdrawalschedule) - Get ACH Withdrawal Schedule
* [updateAchWithdrawalSchedule](docs/sdks/scheduletransfers/README.md#updateachwithdrawalschedule) - Update ACH Withdrawal Schedule
* [cancelAchWithdrawalSchedule](docs/sdks/scheduletransfers/README.md#cancelachwithdrawalschedule) - Cancel ACH Withdrawal Schedule
* [createWireWithdrawalSchedule](docs/sdks/scheduletransfers/README.md#createwirewithdrawalschedule) - Create Wire Withdrawal Schedule
* [listWireWithdrawalSchedules](docs/sdks/scheduletransfers/README.md#listwirewithdrawalschedules) - List Wire Withdrawal Schedules
* [getWireWithdrawalSchedule](docs/sdks/scheduletransfers/README.md#getwirewithdrawalschedule) - Get Wire Withdrawal Schedule
* [updateWireWithdrawalSchedule](docs/sdks/scheduletransfers/README.md#updatewirewithdrawalschedule) - Update Wire Withdrawal Schedule
* [cancelWireWithdrawalSchedule](docs/sdks/scheduletransfers/README.md#cancelwirewithdrawalschedule) - Cancel Wire Withdrawal Schedule

### [subscriber](docs/sdks/subscriber/README.md)

* [createPushSubscription](docs/sdks/subscriber/README.md#createpushsubscription) - Create Push Subscription
* [listPushSubscriptions](docs/sdks/subscriber/README.md#listpushsubscriptions) - List Push Subscriptions
* [getPushSubscription](docs/sdks/subscriber/README.md#getpushsubscription) - Get Push Subscription
* [updatePushSubscription](docs/sdks/subscriber/README.md#updatepushsubscription) - Update Subscription
* [deletePushSubscription](docs/sdks/subscriber/README.md#deletepushsubscription) - Delete Subscription
* [getPushSubscriptionDelivery](docs/sdks/subscriber/README.md#getpushsubscriptiondelivery) - Get Subscription Event Delivery
* [listPushSubscriptionDeliveries](docs/sdks/subscriber/README.md#listpushsubscriptiondeliveries) - List Push Subscription Event Deliveries

### [testSimulation](docs/sdks/testsimulation/README.md)

* [simulateCreateCheckDeposit](docs/sdks/testsimulation/README.md#simulatecreatecheckdeposit) - Simulate Check Deposit Creation
* [forceApproveAchDeposit](docs/sdks/testsimulation/README.md#forceapproveachdeposit) - ACH Deposit Approval
* [forceNocAchDeposit](docs/sdks/testsimulation/README.md#forcenocachdeposit) - NOC for a Deposit
* [forceRejectAchDeposit](docs/sdks/testsimulation/README.md#forcerejectachdeposit) - ACH Deposit Rejection
* [forceReturnAchDeposit](docs/sdks/testsimulation/README.md#forcereturnachdeposit) - ACH Deposit Return
* [forceApproveAchWithdrawal](docs/sdks/testsimulation/README.md#forceapproveachwithdrawal) - ACH Withdrawal Approval
* [forceNocAchWithdrawal](docs/sdks/testsimulation/README.md#forcenocachwithdrawal) - ACH Withdrawal NOC
* [forceRejectAchWithdrawal](docs/sdks/testsimulation/README.md#forcerejectachwithdrawal) - ACH Withdrawal Rejection
* [forceReturnAchWithdrawal](docs/sdks/testsimulation/README.md#forcereturnachwithdrawal) - ACH Withdrawal Return
* [getMicroDepositAmounts](docs/sdks/testsimulation/README.md#getmicrodepositamounts) - Get Relationship Micro Deposit Verification
* [forceApproveIctDeposit](docs/sdks/testsimulation/README.md#forceapproveictdeposit) - Force Approve ICT Deposit
* [forceRejectIctDeposit](docs/sdks/testsimulation/README.md#forcerejectictdeposit) - Force Reject ICT Deposit
* [forceApproveIctWithdrawal](docs/sdks/testsimulation/README.md#forceapproveictwithdrawal) - Force Approve ICT Withdrawal
* [forceRejectIctWithdrawal](docs/sdks/testsimulation/README.md#forcerejectictwithdrawal) - Force Reject ICT Withdrawal
* [forceApproveWireWithdrawal](docs/sdks/testsimulation/README.md#forceapprovewirewithdrawal) - Force Approve Wire Withdrawal
* [forceRejectWireWithdrawal](docs/sdks/testsimulation/README.md#forcerejectwirewithdrawal) - Force Reject Wire Withdrawal
* [forceApproveCashJournal](docs/sdks/testsimulation/README.md#forceapprovecashjournal) - Force Approve Cash Journal
* [forceRejectCashJournal](docs/sdks/testsimulation/README.md#forcerejectcashjournal) - Force Reject Cash Journal

### [tradeAllocation](docs/sdks/tradeallocation/README.md)

* [createTradeAllocation](docs/sdks/tradeallocation/README.md#createtradeallocation) - Create Trade Allocation
* [getTradeAllocation](docs/sdks/tradeallocation/README.md#gettradeallocation) - Get Trade Allocation
* [cancelTradeAllocation](docs/sdks/tradeallocation/README.md#canceltradeallocation) - Cancel Trade Allocation
* [rebookTradeAllocation](docs/sdks/tradeallocation/README.md#rebooktradeallocation) - Rebook Trade Allocation

### [tradeBooking](docs/sdks/tradebooking/README.md)

* [createTrade](docs/sdks/tradebooking/README.md#createtrade) - Create Trade
* [getTrade](docs/sdks/tradebooking/README.md#gettrade) - Get Trade
* [completeTrade](docs/sdks/tradebooking/README.md#completetrade) - Complete Trade
* [cancelTrade](docs/sdks/tradebooking/README.md#canceltrade) - Cancel Trade
* [rebookTrade](docs/sdks/tradebooking/README.md#rebooktrade) - Rebook Trade
* [createExecution](docs/sdks/tradebooking/README.md#createexecution) - Create Execution
* [getExecution](docs/sdks/tradebooking/README.md#getexecution) - Get Execution
* [cancelExecution](docs/sdks/tradebooking/README.md#cancelexecution) - Cancel Execution
* [rebookExecution](docs/sdks/tradebooking/README.md#rebookexecution) - Rebook Execution

### [wires](docs/sdks/wires/README.md)

* [getWireDeposit](docs/sdks/wires/README.md#getwiredeposit) - Get Wire Deposit
* [createWireWithdrawal](docs/sdks/wires/README.md#createwirewithdrawal) - Create Wire Withdrawal
* [getWireWithdrawal](docs/sdks/wires/README.md#getwirewithdrawal) - Get Wire Withdrawal
* [cancelWireWithdrawal](docs/sdks/wires/README.md#cancelwirewithdrawal) - Cancel Wire Withdrawal

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend();

async function run() {
  const result = await apexascend.authentication.listSigningKeys({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend();

async function run() {
  const result = await apexascend.authentication.generateServiceAccountToken({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    jws:
      "eyJhbGciOiAiUlMyNTYifQ.eyJuYW1lIjogImpkb3VnaCIsIm9yZ2FuaXphdGlvbiI6ICJjb3JyZXNwb25kZW50cy8xMjM0NTY3OC0xMjM0LTEyMzQtMTIzNC0xMjM0NTY3ODkxMDEiLCJkYXRldGltZSI6ICIyMDI0LTAyLTA1VDIxOjAyOjI3LjkwMTE4MFoifQ.IMy3KmYoG8Ppf+7hXN7tm7J4MrNpQLGL7WCWvhh4nZWAVKkluL3/u3KC6hZ6Mb/5p7Y54CgZ68aWT2BcP5y4VtzIZR1Chm5pxbLfgE4aJuk+FnF6K3Gc3bBjOWCL58pxY2aTb0iU/exDEA1cbMDvbCzmY5kRefDvorLOqgUS/tS2MJ2jv4RlZFPlmHv5PtOruJ8xUW19gEgGhsPXYYeSHFTE1ZlaDvyXrKtpOvlf+FVc2RTuEw529LZnzwH4/eJJR3BpSpHyJTjQqiaMT3wzpXXYKfCRqnDkSSKJDzCzTb0/uWK/Lf0uafxPXk5YLdis+dbo1zNQhVVKjwnMpk1vLw",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const apexascend = new Apexascend({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await apexascend.authentication.generateServiceAccountToken({
    apiKeyAuth: "<YOUR_API_KEY_HERE>",
  }, {
    jws:
      "eyJhbGciOiAiUlMyNTYifQ.eyJuYW1lIjogImpkb3VnaCIsIm9yZ2FuaXphdGlvbiI6ICJjb3JyZXNwb25kZW50cy8xMjM0NTY3OC0xMjM0LTEyMzQtMTIzNC0xMjM0NTY3ODkxMDEiLCJkYXRldGltZSI6ICIyMDI0LTAyLTA1VDIxOjAyOjI3LjkwMTE4MFoifQ.IMy3KmYoG8Ppf+7hXN7tm7J4MrNpQLGL7WCWvhh4nZWAVKkluL3/u3KC6hZ6Mb/5p7Y54CgZ68aWT2BcP5y4VtzIZR1Chm5pxbLfgE4aJuk+FnF6K3Gc3bBjOWCL58pxY2aTb0iU/exDEA1cbMDvbCzmY5kRefDvorLOqgUS/tS2MJ2jv4RlZFPlmHv5PtOruJ8xUW19gEgGhsPXYYeSHFTE1ZlaDvyXrKtpOvlf+FVc2RTuEw529LZnzwH4/eJJR3BpSpHyJTjQqiaMT3wzpXXYKfCRqnDkSSKJDzCzTb0/uWK/Lf0uafxPXk5YLdis+dbo1zNQhVVKjwnMpk1vLw",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- No Standalone functions [standalone-funcs] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Apexascend } from "@apexfintechsolutions/ascend-sdk";

const sdk = new Apexascend({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
