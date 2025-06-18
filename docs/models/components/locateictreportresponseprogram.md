# LocateIctReportResponseProgram

The ICT program associated with the report.

## Example Usage

```typescript
import { LocateIctReportResponseProgram } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LocateIctReportResponseProgram =
  LocateIctReportResponseProgram.BrokerPartner;
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