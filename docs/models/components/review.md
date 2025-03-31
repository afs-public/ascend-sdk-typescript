# Review

Indicates the state of the withdrawal review

## Example Usage

```typescript
import { Review } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Review = Review.ReviewStatePending;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `ReviewStateUnspecified` | REVIEW_STATE_UNSPECIFIED |
| `ReviewStatePending`     | REVIEW_STATE_PENDING     |
| `ReviewStateComplete`    | REVIEW_STATE_COMPLETE    |
| -                        | `Unrecognized<string>`   |