# AlternativeOrderIdentifierType

Identifies which parameter value is used to identify the asset in the order. The value for that parameter is used in the `identifier` field.

## Example Usage

```typescript
import { AlternativeOrderIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AlternativeOrderIdentifierType =
  AlternativeOrderIdentifierType.AssetId;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `IdentifierTypeUnspecified` | IDENTIFIER_TYPE_UNSPECIFIED |
| `AssetId`                   | ASSET_ID                    |
| -                           | `Unrecognized<string>`      |