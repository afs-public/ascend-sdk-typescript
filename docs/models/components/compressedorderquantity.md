# CompressedOrderQuantity

Numeric quantity of the order. Either a quantity or notional_value MUST be specified (but not both). For Equities: Represents the number of shares, must be greater than zero and may not exceed 5 decimal places. For Mutual Funds: Only supported for SELL orders. Represents the number of shares, up to a maximum of 3 decimal places.

## Example Usage

```typescript
import { CompressedOrderQuantity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CompressedOrderQuantity = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |