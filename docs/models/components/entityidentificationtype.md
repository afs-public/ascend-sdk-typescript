# EntityIdentificationType

Tax id type for entities (e.g. ein, lei, etc.))

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