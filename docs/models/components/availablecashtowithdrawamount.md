# AvailableCashToWithdrawAmount

The account's available cash to withdraw in USD. It is calculated based on the `open_balance_amount` and account activity. This value is always non-negative. If `unadjusted_available_cash_to_withdraw_amount` is negative, this value will be `0`.

## Example Usage

```typescript
import { AvailableCashToWithdrawAmount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AvailableCashToWithdrawAmount = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |