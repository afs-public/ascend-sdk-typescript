# OptionOrderQuantity

The quantity of the option order to be placed. The `ratio_quantity` of each leg will be multiplied by this value to determine the total number of units being ordered within each leg. (E.g. if a quantity of 3 is specified, and a leg with a `ratio_quantity` of 2 is specified, then the total number of contracts being ordered by that leg will be 6.)

## Example Usage

```typescript
import { OptionOrderQuantity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionOrderQuantity = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |