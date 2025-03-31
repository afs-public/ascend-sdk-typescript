# WithdrawalPendingReview

Used to record the movement of funds to/ from the pending_withdrawal memo location

## Example Usage

```typescript
import { WithdrawalPendingReview } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WithdrawalPendingReview = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `review`                                               | [components.Review](../../models/components/review.md) | :heavy_minus_sign:                                     | Indicates the state of the withdrawal review           | REVIEW_STATE_PENDING                                   |