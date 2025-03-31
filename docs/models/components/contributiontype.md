# ContributionType

Provides detail on the contribution reason if the deposit is made to a retirement account

## Example Usage

```typescript
import { ContributionType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ContributionType = ContributionType.Regular;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `ContributionTypeUnspecified` | CONTRIBUTION_TYPE_UNSPECIFIED |
| `Regular`                     | REGULAR                       |
| `Employee`                    | EMPLOYEE                      |
| `Employer`                    | EMPLOYER                      |
| `Recharacterization`          | RECHARACTERIZATION            |
| `Rollover60Day`               | ROLLOVER_60_DAY               |
| `RolloverDirect`              | ROLLOVER_DIRECT               |
| `Transfer`                    | TRANSFER                      |
| `TrusteeFee`                  | TRUSTEE_FEE                   |
| `Conversion`                  | CONVERSION                    |
| `Repayment`                   | REPAYMENT                     |
| `ContributionNonReportable`   | CONTRIBUTION_NON_REPORTABLE   |
| -                             | `Unrecognized<string>`        |