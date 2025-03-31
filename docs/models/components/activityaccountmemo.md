# ActivityAccountMemo

Indicates the memo location impacted by an entry

## Example Usage

```typescript
import { ActivityAccountMemo } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityAccountMemo = ActivityAccountMemo.Free;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `MemoTypeUnspecified`  | MEMO_TYPE_UNSPECIFIED  |
| `FullyPaidStockLoan`   | FULLY_PAID_STOCK_LOAN  |
| `Free`                 | FREE                   |
| `PendingOutgoingAcat`  | PENDING_OUTGOING_ACAT  |
| `PendingDrip`          | PENDING_DRIP           |
| `PendingWithdrawal`    | PENDING_WITHDRAWAL     |
| -                      | `Unrecognized<string>` |