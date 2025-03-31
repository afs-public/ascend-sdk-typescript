# BirthDateVerified

Whether or not the customer birth date was verified

## Example Usage

```typescript
import { BirthDateVerified } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BirthDateVerified = BirthDateVerified.Unverified;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                           | Value                          |
| ------------------------------ | ------------------------------ |
| `VerificationStateUnspecified` | VERIFICATION_STATE_UNSPECIFIED |
| `NotInScope`                   | NOT_IN_SCOPE                   |
| `Verified`                     | VERIFIED                       |
| `Unverified`                   | UNVERIFIED                     |
| `Inconclusive`                 | INCONCLUSIVE                   |
| -                              | `Unrecognized<string>`         |