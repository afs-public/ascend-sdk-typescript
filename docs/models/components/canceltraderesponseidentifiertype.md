# CancelTradeResponseIdentifierType

Identifier type for the asset being traded.

## Example Usage

```typescript
import { CancelTradeResponseIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelTradeResponseIdentifierType =
  CancelTradeResponseIdentifierType.Symbol;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `IdentifierTypeUnspecified` | IDENTIFIER_TYPE_UNSPECIFIED |
| `AssetId`                   | ASSET_ID                    |
| `Symbol`                    | SYMBOL                      |
| `Cusip`                     | CUSIP                       |
| `Isin`                      | ISIN                        |
| -                           | `Unrecognized<string>`      |