# DisposalMethod

Disposal method applied.

## Example Usage

```typescript
import { DisposalMethod } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: DisposalMethod = DisposalMethod.Fifo;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `DisposalMethodUnspecified` | DISPOSAL_METHOD_UNSPECIFIED |
| `Fifo`                      | FIFO                        |
| `Lifo`                      | LIFO                        |
| `HighCost`                  | HIGH_COST                   |
| `LowCost`                   | LOW_COST                    |
| `MinTaxTerm`                | MIN_TAX_TERM                |
| `SpecificLot`               | SPECIFIC_LOT                |
| -                           | `Unrecognized<string>`      |