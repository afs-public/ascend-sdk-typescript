# CompressedOrderSide

The side of this order.

## Example Usage

```typescript
import { CompressedOrderSide } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CompressedOrderSide = CompressedOrderSide.Buy;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `SideUnspecified`      | SIDE_UNSPECIFIED       |
| `Buy`                  | BUY                    |
| `Sell`                 | SELL                   |
| -                      | `Unrecognized<string>` |