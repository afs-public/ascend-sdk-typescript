# IdentityIdentificationType

**Field Dependencies:**

An SSN or ITIN is required when `check_types` is `DATABASE`

Required if `check_types` is `DATABASE`.

Otherwise, must be empty.

## Example Usage

```typescript
import { IdentityIdentificationType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IdentityIdentificationType = IdentityIdentificationType.Ssn;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `TypeUnspecified`      | TYPE_UNSPECIFIED       |
| `Ssn`                  | SSN                    |
| `Passport`             | PASSPORT               |
| `DriversLicense`       | DRIVERS_LICENSE        |
| `Itin`                 | ITIN                   |
| -                      | `Unrecognized<string>` |