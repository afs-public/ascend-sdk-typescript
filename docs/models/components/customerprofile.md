# CustomerProfile

Customer profile.

## Example Usage

```typescript
import { CustomerProfile } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CustomerProfile = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `annualIncomeRangeUsd`                                                                               | [components.AccountAnnualIncomeRangeUsd](../../models/components/accountannualincomerangeusd.md)     | :heavy_minus_sign:                                                                                   | Annual income range; the low number is exclusive, the high number is inclusive                       | FROM_100K_TO_200K                                                                                    |
| `federalTaxBracket`                                                                                  | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Federal tax bracket percent.                                                                         | 1.5                                                                                                  |
| `investmentExperience`                                                                               | [components.AccountInvestmentExperience](../../models/components/accountinvestmentexperience.md)     | :heavy_minus_sign:                                                                                   | Investment experience.                                                                               | GOOD                                                                                                 |
| `liquidNetWorthRangeUsd`                                                                             | [components.AccountLiquidNetWorthRangeUsd](../../models/components/accountliquidnetworthrangeusd.md) | :heavy_minus_sign:                                                                                   | Liquid net worth range; the low number is exclusive, the high number is inclusive                    | FROM_100K_TO_200K                                                                                    |
| `totalNetWorthRangeUsd`                                                                              | [components.AccountTotalNetWorthRangeUsd](../../models/components/accounttotalnetworthrangeusd.md)   | :heavy_minus_sign:                                                                                   | Total net worth range; the low number is exclusive, the high number is inclusive                     | FROM_100K_TO_200K                                                                                    |