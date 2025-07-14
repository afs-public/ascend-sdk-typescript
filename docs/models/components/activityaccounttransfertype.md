# ActivityAccountTransferType

The type of asset movement being performed within the lifecycle of an account transfer process

## Example Usage

```typescript
import { ActivityAccountTransferType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityAccountTransferType =
  ActivityAccountTransferType.FullAccountTransfer;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                              | Value                             |
| --------------------------------- | --------------------------------- |
| `AccountTransferTypeUnspecified`  | ACCOUNT_TRANSFER_TYPE_UNSPECIFIED |
| `PartialTransferReceiver`         | PARTIAL_TRANSFER_RECEIVER         |
| `PartialTransferDeliverer`        | PARTIAL_TRANSFER_DELIVERER        |
| `FullAccountTransfer`             | FULL_ACCOUNT_TRANSFER             |
| `ResidualCredit`                  | RESIDUAL_CREDIT                   |
| `MutualFundCleanup`               | MUTUAL_FUND_CLEANUP               |
| `FailReversal`                    | FAIL_REVERSAL                     |
| `Reclaim`                         | RECLAIM                           |
| `PositionTransferFund`            | POSITION_TRANSFER_FUND            |
| -                                 | `Unrecognized<string>`            |