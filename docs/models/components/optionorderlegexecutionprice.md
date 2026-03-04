# OptionOrderLegExecutionPrice

The price for this security, which is reported as the price-per-share for EQUITY type securities, or as the price-per-contract for OPTION type securities.

## Example Usage

```typescript
import { OptionOrderLegExecutionPrice } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionOrderLegExecutionPrice = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |