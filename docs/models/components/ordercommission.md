# OrderCommission

A custom commission to be applied to this order. When specifying an AMOUNT type, the value represents a notional amount measured in the currency of the order.

## Example Usage

```typescript
import { OrderCommission } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderCommission = {};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          | Example                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                               | [components.OrderCommissionType](../../models/components/ordercommissiontype.md)                                                     | :heavy_minus_sign:                                                                                                                   | The type of commission value being specified. Only the type of "AMOUNT" is supported.                                                | AMOUNT                                                                                                                               |
| `value`                                                                                                                              | [components.Value](../../models/components/value.md)                                                                                 | :heavy_minus_sign:                                                                                                                   | The value of this commission. If type = `AMOUNT`, then this expresses a monetary value in same currency denoted on the order itself. | {<br/>"value": "30.57"<br/>}                                                                                                         |