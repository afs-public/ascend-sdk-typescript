# EntryFlipPriceAdjustmentRecord

Information about any price adjustments applied to the security

## Example Usage

```typescript
import { EntryFlipPriceAdjustmentRecord } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryFlipPriceAdjustmentRecord = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `priceAdjustmentAmount`                                                                                  | [components.EntryFlipPriceAdjustmentAmount](../../models/components/entryflippriceadjustmentamount.md)   | :heavy_minus_sign:                                                                                       | Total monetary value of the price_adjustment                                                             | {<br/>"value": "0.25"<br/>}                                                                              |
| `priceAdjustmentPercent`                                                                                 | [components.EntryFlipPriceAdjustmentPercent](../../models/components/entryflippriceadjustmentpercent.md) | :heavy_minus_sign:                                                                                       | The percent at which the price was adjusted. Expressed as a number from 0.00-100 (rounded to 2 decimals) | {<br/>"value": "0.25"<br/>}                                                                              |
| `priceAdjustmentType`                                                                                    | [components.EntryFlipPriceAdjustmentType](../../models/components/entryflippriceadjustmenttype.md)       | :heavy_minus_sign:                                                                                       | The type of price adjustment being applied by the broker to the net price of the security                | MARKUP                                                                                                   |