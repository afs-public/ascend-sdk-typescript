# EntryConversionType

Corresponds to whether the event is CASH | STOCK | CASH_AND_STOCK

## Example Usage

```typescript
import { EntryConversionType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryConversionType = EntryConversionType.Cash;
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