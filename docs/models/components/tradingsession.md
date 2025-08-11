# TradingSession

Which TradingSession to trade in, defaults to 'CORE'. Only available for Equity orders.

## Example Usage

```typescript
import { TradingSession } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TradingSession = TradingSession.Core;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `TradingSessionUnspecified` | TRADING_SESSION_UNSPECIFIED |
| `Core`                      | CORE                        |
| `Pre`                       | PRE                         |
| `Post`                      | POST                        |
| `Overnight`                 | OVERNIGHT                   |
| `Apex24`                    | APEX24                      |
| `Gtx`                       | GTX                         |
| -                           | `Unrecognized<string>`      |