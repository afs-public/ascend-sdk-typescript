# ExecutedPriceType

The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.

## Example Usage

```typescript
import { ExecutedPriceType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ExecutedPriceType = ExecutedPriceType.PricePerUnit;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `PricePerUnit`         | PRICE_PER_UNIT         |
| `PercentageOfPar`      | PERCENTAGE_OF_PAR      |
| `YieldToWorst`         | YIELD_TO_WORST         |
| `YieldToMaturity`      | YIELD_TO_MATURITY      |
| -                      | `Unrecognized<string>` |