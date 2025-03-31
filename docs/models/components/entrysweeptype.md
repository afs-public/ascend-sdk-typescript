# EntrySweepType

Sweep program that cash is being swept to/ from

## Example Usage

```typescript
import { EntrySweepType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntrySweepType = EntrySweepType.Fdic;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `SweepTypeUnspecified` | SWEEP_TYPE_UNSPECIFIED |
| `Fdic`                 | FDIC                   |
| `MoneyMarket`          | MONEY_MARKET           |
| -                      | `Unrecognized<string>` |