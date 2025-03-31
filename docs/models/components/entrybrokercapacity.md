# EntryBrokerCapacity

Used to calculate broadridge blotter code

## Example Usage

```typescript
import { EntryBrokerCapacity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryBrokerCapacity = EntryBrokerCapacity.Principal;
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