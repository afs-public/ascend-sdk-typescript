# CashJournalScheduleStateTaxWithholding

The state tax withholding.

## Example Usage

```typescript
import { CashJournalScheduleStateTaxWithholding } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CashJournalScheduleStateTaxWithholding = {};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `amount`                                                                                                                                         | [components.CashJournalScheduleRetirementDistributionAmount](../../models/components/cashjournalscheduleretirementdistributionamount.md)         | :heavy_minus_sign:                                                                                                                               | Fixed USD amount to withhold for taxes.                                                                                                          | {<br/>"value": "1.23"<br/>}                                                                                                                      |
| `percentage`                                                                                                                                     | [components.CashJournalScheduleRetirementDistributionPercentage](../../models/components/cashjournalscheduleretirementdistributionpercentage.md) | :heavy_minus_sign:                                                                                                                               | Percentage of total disbursement amount to withhold for taxes.                                                                                   | {<br/>"value": "11.25"<br/>}                                                                                                                     |