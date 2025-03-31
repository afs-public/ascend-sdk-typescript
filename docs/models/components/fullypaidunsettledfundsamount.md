# FullyPaidUnsettledFundsAmount

The account's fully paid unsettled funds in USD. Fully paid unsettled funds are proceeds from sales of assets paid for with cash and not bought on margin. If `include_fully_paid_unsettled_funds` is `false`, this value is **subtracted** from `open_balance_amount` and `open_liquidity_amount` to calculate `available_cash_to_withdraw_amount` and `available_liquidity_amount`. This value is always non-negative.

## Example Usage

```typescript
import { FullyPaidUnsettledFundsAmount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FullyPaidUnsettledFundsAmount = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |