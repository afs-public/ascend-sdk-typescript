# EnrollmentDeterminedAccountRiskRating

The client determined account risk rating of the entity customer

## Example Usage

```typescript
import { EnrollmentDeterminedAccountRiskRating } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollmentDeterminedAccountRiskRating =
  EnrollmentDeterminedAccountRiskRating.High;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                       | Value                                      |
| ------------------------------------------ | ------------------------------------------ |
| `DeterminedAccountRiskRatingUnspecified`   | DETERMINED_ACCOUNT_RISK_RATING_UNSPECIFIED |
| `Low`                                      | LOW                                        |
| `Medium`                                   | MEDIUM                                     |
| `High`                                     | HIGH                                       |
| -                                          | `Unrecognized<string>`                     |