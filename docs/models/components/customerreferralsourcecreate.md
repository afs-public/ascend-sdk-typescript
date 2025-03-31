# CustomerReferralSourceCreate

Customer Referral Source

## Example Usage

```typescript
import { CustomerReferralSourceCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CustomerReferralSourceCreate = {
  name: "John Doe",
  relationshipToApplicant: "Friend",
  relationshipYearsWithApplicant: 5,
  relationshipYearsWithBroker: 2,
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      | Example                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                           | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The name of the referrer                                                                                                         | John Doe                                                                                                                         |
| `relationshipToApplicant`                                                                                                        | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | The relationship of the referrer to the applicant                                                                                | Friend                                                                                                                           |
| `relationshipYearsWithApplicant`                                                                                                 | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The years the referrer has known the applicant If the referrer has known the applicant for less than a year, they must specify 1 | 5                                                                                                                                |
| `relationshipYearsWithBroker`                                                                                                    | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | The years the referrer has known the broker If the referrer has known the broker for less than a year, they must specify 1       | 2                                                                                                                                |