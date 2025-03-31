# WireWithdrawalScheduleStateTaxWithholding

The state tax withholding.

## Example Usage

```typescript
import { WireWithdrawalScheduleStateTaxWithholding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalScheduleStateTaxWithholding = {};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                                                                               | [components.WireWithdrawalScheduleRetirementDistributionAmount](../../models/components/wirewithdrawalscheduleretirementdistributionamount.md)         | :heavy_minus_sign:                                                                                                                                     | Fixed USD amount to withhold for taxes.                                                                                                                | {<br/>"value": "1.23"<br/>}                                                                                                                            |
| `percentage`                                                                                                                                           | [components.WireWithdrawalScheduleRetirementDistributionPercentage](../../models/components/wirewithdrawalscheduleretirementdistributionpercentage.md) | :heavy_minus_sign:                                                                                                                                     | Percentage of total disbursement amount to withhold for taxes.                                                                                         | {<br/>"value": "11.25"<br/>}                                                                                                                           |