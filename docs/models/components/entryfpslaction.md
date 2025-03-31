# EntryFpslAction

Indicates whether shares are being allocated or deallocated

## Example Usage

```typescript
import { EntryFpslAction } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryFpslAction = EntryFpslAction.Allocate;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `FpslActionUnspecified` | FPSL_ACTION_UNSPECIFIED |
| `Allocate`              | ALLOCATE                |
| `Deallocate`            | DEALLOCATE              |
| -                       | `Unrecognized<string>`  |