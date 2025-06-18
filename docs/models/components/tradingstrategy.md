# TradingStrategy

Which TradingStrategy Session to trade in, defaults to 'CORE'. Only available for Equity orders.

## Example Usage

```typescript
import { TradingStrategy } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TradingStrategy = TradingStrategy.Core;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Core`                 | CORE                   |
| -                      | `Unrecognized<string>` |