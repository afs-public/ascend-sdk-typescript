# ActivityDistributionType

Categorizes the withdrawal to indicate whether special handling of the transaction is needed elsewhere

## Example Usage

```typescript
import { ActivityDistributionType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityDistributionType = ActivityDistributionType.Normal;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                            | Value                                           |
| ----------------------------------------------- | ----------------------------------------------- |
| `DistributionTypeUnspecified`                   | DISTRIBUTION_TYPE_UNSPECIFIED                   |
| `Premature`                                     | PREMATURE                                       |
| `Disability`                                    | DISABILITY                                      |
| `Death`                                         | DEATH                                           |
| `Normal`                                        | NORMAL                                          |
| `Sosepp`                                        | SOSEPP                                          |
| `RolloverToQualifiedPlan`                       | ROLLOVER_TO_QUALIFIED_PLAN                      |
| `RolloverToIra`                                 | ROLLOVER_TO_IRA                                 |
| `DistTransfer`                                  | DIST_TRANSFER                                   |
| `ExcessContributionRemovalBeforeTaxDeadline`    | EXCESS_CONTRIBUTION_REMOVAL_BEFORE_TAX_DEADLINE |
| `ExcessContributionRemovalAfterTaxDeadline`     | EXCESS_CONTRIBUTION_REMOVAL_AFTER_TAX_DEADLINE  |
| `RecharacterizationPriorYear`                   | RECHARACTERIZATION_PRIOR_YEAR                   |
| `RecharacterizationCurrentYear`                 | RECHARACTERIZATION_CURRENT_YEAR                 |
| `DistConversion`                                | DIST_CONVERSION                                 |
| `ManagementFee`                                 | MANAGEMENT_FEE                                  |
| `PrematureSimpleIraLessThan2Years`              | PREMATURE_SIMPLE_IRA_LESS_THAN_2_YEARS          |
| `NormalRothIraGreaterThan5Years`                | NORMAL_ROTH_IRA_GREATER_THAN_5_YEARS            |
| `PlanLoan401K`                                  | PLAN_LOAN_401K                                  |
| `NetIncomeAttributable`                         | NET_INCOME_ATTRIBUTABLE                         |
| `Revocation`                                    | REVOCATION                                      |
| `NonReportable`                                 | NON_REPORTABLE                                  |
| -                                               | `Unrecognized<string>`                          |