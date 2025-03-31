# LegalNaturalPersonType

Identification type

## Example Usage

```typescript
import { LegalNaturalPersonType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LegalNaturalPersonType = LegalNaturalPersonType.Passport;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                            | Value                           |
| ------------------------------- | ------------------------------- |
| `IdentificationTypeUnspecified` | IDENTIFICATION_TYPE_UNSPECIFIED |
| `Passport`                      | PASSPORT                        |
| `NationalId`                    | NATIONAL_ID                     |
| `DriversLicense`                | DRIVERS_LICENSE                 |
| -                               | `Unrecognized<string>`          |