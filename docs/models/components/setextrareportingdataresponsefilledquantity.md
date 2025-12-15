# SetExtraReportingDataResponseFilledQuantity

The summed quantity value across all fills in this order, up to a maximum of 5 decimal places. Will be absent if an order has no fill information.

## Example Usage

```typescript
import { SetExtraReportingDataResponseFilledQuantity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SetExtraReportingDataResponseFilledQuantity = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |