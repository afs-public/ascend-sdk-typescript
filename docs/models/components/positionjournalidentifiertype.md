# PositionJournalIdentifierType

Identifier type for the asset being moved

## Example Usage

```typescript
import { PositionJournalIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PositionJournalIdentifierType = PositionJournalIdentifierType.Symbol;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `IdentifierTypeUnspecified` | IDENTIFIER_TYPE_UNSPECIFIED |
| `Cusip`                     | CUSIP                       |
| `Symbol`                    | SYMBOL                      |
| `AssetId`                   | ASSET_ID                    |
| -                           | `Unrecognized<string>`      |