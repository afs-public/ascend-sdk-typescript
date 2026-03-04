# AssetBuyingPowerAssetBuyingPowerMaxAmount

The asset_buying_power_max_amount is the max buying power in USD for an account to purchase a given asset, returned from the request.

## Example Usage

```typescript
import { AssetBuyingPowerAssetBuyingPowerMaxAmount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AssetBuyingPowerAssetBuyingPowerMaxAmount = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |