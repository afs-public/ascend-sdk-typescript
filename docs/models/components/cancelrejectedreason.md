# CancelRejectedReason

Used to denote when a cancel request has been rejected.

## Example Usage

```typescript
import { CancelRejectedReason } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelRejectedReason = CancelRejectedReason.TooLateToCancel;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                                      | Value                                                     |
| --------------------------------------------------------- | --------------------------------------------------------- |
| `CancelRejectReasonUnspecified`                           | CANCEL_REJECT_REASON_UNSPECIFIED                          |
| `TooLateToCancel`                                         | TOO_LATE_TO_CANCEL                                        |
| `CancellationUnknownOrder`                                | CANCELLATION_UNKNOWN_ORDER                                |
| `BrokerExchangeOption`                                    | BROKER_EXCHANGE_OPTION                                    |
| `OrderAlreadyInPendingCancelOrPendingReplaceStatus`       | ORDER_ALREADY_IN_PENDING_CANCEL_OR_PENDING_REPLACE_STATUS |
| `Duplicate`                                               | DUPLICATE                                                 |
| `CancellationSystemError`                                 | CANCELLATION_SYSTEM_ERROR                                 |
| `OrderAlreadyCanceled`                                    | ORDER_ALREADY_CANCELED                                    |
| `CancellationMisconfiguredClient`                         | CANCELLATION_MISCONFIGURED_CLIENT                         |
| -                                                         | `Unrecognized<string>`                                    |