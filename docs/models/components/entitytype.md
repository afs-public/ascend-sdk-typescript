# EntityType

The entity type.

## Example Usage

```typescript
import { EntityType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntityType = EntityType.Corporation;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `EntityTypeUnspecified`   | ENTITY_TYPE_UNSPECIFIED   |
| `Corporation`             | CORPORATION               |
| `LimitedLiabilityCompany` | LIMITED_LIABILITY_COMPANY |
| `Partnership`             | PARTNERSHIP               |
| `Trust`                   | TRUST                     |
| `Estate`                  | ESTATE                    |
| -                         | `Unrecognized<string>`    |