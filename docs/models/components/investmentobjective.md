# InvestmentObjective

The financial goal or purpose that an investor has in mind when making investment decisions; firms often ask investors to specify their investment objectives when opening an account, in order to provide appropriate investment recommendations and manage risk appropriately

## Example Usage

```typescript
import { InvestmentObjective } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InvestmentObjective = InvestmentObjective.Growth;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                               | Value                              |
| ---------------------------------- | ---------------------------------- |
| `InvestmentObjectiveUnspecified`   | INVESTMENT_OBJECTIVE_UNSPECIFIED   |
| `Balanced`                         | BALANCED                           |
| `CapitalAppreciation`              | CAPITAL_APPRECIATION               |
| `CapitalPreservation`              | CAPITAL_PRESERVATION               |
| `Growth`                           | GROWTH                             |
| `GrowthAndIncome`                  | GROWTH_AND_INCOME                  |
| `GrowthIncome`                     | GROWTH_INCOME                      |
| `Income`                           | INCOME                             |
| `LongTermGrowthWithGreaterRisk`    | LONG_TERM_GROWTH_WITH_GREATER_RISK |
| `LongTermGrowthWithSafety`         | LONG_TERM_GROWTH_WITH_SAFETY       |
| `MaximumGrowth`                    | MAXIMUM_GROWTH                     |
| `ShortTermGrowthWithRisk`          | SHORT_TERM_GROWTH_WITH_RISK        |
| `Speculation`                      | SPECULATION                        |
| `Other`                            | OTHER                              |
| -                                  | `Unrecognized<string>`             |