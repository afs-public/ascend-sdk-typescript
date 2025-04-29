# CalculateCashBalanceResponseTradeSummary

A summary of a trade.

## Example Usage

```typescript
import { CalculateCashBalanceResponseTradeSummary } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CalculateCashBalanceResponseTradeSummary = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `activity`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | The ledger activity for the trade.                                 | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/activities/0GJQHY6FJNV         |
| `asset`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | The asset that was traded.                                         | assets/8395                                                        |
| `netAmount`                                                        | [components.NetAmount](../../models/components/netamount.md)       | :heavy_minus_sign:                                                 | The net amount of the trade in USD. This value is always positive. | {<br/>"value": "100.00"<br/>}                                      |