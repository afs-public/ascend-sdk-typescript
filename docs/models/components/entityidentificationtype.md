# EntityIdentificationType

The entity tax id type, one of:
- `ID_ENTITY_TYPE_UNSPECIFIED` - Default/Null value.
- `EIN` - Employer Identification Number (US government issued, 9 digits, XX-XXXXXXX).
- `LEI` - Legal Entity Identifier (20 digit alphanumeric).
- `DUNS` - Dun and Bradstreet number.

## Example Usage

```typescript
import { EntityIdentificationType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntityIdentificationType = EntityIdentificationType.Ein;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `IdEntityTypeUnspecified`  | ID_ENTITY_TYPE_UNSPECIFIED |
| `Ein`                      | EIN                        |
| `Lei`                      | LEI                        |
| `Duns`                     | DUNS                       |
| -                          | `Unrecognized<string>`     |