# AlternativeOrderQuantity

The requested quantity of shares for the order. - Orders can specify only one of `full`, `notional_value`, or `quantity`. - Only relevant to redemption orders. - The value must be positive. - Note that the issuer may allow only an order for less than the requested quantity.

## Example Usage

```typescript
import { AlternativeOrderQuantity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AlternativeOrderQuantity = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |