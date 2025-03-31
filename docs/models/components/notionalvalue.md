# NotionalValue

Notional quantity of the order, measured in USD. Maximum 2 decimal place precision. For Equities: This represents the maximum amount to be spent. The final order may may have a smaller notional amount. For Mutual Funds: Only supported for BUY orders. The order will be transacted at the full notional amount specified. For Fixed Income: Not supported, you must specify a `quantity` value.

## Example Usage

```typescript
import { NotionalValue } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: NotionalValue = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |