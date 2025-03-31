# AccountsAffirmAgreementsRequest

## Example Usage

```typescript
import { AccountsAffirmAgreementsRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsAffirmAgreementsRequest = {
  accountId: "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
  affirmAgreementsRequestCreate: {
    accountAgreementIds: [
      "fa2f181c-f2fb-4bc2-b75a-79302c634ae5",
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The account id.                                                                                      | 01HC3MAQ4DR9QN1V8MJ4CN1HMK                                                                           |
| `affirmAgreementsRequestCreate`                                                                      | [components.AffirmAgreementsRequestCreate](../../models/components/affirmagreementsrequestcreate.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |