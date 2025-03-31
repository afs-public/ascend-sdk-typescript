# DocumentAuthenticityVerified

Whether or not the document authenticity is verified or not Will be NOT_IN_SCOPE if the check being done is not documentary

## Example Usage

```typescript
import { DocumentAuthenticityVerified } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: DocumentAuthenticityVerified =
  DocumentAuthenticityVerified.Inconclusive;
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