# ActivityDripAction

Denotes whether the reinvestment is pending or complete

## Example Usage

```typescript
import { ActivityDripAction } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityDripAction = ActivityDripAction.DripPending;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `DripActionUnspecified` | DRIP_ACTION_UNSPECIFIED |
| `DripPending`           | DRIP_PENDING            |
| `DripComplete`          | DRIP_COMPLETE           |
| -                       | `Unrecognized<string>`  |