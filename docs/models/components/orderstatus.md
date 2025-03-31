# OrderStatus

The processing status of the order

## Example Usage

```typescript
import { OrderStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderStatus = OrderStatus.Filled;
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