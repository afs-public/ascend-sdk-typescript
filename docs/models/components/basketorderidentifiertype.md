# BasketOrderIdentifierType

The identifier type of the asset being ordered. For Equities: only SYMBOL is supported For Mutual Funds: only SYMBOL and CUSIP are supported

## Example Usage

```typescript
import { BasketOrderIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BasketOrderIdentifierType = BasketOrderIdentifierType.Symbol;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Symbol`               | SYMBOL                 |
| `Cusip`                | CUSIP                  |
| `Isin`                 | ISIN                   |
| -                      | `Unrecognized<string>` |