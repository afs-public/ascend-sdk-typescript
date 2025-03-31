# ActivityContributionType

Enum Representing whether the deposit is a new contribution to a retirement account or a rollover from a different account

## Example Usage

```typescript
import { ActivityContributionType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityContributionType = ActivityContributionType.Regular;
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