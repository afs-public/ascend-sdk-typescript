# SearchOpenLotsRequestCreateIdentifierType

The type of the identifier provided in the identifier field. Please include an identifier_type if you are using an identifier. (-- api-linter: core::0140::abbreviations=disabled   aip.dev/not-precedent: Aligning with apex api standard for identifiers)

## Example Usage

```typescript
import { SearchOpenLotsRequestCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SearchOpenLotsRequestCreateIdentifierType =
  SearchOpenLotsRequestCreateIdentifierType.Symbol;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `IdentifierTypeUnspecified` | IDENTIFIER_TYPE_UNSPECIFIED |
| `AssetId`                   | ASSET_ID                    |
| `Symbol`                    | SYMBOL                      |
| `Cusip`                     | CUSIP                       |
| -                           | `Unrecognized<string>`      |