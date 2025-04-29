# CancelExecutionResponsePriceAdjustment

Price adjustment that will be applied to the net price of the security.

## Example Usage

```typescript
import { CancelExecutionResponsePriceAdjustment } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelExecutionResponsePriceAdjustment = {};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `priceAdjustmentAmount`                                                                                                            | [components.CancelExecutionResponsePriceAdjustmentAmount](../../models/components/cancelexecutionresponsepriceadjustmentamount.md) | :heavy_minus_sign:                                                                                                                 | Total monetary value of the price_adjustment                                                                                       | {<br/>"value": "56.15"<br/>}                                                                                                       |
| `priceAdjustmentType`                                                                                                              | [components.CancelExecutionResponsePriceAdjustmentType](../../models/components/cancelexecutionresponsepriceadjustmenttype.md)     | :heavy_minus_sign:                                                                                                                 | The type of price adjustment being applied by the broker to the net price of the security.                                         | MARKUP                                                                                                                             |