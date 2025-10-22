# AdjustedSettled

This field shows settled positions that have been adjusted to account for as-of transactions (transactions recorded after their actual occurrence). Unlike the settled field, which remains unchanged for historical dates when as-of transactions are recorded, the adjusted_settled field updates to reflect what the position would have been if all transactions had been recorded on their actual dates of occurrence.

## Example Usage

```typescript
import { AdjustedSettled } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AdjustedSettled = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |