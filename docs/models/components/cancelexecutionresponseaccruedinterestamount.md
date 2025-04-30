# CancelExecutionResponseAccruedInterestAmount

The amount of interest that has been accrued in the issuing currency for a single instrument. Requirement of 15 or less integral number and 2 or less fractional precision. Required for FIXED_INCOME trades. Not allowed for trades of other instrument types.

## Example Usage

```typescript
import { CancelExecutionResponseAccruedInterestAmount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelExecutionResponseAccruedInterestAmount = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |