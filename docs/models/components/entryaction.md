# EntryAction

Indicates whether the drip memo activity is reserving cash (DRIP_PENDING) or removing the reservation after a successful reinvestment trade

## Example Usage

```typescript
import { EntryAction } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryAction = EntryAction.DripPending;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `DripActionUnspecified` | DRIP_ACTION_UNSPECIFIED |
| `DripPending`           | DRIP_PENDING            |
| `DripComplete`          | DRIP_COMPLETE           |
| -                       | `Unrecognized<string>`  |