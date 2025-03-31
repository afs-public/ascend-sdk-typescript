# EstimatedGrossCreditAmount

Customer disclosure of the estimated gross credit (fee / markup) amount retained by broker based given the price adjustment schedule configured for orders executed in a principal capacity for a given quantity, and limit price. This amount is priced into the estimated_gross_credit_amount and is not separately charged explicitly.

## Example Usage

```typescript
import { EstimatedGrossCreditAmount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EstimatedGrossCreditAmount = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |