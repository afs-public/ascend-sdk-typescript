# WireWithdrawalFederalTaxWithholding

The federal tax withholding.

## Example Usage

```typescript
import { WireWithdrawalFederalTaxWithholding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalFederalTaxWithholding = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                         | [components.WireWithdrawalIraDistributionAmount](../../models/components/wirewithdrawaliradistributionamount.md) | :heavy_minus_sign:                                                                                               | Fixed USD amount to withhold for taxes.                                                                          | {<br/>"value": "1.23"<br/>}                                                                                      |
| `percentage`                                                                                                     | [components.WireWithdrawalPercentage](../../models/components/wirewithdrawalpercentage.md)                       | :heavy_minus_sign:                                                                                               | Percentage of total disbursement amount to withhold for taxes.                                                   | {<br/>"value": "11.25"<br/>}                                                                                     |