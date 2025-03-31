# AssetCreateType

The asset identifier type

## Example Usage

```typescript
import { AssetCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AssetCreateType = AssetCreateType.Cusip;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `IdentifierTypeUnspecified` | IDENTIFIER_TYPE_UNSPECIFIED |
| `CurrencyCode`              | CURRENCY_CODE               |
| `Cusip`                     | CUSIP                       |
| `Symbol`                    | SYMBOL                      |
| `Isin`                      | ISIN                        |
| `AssetId`                   | ASSET_ID                    |
| -                           | `Unrecognized<string>`      |