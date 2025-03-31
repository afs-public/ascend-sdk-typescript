# AchDepositScheduleCreateType

The type of retirement contribution.

## Example Usage

```typescript
import { AchDepositScheduleCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AchDepositScheduleCreateType = AchDepositScheduleCreateType.Regular;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `TypeUnspecified`           | TYPE_UNSPECIFIED            |
| `Regular`                   | REGULAR                     |
| `Employee`                  | EMPLOYEE                    |
| `Employer`                  | EMPLOYER                    |
| `Recharacterization`        | RECHARACTERIZATION          |
| `Rollover60Day`             | ROLLOVER_60_DAY             |
| `RolloverDirect`            | ROLLOVER_DIRECT             |
| `Transfer`                  | TRANSFER                    |
| `TrusteeFee`                | TRUSTEE_FEE                 |
| `Conversion`                | CONVERSION                  |
| `Repayment`                 | REPAYMENT                   |
| `ContributionNonReportable` | CONTRIBUTION_NON_REPORTABLE |
| -                           | `Unrecognized<string>`      |