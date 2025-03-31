# ActivitySweepAction

Indicates purchase or redemption of the sweep asset

## Example Usage

```typescript
import { ActivitySweepAction } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivitySweepAction = ActivitySweepAction.Purchase;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `SweepActionUnspecified` | SWEEP_ACTION_UNSPECIFIED |
| `Purchase`               | PURCHASE                 |
| `Redemption`             | REDEMPTION               |
| -                        | `Unrecognized<string>`   |