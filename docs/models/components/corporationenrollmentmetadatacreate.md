# CorporationEnrollmentMetadataCreate

## Example Usage

```typescript
import { CorporationEnrollmentMetadataCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CorporationEnrollmentMetadataCreate = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `dividendReinvestmentPlan`                                                                                     | [components.DividendReinvestmentPlan](../../models/components/dividendreinvestmentplan.md)                     | :heavy_minus_sign:                                                                                             | Option to auto-enroll in Dividend Reinvestment; defaults to true                                               | DIVIDEND_REINVESTMENT_ENROLL                                                                                   |
| `eddAccountEnrollmentMetadata`                                                                                 | [components.EddAccountEnrollmentMetadataCreate](../../models/components/eddaccountenrollmentmetadatacreate.md) | :heavy_minus_sign:                                                                                             | Enrollment metadata for Entity Accounts                                                                        |                                                                                                                |
| `fdicCashSweep`                                                                                                | [components.FdicCashSweep](../../models/components/fdiccashsweep.md)                                           | :heavy_minus_sign:                                                                                             | Option to auto-enroll in FDIC cash sweep; defaults to true                                                     | FDIC_CASH_SWEEP_ENROLL                                                                                         |