# RejectTransferResponseState

The transfer state

## Example Usage

```typescript
import { RejectTransferResponseState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RejectTransferResponseState = RejectTransferResponseState.Received;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `StateUnspecified`      | STATE_UNSPECIFIED       |
| `Received`              | RECEIVED                |
| `Submitted`             | SUBMITTED               |
| `Rejected`              | REJECTED                |
| `PendingContraResponse` | PENDING_CONTRA_RESPONSE |
| `Error`                 | ERROR                   |
| `Accepted`              | ACCEPTED                |
| `PendingReview`         | PENDING_REVIEW          |
| `PendingRejection`      | PENDING_REJECTION       |
| `PendingSettlement`     | PENDING_SETTLEMENT      |
| `PendingBookkeeping`    | PENDING_BOOKKEEPING     |
| `Completed`             | COMPLETED               |
| `Purged`                | PURGED                  |
| -                       | `Unrecognized<string>`  |