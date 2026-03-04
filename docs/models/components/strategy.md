# Strategy

The asset’s strategy as specified by the issuer.

## Example Usage

```typescript
import { Strategy } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Strategy = Strategy.Other;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StrategyUnspecified`  | STRATEGY_UNSPECIFIED   |
| `MergerArbitrage`      | MERGER_ARBITRAGE       |
| `Activist`             | ACTIVIST               |
| `Macro`                | MACRO                  |
| `GlobalMacro`          | GLOBAL_MACRO           |
| `LongShort`            | LONG_SHORT             |
| `MarketNeutral`        | MARKET_NEUTRAL         |
| `DedicatedShort`       | DEDICATED_SHORT        |
| `FixedIncome`          | FIXED_INCOME           |
| `EquityHedge`          | EQUITY_HEDGE           |
| `RelativeValue`        | RELATIVE_VALUE         |
| `EventDriven`          | EVENT_DRIVEN           |
| `VariableEquity`       | VARIABLE_EQUITY        |
| `CommodityTrading`     | COMMODITY_TRADING      |
| `CtaManagedFutures`    | CTA_MANAGED_FUTURES    |
| `Other`                | OTHER                  |
| -                      | `Unrecognized<string>` |