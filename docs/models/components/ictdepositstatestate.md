# IctDepositStateState

The high level state of a transfer, one of:
- `PROCESSING` - The transfer is being processed and will be posted if successful.
- `PENDING_REVIEW` - The transfer is pending review and will continue processing if approved.
- `POSTED` - The transfer has been posted to the ledger and will be completed at the end of the processing window if not canceled first.
- `COMPLETED` - The transfer has been batched and completed.
- `REJECTED` - The transfer was rejected.
- `CANCELED` - The transfer was canceled.
- `RETURNED` - The transfer was returned.
- `POSTPONED` - The transfer is postponed and will resume processing during the next processing window.

## Example Usage

```typescript
import { IctDepositStateState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IctDepositStateState = IctDepositStateState.Processing;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StateUnspecified`     | STATE_UNSPECIFIED      |
| `Processing`           | PROCESSING             |
| `PendingReview`        | PENDING_REVIEW         |
| `Posted`               | POSTED                 |
| `Completed`            | COMPLETED              |
| `Rejected`             | REJECTED               |
| `Canceled`             | CANCELED               |
| `Returned`             | RETURNED               |
| `Postponed`            | POSTPONED              |
| -                      | `Unrecognized<string>` |