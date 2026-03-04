# OrderSettlementTarget

The desired target settlement state of the order. If unspecified, the order settlement state will default to "FILLED".

## Example Usage

```typescript
import { OrderSettlementTarget } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderSettlementTarget = OrderSettlementTarget.Filled;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                | Value                               |
| ----------------------------------- | ----------------------------------- |
| `OrderSettlementTargetUnspecified`  | ORDER_SETTLEMENT_TARGET_UNSPECIFIED |
| `Booked`                            | BOOKED                              |
| `Filled`                            | FILLED                              |
| -                                   | `Unrecognized<string>`              |