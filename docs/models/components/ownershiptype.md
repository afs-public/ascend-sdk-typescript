# OwnershipType

A roll-up account classification based on the `registration_type`; Indicates what owns the account and/or if it is a special type (e.g., Joint, Estate, Retirement, etc.); Used primarily for reporting and high-level type identification

## Example Usage

```typescript
import { OwnershipType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OwnershipType = OwnershipType.Individual;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `OwnershipTypeUnspecified` | OWNERSHIP_TYPE_UNSPECIFIED |
| `Individual`               | INDIVIDUAL                 |
| `Joint`                    | JOINT                      |
| `Estate`                   | ESTATE                     |
| `Retirement`               | RETIREMENT                 |
| `Trust`                    | TRUST                      |
| `Entity`                   | ENTITY                     |
| `Minor`                    | MINOR                      |
| -                          | `Unrecognized<string>`     |