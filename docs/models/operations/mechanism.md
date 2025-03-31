# Mechanism

The withdraw mechanism to calculate the balance for. The mechanism determines what account activity will affect the balance.

## Example Usage

```typescript
import { Mechanism } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: Mechanism = Mechanism.Ach;
```

## Values

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