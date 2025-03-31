# CalculateCashBalanceResponseTransferSummaryMechanism

The mechanism of the transfer.

## Example Usage

```typescript
import { CalculateCashBalanceResponseTransferSummaryMechanism } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CalculateCashBalanceResponseTransferSummaryMechanism =
  CalculateCashBalanceResponseTransferSummaryMechanism.Ach;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `MechanismUnspecified` | MECHANISM_UNSPECIFIED  |
| `Acat`                 | ACAT                   |
| `Ach`                  | ACH                    |
| `CashJournal`          | CASH_JOURNAL           |
| `Check`                | CHECK                  |
| `Credit`               | CREDIT                 |
| `Fee`                  | FEE                    |
| `Ict`                  | ICT                    |
| `Paypal`               | PAYPAL                 |
| `Rtp`                  | RTP                    |
| `Tpj`                  | TPJ                    |
| `Wire`                 | WIRE                   |
| -                      | `Unrecognized<string>` |