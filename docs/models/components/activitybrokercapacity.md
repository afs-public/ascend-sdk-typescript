# ActivityBrokerCapacity

The execution route Apex used for this trade

## Example Usage

```typescript
import { ActivityBrokerCapacity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityBrokerCapacity = ActivityBrokerCapacity.Agency;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `CapacityUnspecified`  | CAPACITY_UNSPECIFIED   |
| `Agency`               | AGENCY                 |
| `Principal`            | PRINCIPAL              |
| `Mixed`                | MIXED                  |
| -                      | `Unrecognized<string>` |