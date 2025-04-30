# TradeValueMultiplier

A number defined as 1 unit of trade premium value.  For example, if the multiplier = 100, then a premium of $1.50 equals $150. This field is used for calculating premium money extensions.  The number of units represented by the multiplier is comprised of:
  1) Number of shares for Equity Options
  2) A dollar amount for Index Options
 The typical value of this multiplier for Equity and Index options is 100. In the majority of cases,
 the Trade Premium has to be extended to the same base as the Strike Price. Therefore, the
  Trade Value is usually the same as the Strike Value.
 For mini options the typical value is 10

## Example Usage

```typescript
import { TradeValueMultiplier } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TradeValueMultiplier = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |