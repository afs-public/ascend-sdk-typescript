# IctWithdrawalFederalTaxWithholding

The federal tax withholding.

## Example Usage

```typescript
import { IctWithdrawalFederalTaxWithholding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IctWithdrawalFederalTaxWithholding = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                     | [components.IctWithdrawalRetirementDistributionAmount](../../models/components/ictwithdrawalretirementdistributionamount.md) | :heavy_minus_sign:                                                                                                           | Fixed USD amount to withhold for taxes.                                                                                      | {<br/>"value": "1.23"<br/>}                                                                                                  |
| `percentage`                                                                                                                 | [components.IctWithdrawalPercentage](../../models/components/ictwithdrawalpercentage.md)                                     | :heavy_minus_sign:                                                                                                           | Percentage of total disbursement amount to withhold for taxes.                                                               | {<br/>"value": "11.25"<br/>}                                                                                                 |