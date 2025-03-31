# FederalTaxWithholding

The federal tax withholding.

## Example Usage

```typescript
import { FederalTaxWithholding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FederalTaxWithholding = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                     | [components.AchWithdrawalRetirementDistributionAmount](../../models/components/achwithdrawalretirementdistributionamount.md) | :heavy_minus_sign:                                                                                                           | Fixed USD amount to withhold for taxes.                                                                                      | {<br/>"value": "1.23"<br/>}                                                                                                  |
| `percentage`                                                                                                                 | [components.AchWithdrawalPercentage](../../models/components/achwithdrawalpercentage.md)                                     | :heavy_minus_sign:                                                                                                           | Percentage of total disbursement amount to withhold for taxes.                                                               | {<br/>"value": "11.25"<br/>}                                                                                                 |