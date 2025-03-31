# ActivityFpslAction

Denotes whether the shares are incoming or outgoing

## Example Usage

```typescript
import { ActivityFpslAction } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityFpslAction = ActivityFpslAction.Allocate;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `FpslActionUnspecified` | FPSL_ACTION_UNSPECIFIED |
| `Allocate`              | ALLOCATE                |
| `Deallocate`            | DEALLOCATE              |
| -                       | `Unrecognized<string>`  |