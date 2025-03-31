# NaturalPersonFddCreate

Foreign Due Diligence for Legal Natural Persons required when a Legal Natural Person is the Primary Owner on a non-resident/non-citizen Account.

## Example Usage

```typescript
import { NaturalPersonFddCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: NaturalPersonFddCreate = {
  employmentAndEmployerDescription:
    "I am a line cook at a fine dining restaurant with 55 employees",
  negativeNews: {
    negativeNewsAgainstRelatedParties: true,
  },
  otherSourcesOfWealth: {
    applicantHasOtherSourcesOfWealth: true,
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `customerNonReferralSource`                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Customer Non-referral Source                                                                       | Introduced through mobile app                                                                      |
| `customerReferralSource`                                                                           | [components.CustomerReferralSourceCreate](../../models/components/customerreferralsourcecreate.md) | :heavy_minus_sign:                                                                                 | Customer Referral Source                                                                           |                                                                                                    |
| `employmentAndEmployerDescription`                                                                 | *string*                                                                                           | :heavy_check_mark:                                                                                 | The description of the applicant's source of wealth                                                | I am a line cook at a fine dining restaurant with 55 employees                                     |
| `negativeNews`                                                                                     | [components.NegativeNewsCreate](../../models/components/negativenewscreate.md)                     | :heavy_check_mark:                                                                                 | Negative News detail.                                                                              |                                                                                                    |
| `otherSourcesOfWealth`                                                                             | [components.OtherSourcesOfWealthCreate](../../models/components/othersourcesofwealthcreate.md)     | :heavy_check_mark:                                                                                 | Applicant's other source of wealth                                                                 |                                                                                                    |