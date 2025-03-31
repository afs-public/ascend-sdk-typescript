# CashJournalFederalTaxWithholding

The federal tax withholding.

## Example Usage

```typescript
import { CashJournalFederalTaxWithholding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CashJournalFederalTaxWithholding = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                                                 | [components.CashJournalRetirementDistributionAmount](../../models/components/cashjournalretirementdistributionamount.md) | :heavy_minus_sign:                                                                                                       | Fixed USD amount to withhold for taxes.                                                                                  | {<br/>"value": "1.23"<br/>}                                                                                              |
| `percentage`                                                                                                             | [components.CashJournalPercentage](../../models/components/cashjournalpercentage.md)                                     | :heavy_minus_sign:                                                                                                       | Percentage of total disbursement amount to withhold for taxes.                                                           | {<br/>"value": "11.25"<br/>}                                                                                             |