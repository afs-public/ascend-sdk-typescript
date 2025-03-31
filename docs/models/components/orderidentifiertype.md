# OrderIdentifierType

The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported For Fixed Income: only CUSIP and ISIN are supported

## Example Usage

```typescript
import { OrderIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderIdentifierType = OrderIdentifierType.Symbol;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Symbol`               | SYMBOL                 |
| `Cusip`                | CUSIP                  |
| `Isin`                 | ISIN                   |
| -                      | `Unrecognized<string>` |