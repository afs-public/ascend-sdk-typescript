# OptionOrderLegCreateSide

The side of the option order to be sent to the market.

## Example Usage

```typescript
import { OptionOrderLegCreateSide } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionOrderLegCreateSide = OptionOrderLegCreateSide.Sell;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `SideUnspecified`      | SIDE_UNSPECIFIED       |
| `Buy`                  | BUY                    |
| `Sell`                 | SELL                   |
| -                      | `Unrecognized<string>` |