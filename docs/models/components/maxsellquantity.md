# MaxSellQuantity

The maximum number of shares to be sold for a notional SELL order of an Equity asset type. This field restricts the quantity to sell, even if the notional amount requires more shares to fulfill. REQUIRED if your account is not subject to Apex position checks, and PROHIBITED if your account is subject to Apex position checks. Refer to Position Check for details. When specified, must be greater than 0 and can't exceed 5 decimal places.

## Example Usage

```typescript
import { MaxSellQuantity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: MaxSellQuantity = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |