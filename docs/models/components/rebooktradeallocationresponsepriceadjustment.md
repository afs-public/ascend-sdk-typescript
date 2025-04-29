# RebookTradeAllocationResponsePriceAdjustment

Price adjustment that will be applied to the net price of the security.

## Example Usage

```typescript
import { RebookTradeAllocationResponsePriceAdjustment } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RebookTradeAllocationResponsePriceAdjustment = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `priceAdjustmentAmount`                                                                                                                        | [components.RebookTradeAllocationResponsePriceAdjustmentAmount](../../models/components/rebooktradeallocationresponsepriceadjustmentamount.md) | :heavy_minus_sign:                                                                                                                             | Total monetary value of the price_adjustment                                                                                                   | {<br/>"value": "56.15"<br/>}                                                                                                                   |
| `priceAdjustmentType`                                                                                                                          | [components.RebookTradeAllocationResponsePriceAdjustmentType](../../models/components/rebooktradeallocationresponsepriceadjustmenttype.md)     | :heavy_minus_sign:                                                                                                                             | The type of price adjustment being applied by the broker to the net price of the security.                                                     | MARKUP                                                                                                                                         |