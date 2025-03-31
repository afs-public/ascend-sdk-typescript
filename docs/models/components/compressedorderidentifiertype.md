# CompressedOrderIdentifierType

The identifier type of the asset being ordered. For Equities: only SYMBOL is supported

## Example Usage

```typescript
import { CompressedOrderIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CompressedOrderIdentifierType = CompressedOrderIdentifierType.Symbol;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Symbol`               | SYMBOL                 |
| `Cusip`                | CUSIP                  |
| `Isin`                 | ISIN                   |
| -                      | `Unrecognized<string>` |