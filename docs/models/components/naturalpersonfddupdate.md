# NaturalPersonFddUpdate

Foreign Due Diligence for Legal Natural Persons required when a Legal Natural Person is the Primary Owner on a non-resident/non-citizen Account.

## Example Usage

```typescript
import { NaturalPersonFddUpdate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: NaturalPersonFddUpdate = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `customerNonReferralSource`                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Customer Non-referral Source                                                                       | Introduced through mobile app                                                                      |
| `customerReferralSource`                                                                           | [components.CustomerReferralSourceUpdate](../../models/components/customerreferralsourceupdate.md) | :heavy_minus_sign:                                                                                 | Customer Referral Source                                                                           |                                                                                                    |
| `employmentAndEmployerDescription`                                                                 | *string*                                                                                           | :heavy_minus_sign:                                                                                 | The description of the applicant's source of wealth                                                | I am a line cook at a fine dining restaurant with 55 employees                                     |
| `negativeNews`                                                                                     | [components.NegativeNewsUpdate](../../models/components/negativenewsupdate.md)                     | :heavy_minus_sign:                                                                                 | Negative News detail.                                                                              |                                                                                                    |
| `otherSourcesOfWealth`                                                                             | [components.OtherSourcesOfWealthUpdate](../../models/components/othersourcesofwealthupdate.md)     | :heavy_minus_sign:                                                                                 | Applicant's other source of wealth                                                                 |                                                                                                    |