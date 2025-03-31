# MutualFundType

Identifies type of mutual fund

## Example Usage

```typescript
import { MutualFundType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: MutualFundType = MutualFundType.Equity;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `MutualFundTypeUnspecified`  | MUTUAL_FUND_TYPE_UNSPECIFIED |
| `Bond`                       | BOND                         |
| `MoneyMarketFund`            | MONEY_MARKET_FUND            |
| `Equity`                     | EQUITY                       |
| -                            | `Unrecognized<string>`       |