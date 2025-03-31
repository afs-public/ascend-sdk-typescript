# WithheldDepositThresholdAmount

The account's withheld deposit threshold. Amounts in `withheld_deposits` up to this threshold will be not be subtracted to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. This value is always non-negative.

## Example Usage

```typescript
import { WithheldDepositThresholdAmount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WithheldDepositThresholdAmount = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |