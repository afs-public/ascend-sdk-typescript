# EnrollmentPrimaryAccountActivityType

The primary account activity type

## Example Usage

```typescript
import { EnrollmentPrimaryAccountActivityType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollmentPrimaryAccountActivityType =
  EnrollmentPrimaryAccountActivityType.ActiveTrading;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                      | Value                                     |
| ----------------------------------------- | ----------------------------------------- |
| `PrimaryAccountActivityTypeUnspecified`   | PRIMARY_ACCOUNT_ACTIVITY_TYPE_UNSPECIFIED |
| `ActiveTrading`                           | ACTIVE_TRADING                            |
| `ShortTermInvesting`                      | SHORT_TERM_INVESTING                      |
| `LongTermInvesting`                       | LONG_TERM_INVESTING                       |
| -                                         | `Unrecognized<string>`                    |