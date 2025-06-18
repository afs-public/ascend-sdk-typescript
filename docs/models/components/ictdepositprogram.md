# IctDepositProgram

The name of the program the ICT deposit is associated with

## Example Usage

```typescript
import { IctDepositProgram } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IctDepositProgram = IctDepositProgram.DepositOnly;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `IctProgramUnspecified` | ICT_PROGRAM_UNSPECIFIED |
| `BrokerPartner`         | BROKER_PARTNER          |
| `DepositOnly`           | DEPOSIT_ONLY            |
| `BankingPartner`        | BANKING_PARTNER         |
| `WithdrawalOnly`        | WITHDRAWAL_ONLY         |
| `DigitalPartner`        | DIGITAL_PARTNER         |
| -                       | `Unrecognized<string>`  |