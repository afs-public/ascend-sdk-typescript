# RebookExecutionResponsePriceAdjustment

Price adjustment that will be applied to the net price of the security.

## Example Usage

```typescript
import { RebookExecutionResponsePriceAdjustment } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RebookExecutionResponsePriceAdjustment = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `priceAdjustmentAmount`                                                                                                            | [components.RebookExecutionResponsePriceAdjustmentAmount](../../models/components/rebookexecutionresponsepriceadjustmentamount.md) | :heavy_minus_sign:                                                                                                                 | Total monetary value of the price_adjustment                                                                                       | {<br/>"value": "56.15"<br/>}                                                                                                       |
| `priceAdjustmentType`                                                                                                              | [components.RebookExecutionResponsePriceAdjustmentType](../../models/components/rebookexecutionresponsepriceadjustmenttype.md)     | :heavy_minus_sign:                                                                                                                 | The type of price adjustment being applied by the broker to the net price of the security.                                         | MARKUP                                                                                                                             |