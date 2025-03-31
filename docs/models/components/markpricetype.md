# MarkPriceType

The calculation type of this price

## Example Usage

```typescript
import { MarkPriceType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: MarkPriceType = MarkPriceType.PercentageOfPar;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `PercentageOfPar`       | PERCENTAGE_OF_PAR       |
| `DirtyPercentageOfPar`  | DIRTY_PERCENTAGE_OF_PAR |
| `YieldToWorst`          | YIELD_TO_WORST          |
| `YieldToMaturity`       | YIELD_TO_MATURITY       |
| -                       | `Unrecognized<string>`  |