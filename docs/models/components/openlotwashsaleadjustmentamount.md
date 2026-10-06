# OpenLotWashSaleAdjustmentAmount

Adjustment due to wash sales, in USD. Note: For open short lots, wash sale adjustment is presented as a negative value, reducing proceeds for correct unrealized gain loss calculation -- once closed, this will appear as a positive value, indicating addition to cost.

## Example Usage

```typescript
import { OpenLotWashSaleAdjustmentAmount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OpenLotWashSaleAdjustmentAmount = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |