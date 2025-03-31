# CustomerProfileCreate

A detailed summary of financial and personal details of an investor, to help understand the investor's financial standing, investment experience and risk tolerance.

## Example Usage

```typescript
import { CustomerProfileCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CustomerProfileCreate = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `annualIncomeRangeUsd`                                                                 | [components.AnnualIncomeRangeUsd](../../models/components/annualincomerangeusd.md)     | :heavy_minus_sign:                                                                     | Annual income range; the low number is exclusive, the high number is inclusive         | FROM_100K_TO_200K                                                                      |
| `federalTaxBracket`                                                                    | *number*                                                                               | :heavy_minus_sign:                                                                     | Federal tax bracket percent.                                                           | 1.5                                                                                    |
| `investmentExperience`                                                                 | [components.InvestmentExperience](../../models/components/investmentexperience.md)     | :heavy_minus_sign:                                                                     | Investment experience.                                                                 | GOOD                                                                                   |
| `liquidNetWorthRangeUsd`                                                               | [components.LiquidNetWorthRangeUsd](../../models/components/liquidnetworthrangeusd.md) | :heavy_minus_sign:                                                                     | Liquid net worth range; the low number is exclusive, the high number is inclusive      | FROM_100K_TO_200K                                                                      |
| `totalNetWorthRangeUsd`                                                                | [components.TotalNetWorthRangeUsd](../../models/components/totalnetworthrangeusd.md)   | :heavy_minus_sign:                                                                     | Total net worth range; the low number is exclusive, the high number is inclusive       | FROM_100K_TO_200K                                                                      |