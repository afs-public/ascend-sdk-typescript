# EntryState

Set to be NEW for BookEntries, other statuses will be assigned via ModifyActivities; the state of the entry

## Example Usage

```typescript
import { EntryState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryState = EntryState.New;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `EntryStateUnspecified` | ENTRY_STATE_UNSPECIFIED |
| `New`                   | NEW                     |
| `Reversal`              | REVERSAL                |
| `Correction`            | CORRECTION              |
| -                       | `Unrecognized<string>`  |