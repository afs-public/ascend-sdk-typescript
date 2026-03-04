# AlternativeOrderOrderStatus

The order’s status at the time of the response.

## Example Usage

```typescript
import { AlternativeOrderOrderStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AlternativeOrderOrderStatus = AlternativeOrderOrderStatus.Received;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `OrderStatusUnspecified` | ORDER_STATUS_UNSPECIFIED |
| `Received`               | RECEIVED                 |
| `Filled`                 | FILLED                   |
| `Rejected`               | REJECTED                 |
| `AwaitingSignature`      | AWAITING_SIGNATURE       |
| `PendingSettlement`      | PENDING_SETTLEMENT       |
| `Booked`                 | BOOKED                   |
| -                        | `Unrecognized<string>`   |