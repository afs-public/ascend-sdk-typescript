# LegalAddressVerified

Whether or not the customer legal address was verified

## Example Usage

```typescript
import { LegalAddressVerified } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LegalAddressVerified = LegalAddressVerified.Verified;
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