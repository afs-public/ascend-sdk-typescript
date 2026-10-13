# IdentityIdentificationCreateType

**Field Dependencies:**

An SSN or ITIN is required when `check_types` is `DATABASE`

Required if `check_types` is `DATABASE`.

Otherwise, must be empty.

## Example Usage

```typescript
import { IdentityIdentificationCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IdentityIdentificationCreateType =
  IdentityIdentificationCreateType.Ssn;
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
| `IdCard`               | ID_CARD                |
| -                      | `Unrecognized<string>` |