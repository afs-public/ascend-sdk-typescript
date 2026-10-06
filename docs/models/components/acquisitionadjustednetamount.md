# AcquisitionAdjustedNetAmount

Acquisition cost for longs, proceeds for shorts, net of commissions and fees, adjusted for corporate actions, return of capital, liquidations, option premium paid or received, and wash sales. Closed lots are also adjusted for OID, amortized premium, accreted discount, and principal payments, where applicable.

## Example Usage

```typescript
import { AcquisitionAdjustedNetAmount } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcquisitionAdjustedNetAmount = {};
```

## Fields

| Field                                                                                                                                                                                                              | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `value`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                 | The decimal value, as a string; Refer to [Google’s Decimal type protocol buffer](https://github.com/googleapis/googleapis/blob/40203ca1880849480bbff7b8715491060bbccdf1/google/type/decimal.proto#L33) for details |