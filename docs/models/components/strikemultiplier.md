# StrikeMultiplier

A number that identifies where the decimal for a strike price should be within the OSI.  For example, in the OSI: AAPL 210416C00120000,   a strike_multiplier of 1 indicates that the strike price is $120.000 and a strike_multiplier of .1 indicates that the strike price is $12.00.

 strike_multiplier is: always 1.0 for Equity Options, usually 1.0 for Index Options, but is 0.1 for “half-point” Index Options.

## Example Usage

```typescript
import { StrikeMultiplier } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: StrikeMultiplier = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |