# OptionOrderBrokerCapacity

The capacity in which the broker is acting for this option order.

## Example Usage

```typescript
import { OptionOrderBrokerCapacity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionOrderBrokerCapacity = OptionOrderBrokerCapacity.Agency;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `BrokerCapacityUnspecified` | BROKER_CAPACITY_UNSPECIFIED |
| `Agency`                    | AGENCY                      |
| `Principal`                 | PRINCIPAL                   |
| -                           | `Unrecognized<string>`      |