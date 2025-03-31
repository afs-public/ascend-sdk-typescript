# EnrollmentDividendReinvestmentPlan

Option to auto-enroll in Dividend Reinvestment; defaults to true

## Example Usage

```typescript
import { EnrollmentDividendReinvestmentPlan } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollmentDividendReinvestmentPlan =
  EnrollmentDividendReinvestmentPlan.DividendReinvestmentEnroll;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                          | Value                                         |
| --------------------------------------------- | --------------------------------------------- |
| `AutoEnrollDividendReinvestmentUnspecified`   | AUTO_ENROLL_DIVIDEND_REINVESTMENT_UNSPECIFIED |
| `DividendReinvestmentEnroll`                  | DIVIDEND_REINVESTMENT_ENROLL                  |
| `DividendReinvestmentDecline`                 | DIVIDEND_REINVESTMENT_DECLINE                 |
| -                                             | `Unrecognized<string>`                        |