# EstimatedNetAmount

The estimated net notional amount involved in an order of the given quantity, capacity, and limit price. This will be the sum of the estimated gross amount and accrued interest, rounded to two decimal places. (For orders in the principal capacity, this total will include mark-up/mark-down price adjustments.)

## Example Usage

```typescript
import { EstimatedNetAmount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EstimatedNetAmount = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |