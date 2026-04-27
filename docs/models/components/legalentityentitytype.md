# LegalEntityEntityType

The entity type.

## Example Usage

```typescript
import { LegalEntityEntityType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LegalEntityEntityType = LegalEntityEntityType.Corporation;
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