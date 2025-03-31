# IctWithdrawalCreateProgram

The name of the program that the ICT withdrawal is associated with.

## Example Usage

```typescript
import { IctWithdrawalCreateProgram } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IctWithdrawalCreateProgram =
  IctWithdrawalCreateProgram.BrokerPartner;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `IctProgramUnspecified` | ICT_PROGRAM_UNSPECIFIED |
| `BrokerPartner`         | BROKER_PARTNER          |
| `DepositOnly`           | DEPOSIT_ONLY            |
| `BankingPartner`        | BANKING_PARTNER         |
| `MoneyTransmitter`      | MONEY_TRANSMITTER       |
| `WithdrawalOnly`        | WITHDRAWAL_ONLY         |
| `DigitalPartner`        | DIGITAL_PARTNER         |
| -                       | `Unrecognized<string>`  |