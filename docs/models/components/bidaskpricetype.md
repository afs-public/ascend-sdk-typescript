# BidAskPriceType

The calculation type of this price

## Example Usage

```typescript
import { BidAskPriceType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BidAskPriceType = BidAskPriceType.PercentageOfPar;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `PercentageOfPar`      | PERCENTAGE_OF_PAR      |
| `YieldToWorst`         | YIELD_TO_WORST         |
| `YieldToMaturity`      | YIELD_TO_MATURITY      |
| -                      | `Unrecognized<string>` |