# EntryTradeBrokerCapacity

Used to calculate broadridge blotter code

## Example Usage

```typescript
import { EntryTradeBrokerCapacity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryTradeBrokerCapacity = EntryTradeBrokerCapacity.Principal;
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