# OrderTradingStrategy

Which TradingStrategy Session to trade in, defaults to 'CORE'. Only available for Equity orders.

## Example Usage

```typescript
import { OrderTradingStrategy } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderTradingStrategy = OrderTradingStrategy.Core;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Core`                 | CORE                   |
| -                      | `Unrecognized<string>` |