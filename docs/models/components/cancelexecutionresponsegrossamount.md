# CancelExecutionResponseGrossAmount

Gross amount is calculated by the Booking service by multiplying price and quantity and fixing it to 2 fractional precision. Requirement of 11 or less integral number and 2 or less fractional precision. Optionally specifiable. If present, will override the gross_amount calculated above.

## Example Usage

```typescript
import { CancelExecutionResponseGrossAmount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelExecutionResponseGrossAmount = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |