# EntryPriceAdjustmentRecord

Information about any price adjustments applied to the security

## Example Usage

```typescript
import { EntryPriceAdjustmentRecord } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryPriceAdjustmentRecord = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `priceAdjustmentAmount`                                                                                  | [components.EntryPriceAdjustmentAmount](../../models/components/entrypriceadjustmentamount.md)           | :heavy_minus_sign:                                                                                       | Total monetary value of the price_adjustment                                                             | {<br/>"value": "0.25"<br/>}                                                                              |
| `priceAdjustmentPercent`                                                                                 | [components.EntryPriceAdjustmentPercent](../../models/components/entrypriceadjustmentpercent.md)         | :heavy_minus_sign:                                                                                       | The percent at which the price was adjusted. Expressed as a number from 0.00-100 (rounded to 2 decimals) | {<br/>"value": "0.25"<br/>}                                                                              |
| `priceAdjustmentType`                                                                                    | [components.EntryPriceAdjustmentType](../../models/components/entrypriceadjustmenttype.md)               | :heavy_minus_sign:                                                                                       | The type of price adjustment being applied by the broker to the net price of the security                | MARKUP                                                                                                   |