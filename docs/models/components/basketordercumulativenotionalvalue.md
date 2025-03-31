# BasketOrderCumulativeNotionalValue

The product of order quantity & price, summed across all fills, reported in the currency specified in the order. (This will be rounded to 2 decimal places for USD currencies). Will be absent if an order has no fill information.

## Example Usage

```typescript
import { BasketOrderCumulativeNotionalValue } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BasketOrderCumulativeNotionalValue = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |