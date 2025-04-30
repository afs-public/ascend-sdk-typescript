# CustodialEnrollmentMetadata

Metadata for the REGISTRATION_CUSTODIAL type

## Example Usage

```typescript
import { CustodialEnrollmentMetadata } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CustodialEnrollmentMetadata = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `dividendReinvestmentPlan`                                                                                     | [components.EnrollmentDividendReinvestmentPlan](../../models/components/enrollmentdividendreinvestmentplan.md) | :heavy_minus_sign:                                                                                             | Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL                       | DIVIDEND_REINVESTMENT_ENROLL                                                                                   |
| `fdicCashSweep`                                                                                                | [components.EnrollmentFdicCashSweep](../../models/components/enrollmentfdiccashsweep.md)                       | :heavy_minus_sign:                                                                                             | Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL                                   | FDIC_CASH_SWEEP_ENROLL                                                                                         |