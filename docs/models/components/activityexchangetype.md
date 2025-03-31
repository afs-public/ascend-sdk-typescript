# ActivityExchangeType

Indicates whether the merger was for cash, stock, or both

## Example Usage

```typescript
import { ActivityExchangeType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityExchangeType = ActivityExchangeType.Cash;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `EventTypeUnspecified` | EVENT_TYPE_UNSPECIFIED |
| `Cash`                 | CASH                   |
| `Stock`                | STOCK                  |
| `CashAndStock`         | CASH_AND_STOCK         |
| -                      | `Unrecognized<string>` |