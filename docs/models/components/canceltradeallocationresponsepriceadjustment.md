# CancelTradeAllocationResponsePriceAdjustment

Price adjustment that will be applied to the net price of the security.

## Example Usage

```typescript
import { CancelTradeAllocationResponsePriceAdjustment } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelTradeAllocationResponsePriceAdjustment = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `priceAdjustmentAmount`                                                                                                                        | [components.CancelTradeAllocationResponsePriceAdjustmentAmount](../../models/components/canceltradeallocationresponsepriceadjustmentamount.md) | :heavy_minus_sign:                                                                                                                             | Total monetary value of the price_adjustment                                                                                                   | {<br/>"value": "56.15"<br/>}                                                                                                                   |
| `priceAdjustmentType`                                                                                                                          | [components.CancelTradeAllocationResponsePriceAdjustmentType](../../models/components/canceltradeallocationresponsepriceadjustmenttype.md)     | :heavy_minus_sign:                                                                                                                             | The type of price adjustment being applied by the broker to the net price of the security.                                                     | MARKUP                                                                                                                                         |