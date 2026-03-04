# RecordState

Indicates the current state of the asset record.  The record state identifies which record types the asset allows.

## Example Usage

```typescript
import { RecordState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RecordState = RecordState.Active;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `RecordStateUnspecified` | RECORD_STATE_UNSPECIFIED |
| `Active`                 | ACTIVE                   |
| `Frozen`                 | FROZEN                   |
| `Inactive`               | INACTIVE                 |
| -                        | `Unrecognized<string>`   |