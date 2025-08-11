# InvestigationUpdateIdentityVerification

The screen state of one screening within an investigation, one of:
- `SCREEN_STATE_UNSPECIFIED` - Default/Null value.
- `PENDING` - Screen result is pending.
- `PASSED` - Screen result has passed.
- `FAILED` - Screen result has failed.
- `NEEDS_REVIEW` - Screen result needs manual review.
- `DEFERRED_REVIEW` - Screen result is deferred for review at a later date.
- `OUT_OF_SCOPE` - Screen state is out of scope for this investigation type.

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