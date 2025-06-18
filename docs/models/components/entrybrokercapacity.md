# EntryBrokerCapacity

The execution route Apex used for this trade

## Example Usage

```typescript
import { EntryBrokerCapacity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryBrokerCapacity = EntryBrokerCapacity.Agency;
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