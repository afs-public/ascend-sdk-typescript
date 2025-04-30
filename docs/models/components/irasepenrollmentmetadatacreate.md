# IRASEPEnrollmentMetadataCreate

Enrollment metadata for IRA SEP_IRA accounts enrollment type

## Example Usage

```typescript
import { IRASEPEnrollmentMetadataCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IRASEPEnrollmentMetadataCreate = {};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dividendReinvestmentPlan`                                                                                                                             | [components.IRASEPEnrollmentMetadataCreateDividendReinvestmentPlan](../../models/components/irasepenrollmentmetadatacreatedividendreinvestmentplan.md) | :heavy_minus_sign:                                                                                                                                     | Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL                                                               | DIVIDEND_REINVESTMENT_ENROLL                                                                                                                           |
| `fdicCashSweep`                                                                                                                                        | [components.IRASEPEnrollmentMetadataCreateFdicCashSweep](../../models/components/irasepenrollmentmetadatacreatefdiccashsweep.md)                       | :heavy_minus_sign:                                                                                                                                     | Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL                                                                           | FDIC_CASH_SWEEP_ENROLL                                                                                                                                 |