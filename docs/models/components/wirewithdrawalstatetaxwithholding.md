# WireWithdrawalStateTaxWithholding

The state tax withholding.

## Example Usage

```typescript
import { WireWithdrawalStateTaxWithholding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalStateTaxWithholding = {};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                                                                               | [components.WireWithdrawalIraDistributionStateTaxWithholdingAmount](../../models/components/wirewithdrawaliradistributionstatetaxwithholdingamount.md) | :heavy_minus_sign:                                                                                                                                     | Fixed USD amount to withhold for taxes.                                                                                                                | {<br/>"value": "1.23"<br/>}                                                                                                                            |
| `percentage`                                                                                                                                           | [components.WireWithdrawalIraDistributionPercentage](../../models/components/wirewithdrawaliradistributionpercentage.md)                               | :heavy_minus_sign:                                                                                                                                     | Percentage of total disbursement amount to withhold for taxes.                                                                                         | {<br/>"value": "11.25"<br/>}                                                                                                                           |