# Settled

Computed fieldsOriginal Settled Position before and as-of changesComputed based on the bucket values to represet the total settled position in an account  Currently defined as `free` + `fpsl` + `pending_outgoing_acat` + `drip` + `pending_withdrawal`, but if/when new buckets are added this value will need to change to reflect them

## Example Usage

```typescript
import { Settled } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Settled = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |