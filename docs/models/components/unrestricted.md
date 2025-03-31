# Unrestricted

Computed based on the bucket values to represent the total unrestricted position in an account. Will always be less than or equal to `settled`  settled - (pending_outgoing_acat + pending_drip + pending_withdrawal) ; however, if/when the API adds new buckets, Apex may adjust this to either incorporate the new value or not

## Example Usage

```typescript
import { Unrestricted } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Unrestricted = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |