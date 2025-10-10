# OrderType

The execution type of this order. For Equities: MARKET, LIMIT, STOP and MARKET_IF_TOUCHED are supported. For Mutual Funds: only MARKET is supported. For Fixed Income: only LIMIT is supported.

## Example Usage

```typescript
import { OrderType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderType = OrderType.Market;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Limit`                | LIMIT                  |
| `Market`               | MARKET                 |
| `Stop`                 | STOP                   |
| `MarketIfTouched`      | MARKET_IF_TOUCHED      |
| -                      | `Unrecognized<string>` |