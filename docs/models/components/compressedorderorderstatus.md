# CompressedOrderOrderStatus

The processing status of the order

## Example Usage

```typescript
import { CompressedOrderOrderStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CompressedOrderOrderStatus = CompressedOrderOrderStatus.Filled;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `OrderStatusUnspecified` | ORDER_STATUS_UNSPECIFIED |
| `PendingNew`             | PENDING_NEW              |
| `New`                    | NEW                      |
| `PartiallyFilled`        | PARTIALLY_FILLED         |
| `Filled`                 | FILLED                   |
| `Rejected`               | REJECTED                 |
| -                        | `Unrecognized<string>`   |