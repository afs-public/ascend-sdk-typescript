# TransferScheduleSummaryFederalTaxWithholding

The federal tax withholding.

## Example Usage

```typescript
import { TransferScheduleSummaryFederalTaxWithholding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TransferScheduleSummaryFederalTaxWithholding = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                                                                         | [components.TransferScheduleSummaryRetirementDistributionAmount](../../models/components/transferschedulesummaryretirementdistributionamount.md) | :heavy_minus_sign:                                                                                                                               | Fixed USD amount to withhold for taxes.                                                                                                          | {<br/>"value": "1.23"<br/>}                                                                                                                      |
| `percentage`                                                                                                                                     | [components.TransferScheduleSummaryPercentage](../../models/components/transferschedulesummarypercentage.md)                                     | :heavy_minus_sign:                                                                                                                               | Percentage of total disbursement amount to withhold for taxes.                                                                                   | {<br/>"value": "11.25"<br/>}                                                                                                                     |