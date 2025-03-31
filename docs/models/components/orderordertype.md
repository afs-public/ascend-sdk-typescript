# OrderOrderType

The execution type of this order. For Equities: MARKET, LIMIT, or STOP are supported. For Mutual Funds: only MARKET is supported. For Fixed Income: only LIMIT is supported.

## Example Usage

```typescript
import { OrderOrderType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderOrderType = OrderOrderType.Market;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `OrderTypeUnspecified` | ORDER_TYPE_UNSPECIFIED |
| `Limit`                | LIMIT                  |
| `Market`               | MARKET                 |
| `Stop`                 | STOP                   |
| -                      | `Unrecognized<string>` |