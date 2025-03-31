# AchWithdrawalScheduleStateTaxWithholding

The state tax withholding.

## Example Usage

```typescript
import { AchWithdrawalScheduleStateTaxWithholding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AchWithdrawalScheduleStateTaxWithholding = {};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                               | [components.AchWithdrawalScheduleIraDistributionAmount](../../models/components/achwithdrawalscheduleiradistributionamount.md)         | :heavy_minus_sign:                                                                                                                     | Fixed USD amount to withhold for taxes.                                                                                                | {<br/>"value": "1.23"<br/>}                                                                                                            |
| `percentage`                                                                                                                           | [components.AchWithdrawalScheduleIraDistributionPercentage](../../models/components/achwithdrawalscheduleiradistributionpercentage.md) | :heavy_minus_sign:                                                                                                                     | Percentage of total disbursement amount to withhold for taxes.                                                                         | {<br/>"value": "11.25"<br/>}                                                                                                           |