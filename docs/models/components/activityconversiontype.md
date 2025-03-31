# ActivityConversionType

The subtype for the corporate action event

## Example Usage

```typescript
import { ActivityConversionType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityConversionType = ActivityConversionType.Cash;
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