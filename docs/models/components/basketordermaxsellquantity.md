# BasketOrderMaxSellQuantity

The maximum number of shares to be sold if this is a notional SELL order of an Equity asset type. (Prohibited for other side or asset_type inputs.)

 This will only be recognized for clients configured to bypass the short sale risk check. When specified, must be greater than 0 and can't exceed 5 decimal places.

## Example Usage

```typescript
import { BasketOrderMaxSellQuantity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BasketOrderMaxSellQuantity = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |