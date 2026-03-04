# AlternativeOrderCumulativeNotionalValue

The actual amount of the order, which is determined after the issuer accepts the order. May differ from the requested `notional_value`.

## Example Usage

```typescript
import { AlternativeOrderCumulativeNotionalValue } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AlternativeOrderCumulativeNotionalValue = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |