# AlternativeOrderNotionalValue

The requested notional value for the order. - Orders can specify only one of `full`, `notional_value`, or `quantity`. - The value must be positive. - Values are scaled to two decimal places. - Note that the issuer may allow only an order for less than the requested amount.

## Example Usage

```typescript
import { AlternativeOrderNotionalValue } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AlternativeOrderNotionalValue = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |