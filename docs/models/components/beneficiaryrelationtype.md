# BeneficiaryRelationType

The relationship of the beneficiary to the account owner

## Example Usage

```typescript
import { BeneficiaryRelationType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BeneficiaryRelationType = BeneficiaryRelationType.Spouse;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `RelationTypeUnspecified` | RELATION_TYPE_UNSPECIFIED |
| `Spouse`                  | SPOUSE                    |
| `Trust`                   | TRUST                     |
| `Other`                   | OTHER                     |
| -                         | `Unrecognized<string>`    |