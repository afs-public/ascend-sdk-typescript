# PersonIdentificationType

Tax id type (e.g. ssn)

## Example Usage

```typescript
import { PersonIdentificationType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PersonIdentificationType = PersonIdentificationType.Ssn;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `IdTypeUnspecified`    | ID_TYPE_UNSPECIFIED    |
| `Ssn`                  | SSN                    |
| `Itin`                 | ITIN                   |
| `Ftin`                 | FTIN                   |
| `NationalId`           | NATIONAL_ID            |
| `Passport`             | PASSPORT               |
| `DrivingLicense`       | DRIVING_LICENSE        |
| -                      | `Unrecognized<string>` |