# IdentityLookupState

Current state of the identity lookup

## Example Usage

```typescript
import { IdentityLookupState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IdentityLookupState = IdentityLookupState.VerificationPending;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StateUnspecified`     | STATE_UNSPECIFIED      |
| `VerificationPending`  | VERIFICATION_PENDING   |
| `VerificationExpired`  | VERIFICATION_EXPIRED   |
| `IdentityFound`        | IDENTITY_FOUND         |
| `NoIdentityFound`      | NO_IDENTITY_FOUND      |
| -                      | `Unrecognized<string>` |