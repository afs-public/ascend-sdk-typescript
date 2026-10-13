# LotMatchingInstructionPrice

The price at which the lot was originally acquired. Maximum 8 integral digits, maximum 8 fractional digits. Cannot be negative. Optional when open_lot_id is not specified. Forbidden when open_lot_id is specified.

## Example Usage

```typescript
import { LotMatchingInstructionPrice } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LotMatchingInstructionPrice = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |