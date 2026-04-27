# BeneficiaryEntityType

The entity type of the beneficiary; Required if the beneficiary is a legal entity.

## Example Usage

```typescript
import { BeneficiaryEntityType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BeneficiaryEntityType = BeneficiaryEntityType.Corporation;
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