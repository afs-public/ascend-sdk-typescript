# CalculateCashBalanceResponseOpenOrderSummary

A summary of an open order.

## Example Usage

```typescript
import { CalculateCashBalanceResponseOpenOrderSummary } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CalculateCashBalanceResponseOpenOrderSummary = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `asset`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The asset for the open order.                                                                            | assets/8395                                                                                              |
| `expectedNotionalCeilingAmount`                                                                          | [components.ExpectedNotionalCeilingAmount](../../models/components/expectednotionalceilingamount.md)     | :heavy_minus_sign:                                                                                       | The notional value the order is not reasonably expected to exceed in USD. This value is always positive. | {<br/>"value": "100.00"<br/>}                                                                            |