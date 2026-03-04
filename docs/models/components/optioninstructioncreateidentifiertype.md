# OptionInstructionCreateIdentifierType

Type to identify the option asset associated with the instruction

## Example Usage

```typescript
import { OptionInstructionCreateIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionInstructionCreateIdentifierType =
  OptionInstructionCreateIdentifierType.Osi;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `IdentifierTypeUnspecified` | IDENTIFIER_TYPE_UNSPECIFIED |
| `AssetId`                   | ASSET_ID                    |
| `Osi`                       | OSI                         |
| -                           | `Unrecognized<string>`      |