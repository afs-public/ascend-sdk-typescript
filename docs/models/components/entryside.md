# EntrySide

Denotes whether the trade is a buy or sell

## Example Usage

```typescript
import { EntrySide } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntrySide = EntrySide.Buy;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `SideUnspecified`      | SIDE_UNSPECIFIED       |
| `Buy`                  | BUY                    |
| `Sell`                 | SELL                   |
| -                      | `Unrecognized<string>` |