# RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount

The amount of accrued interest estimated to be exchanged given the requested quantity. Measured in a USD value with 2-decimal places of precision.

## Example Usage

```typescript
import { RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetrieveFixedIncomeMarksResponseAssetMarkAccruedInterestAmount = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |