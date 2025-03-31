# DayTradeBuyingPowerAmount

The day_trade_buying_power_issued_amount is the day trade buying power of the account in USD, returned from the request. If the is_day_trade_buying_power_allowed boolean is true this will be set from day_trade_buying_power_issued value returned from the margins calculator, or else if it is false it will be set from buying_power_issued value returned from the margins calculator.

## Example Usage

```typescript
import { DayTradeBuyingPowerAmount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: DayTradeBuyingPowerAmount = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |