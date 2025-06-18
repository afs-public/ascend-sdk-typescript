# AcceptTransferResponseNsccStatus

The NSCC transfer status

## Example Usage

```typescript
import { AcceptTransferResponseNsccStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcceptTransferResponseNsccStatus =
  AcceptTransferResponseNsccStatus.Request;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                         | Value                                        |
| -------------------------------------------- | -------------------------------------------- |
| `NsccStatusUnspecified`                      | NSCC_STATUS_UNSPECIFIED                      |
| `Request`                                    | REQUEST                                      |
| `RequestAdjust`                              | REQUEST_ADJUST                               |
| `RequestAdjustPast`                          | REQUEST_ADJUST_PAST                          |
| `RequestPast`                                | REQUEST_PAST                                 |
| `RequestReject`                              | REQUEST_REJECT                               |
| `Review`                                     | REVIEW                                       |
| `ReviewAdjustDeliverer`                      | REVIEW_ADJUST_DELIVERER                      |
| `ReviewError`                                | REVIEW_ERROR                                 |
| `ReviewAccelerate`                           | REVIEW_ACCELERATE                            |
| `ReviewAdjustReceiverAccelerate`             | REVIEW_ADJUST_RECEIVER_ACCELERATE            |
| `SettlePrep`                                 | SETTLE_PREP                                  |
| `SettleClose`                                | SETTLE_CLOSE                                 |
| `ClosePurge`                                 | CLOSE_PURGE                                  |
| `PartialRequest`                             | PARTIAL_REQUEST                              |
| `MemoPurgePartialTransferRequestReceiver`    | MEMO_PURGE_PARTIAL_TRANSFER_REQUEST_RECEIVER |
| `Reject`                                     | REJECT                                       |
| `SystemPurge`                                | SYSTEM_PURGE                                 |
| -                                            | `Unrecognized<string>`                       |