# WireWithdrawalType

The type of retirement distribution.

## Example Usage

```typescript
import { WireWithdrawalType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalType = WireWithdrawalType.Normal;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                            | Value                                           |
| ----------------------------------------------- | ----------------------------------------------- |
| `TypeUnspecified`                               | TYPE_UNSPECIFIED                                |
| `Normal`                                        | NORMAL                                          |
| `Disability`                                    | DISABILITY                                      |
| `Sosepp`                                        | SOSEPP                                          |
| `Premature`                                     | PREMATURE                                       |
| `Death`                                         | DEATH                                           |
| `ExcessContributionRemovalBeforeTaxDeadline`    | EXCESS_CONTRIBUTION_REMOVAL_BEFORE_TAX_DEADLINE |
| `ExcessContributionRemovalAfterTaxDeadline`     | EXCESS_CONTRIBUTION_REMOVAL_AFTER_TAX_DEADLINE  |
| `RolloverToQualifiedPlan`                       | ROLLOVER_TO_QUALIFIED_PLAN                      |
| `RolloverToIra`                                 | ROLLOVER_TO_IRA                                 |
| `DistributionTransfer`                          | DISTRIBUTION_TRANSFER                           |
| `RecharacterizationPriorYear`                   | RECHARACTERIZATION_PRIOR_YEAR                   |
| `RecharacterizationCurrentYear`                 | RECHARACTERIZATION_CURRENT_YEAR                 |
| `DistributionConversion`                        | DISTRIBUTION_CONVERSION                         |
| `ManagementFee`                                 | MANAGEMENT_FEE                                  |
| `PlanLoan401K`                                  | PLAN_LOAN_401K                                  |
| `PrematureSimpleIraLessThan2Years`              | PREMATURE_SIMPLE_IRA_LESS_THAN_2_YEARS          |
| `NormalRothIraGreaterThan5Years`                | NORMAL_ROTH_IRA_GREATER_THAN_5_YEARS            |
| `NetIncomeAttributable`                         | NET_INCOME_ATTRIBUTABLE                         |
| `Revocation`                                    | REVOCATION                                      |
| `NonReportable`                                 | NON_REPORTABLE                                  |
| -                                               | `Unrecognized<string>`                          |