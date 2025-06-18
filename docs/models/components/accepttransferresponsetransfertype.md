# AcceptTransferResponseTransferType

The type of transfer

## Example Usage

```typescript
import { AcceptTransferResponseTransferType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcceptTransferResponseTransferType =
  AcceptTransferResponseTransferType.FullTransfer;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                                    | Value                                                   |
| ------------------------------------------------------- | ------------------------------------------------------- |
| `TransferTypeUnspecified`                               | TRANSFER_TYPE_UNSPECIFIED                               |
| `FailReversalBrokerToBrokerOnly`                        | FAIL_REVERSAL_BROKER_TO_BROKER_ONLY                     |
| `FullTransfer`                                          | FULL_TRANSFER                                           |
| `MutualFundCleanup`                                     | MUTUAL_FUND_CLEANUP                                     |
| `PartialTransferDeliverer`                              | PARTIAL_TRANSFER_DELIVERER                              |
| `PartialTransferReceiver`                               | PARTIAL_TRANSFER_RECEIVER                               |
| `PositionTransferFundFirmToMutualFundCompanyOnly`       | POSITION_TRANSFER_FUND_FIRM_TO_MUTUAL_FUND_COMPANY_ONLY |
| `Reclaim`                                               | RECLAIM                                                 |
| `ResidualCredit`                                        | RESIDUAL_CREDIT                                         |
| -                                                       | `Unrecognized<string>`                                  |