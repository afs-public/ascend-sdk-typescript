# EntryCapacity

Trade capacity type

## Example Usage

```typescript
import { EntryCapacity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryCapacity = EntryCapacity.Principal;
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