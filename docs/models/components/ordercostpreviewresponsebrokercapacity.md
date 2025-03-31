# OrderCostPreviewResponseBrokerCapacity

Capacity used in determining the order cost. Defaults to "AGENCY" if no value specified.

## Example Usage

```typescript
import { OrderCostPreviewResponseBrokerCapacity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderCostPreviewResponseBrokerCapacity =
  OrderCostPreviewResponseBrokerCapacity.Agency;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `BrokerCapacityUnspecified` | BROKER_CAPACITY_UNSPECIFIED |
| `Agency`                    | AGENCY                      |
| `Principal`                 | PRINCIPAL                   |
| -                           | `Unrecognized<string>`      |