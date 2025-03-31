# InvestigationUpdateIdentityVerification

Indicates the current state of identity verification

## Example Usage

```typescript
import { InvestigationUpdateIdentityVerification } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InvestigationUpdateIdentityVerification =
  InvestigationUpdateIdentityVerification.Passed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `ScreenStateUnspecified` | SCREEN_STATE_UNSPECIFIED |
| `Pending`                | PENDING                  |
| `Passed`                 | PASSED                   |
| `Failed`                 | FAILED                   |
| `NeedsReview`            | NEEDS_REVIEW             |
| `DeferredReview`         | DEFERRED_REVIEW          |
| `OutOfScope`             | OUT_OF_SCOPE             |
| -                        | `Unrecognized<string>`   |