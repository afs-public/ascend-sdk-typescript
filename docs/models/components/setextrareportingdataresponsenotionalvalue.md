# SetExtraReportingDataResponseNotionalValue

Notional quantity of the order, measured in USD. Maximum 2 decimal place precision. Either a quantity or notional_value MUST be specified (but not both). For Equities: currently not supported yet For Mutual Funds: Only supported for BUY orders. The order will be transacted at the full notional amount specified.

## Example Usage

```typescript
import { SetExtraReportingDataResponseNotionalValue } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SetExtraReportingDataResponseNotionalValue = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |