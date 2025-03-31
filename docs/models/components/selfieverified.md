# SelfieVerified

Whether or not the customer photo identification was verified Will be NOT_IN_SCOPE if the check being done is not selfie

## Example Usage

```typescript
import { SelfieVerified } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SelfieVerified = SelfieVerified.Verified;
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