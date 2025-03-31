# AffirmAgreementsRequestCreate

The request to affirm Agreements for an Account.

## Example Usage

```typescript
import { AffirmAgreementsRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AffirmAgreementsRequestCreate = {
  accountAgreementIds: [
    "fa2f181c-f2fb-4bc2-b75a-79302c634ae5",
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `accountAgreementIds`                                                                              | *string*[]                                                                                         | :heavy_check_mark:                                                                                 | Repeated string of account_agreement_ids UUID for the specific account agreement(s) being affirmed | [<br/>"fa2f181c-f2fb-4bc2-b75a-79302c634ae5"<br/>]                                                 |