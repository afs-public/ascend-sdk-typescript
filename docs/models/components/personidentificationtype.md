# PersonIdentificationType

The identification type for a person, one of:
- `ID_TYPE_UNSPECIFIED` - Default/Null value.
- `SSN` - SSN tax type.
- `ITIN` - ITIN tax type.
- `FTIN` - FTIN (foreign tax id) type.
- `NATIONAL_ID` - National id type.
- `PASSPORT` - Passport id type.
- `DRIVING_LICENSE` - Drivers license id type.
- `STATE_ID_CARD` - State ID card.
- `NATIONAL_ID_CARD` - National ID card.
- `PERMANENT_RESIDENT_VISA` - Permanent resident visa.
- `MILITARY_ID_CARD` - Military ID card.

## Example Usage

```typescript
import { PersonIdentificationType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PersonIdentificationType = PersonIdentificationType.Ssn;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `IdTypeUnspecified`     | ID_TYPE_UNSPECIFIED     |
| `Ssn`                   | SSN                     |
| `Itin`                  | ITIN                    |
| `Ftin`                  | FTIN                    |
| `NationalId`            | NATIONAL_ID             |
| `Passport`              | PASSPORT                |
| `DrivingLicense`        | DRIVING_LICENSE         |
| `StateIdCard`           | STATE_ID_CARD           |
| `NationalIdCard`        | NATIONAL_ID_CARD        |
| `PermanentResidentVisa` | PERMANENT_RESIDENT_VISA |
| `MilitaryIdCard`        | MILITARY_ID_CARD        |
| -                       | `Unrecognized<string>`  |