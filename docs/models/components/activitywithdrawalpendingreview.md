# ActivityWithdrawalPendingReview

Used to record the movement of funds to/ from the pending_withdrawal memo location

## Example Usage

```typescript
import { ActivityWithdrawalPendingReview } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityWithdrawalPendingReview = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `review`                                                               | [components.ActivityReview](../../models/components/activityreview.md) | :heavy_minus_sign:                                                     | Denotes whether the withdrawal is pending or complete                  | REVIEW_STATE_PENDING                                                   |