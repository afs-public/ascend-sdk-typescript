# OrderBrokerCapacity

Defaults to "AGENCY" if not specified. For Equities: Only "AGENCY" is allowed. For Mutual Funds: Only "AGENCY" is allowed. For Fixed Income: Either "AGENCY" or "PRINCIPAL" are allowed.

## Example Usage

```typescript
import { OrderBrokerCapacity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderBrokerCapacity = OrderBrokerCapacity.Agency;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `BrokerCapacityUnspecified` | BROKER_CAPACITY_UNSPECIFIED |
| `Agency`                    | AGENCY                      |
| `Principal`                 | PRINCIPAL                   |
| -                           | `Unrecognized<string>`      |