# TransferScheduleSummaryMechanism

The mechanism used for this transfer schedule

## Example Usage

```typescript
import { TransferScheduleSummaryMechanism } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TransferScheduleSummaryMechanism =
  TransferScheduleSummaryMechanism.Ach;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Ach`                  | ACH                    |
| `CashJournal`          | CASH_JOURNAL           |
| `Check`                | CHECK                  |
| `Wire`                 | WIRE                   |
| -                      | `Unrecognized<string>` |