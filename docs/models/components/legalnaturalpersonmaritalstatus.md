# LegalNaturalPersonMaritalStatus

The legal marital status of an account-holder; Used in combination with state of domicile to determine qualification for account types and beneficiary exclusion rules.

## Example Usage

```typescript
import { LegalNaturalPersonMaritalStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LegalNaturalPersonMaritalStatus =
  LegalNaturalPersonMaritalStatus.Single;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `MaritalStatusUnspecified` | MARITAL_STATUS_UNSPECIFIED |
| `Single`                   | SINGLE                     |
| `Married`                  | MARRIED                    |
| `Divorced`                 | DIVORCED                   |
| `Widowed`                  | WIDOWED                    |
| -                          | `Unrecognized<string>`     |