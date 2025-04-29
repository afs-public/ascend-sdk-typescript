# StrikePriceMultiplier

A number defined as 1 unit of strike value.  For example, if the strike price multiplier = 100, then a strike of $17 equals $1,700. This field is used for  calculating extended strike values.  The number of units represented by the Strike Price Multiplier is comprised of:
   1) Number of shares for Equity Options
   2) A dollar amount for Index Options
 The typical value of this multiplier for Equity and Index options is 100
 For mini options the typical value is 10

## Example Usage

```typescript
import { StrikePriceMultiplier } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: StrikePriceMultiplier = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |