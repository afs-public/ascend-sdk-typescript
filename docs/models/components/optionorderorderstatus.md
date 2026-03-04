# OptionOrderOrderStatus

The processing status of the option order

## Example Usage

```typescript
import { OptionOrderOrderStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionOrderOrderStatus = OptionOrderOrderStatus.Filled;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `OrderStatusUnspecified` | ORDER_STATUS_UNSPECIFIED |
| `PendingNew`             | PENDING_NEW              |
| `New`                    | NEW                      |
| `PendingQueued`          | PENDING_QUEUED           |
| `Queued`                 | QUEUED                   |
| `PartiallyFilled`        | PARTIALLY_FILLED         |
| `Filled`                 | FILLED                   |
| `PendingCancel`          | PENDING_CANCEL           |
| `Canceled`               | CANCELED                 |
| `Rejected`               | REJECTED                 |
| -                        | `Unrecognized<string>`   |