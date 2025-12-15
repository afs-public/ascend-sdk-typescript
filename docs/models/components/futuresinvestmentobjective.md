# FuturesInvestmentObjective

The primary investment objective for the futures account

## Example Usage

```typescript
import { FuturesInvestmentObjective } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FuturesInvestmentObjective = FuturesInvestmentObjective.Speculation;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                     | Value                                    |
| ---------------------------------------- | ---------------------------------------- |
| `FuturesInvestmentObjectiveUnspecified`  | FUTURES_INVESTMENT_OBJECTIVE_UNSPECIFIED |
| `Speculation`                            | SPECULATION                              |
| `Hedging`                                | HEDGING                                  |
| -                                        | `Unrecognized<string>`                   |