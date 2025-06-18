# BookingTradeSide

Denotes if the trade is a SELL or a BUY.

## Example Usage

```typescript
import { BookingTradeSide } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BookingTradeSide = BookingTradeSide.Buy;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `SideUnspecified`      | SIDE_UNSPECIFIED       |
| `Buy`                  | BUY                    |
| `Sell`                 | SELL                   |
| -                      | `Unrecognized<string>` |