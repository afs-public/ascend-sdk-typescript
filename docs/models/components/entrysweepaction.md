# EntrySweepAction

Indicates purchase or redemption of the sweep asset

## Example Usage

```typescript
import { EntrySweepAction } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntrySweepAction = EntrySweepAction.Purchase;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `SweepActionUnspecified` | SWEEP_ACTION_UNSPECIFIED |
| `Purchase`               | PURCHASE                 |
| `Redemption`             | REDEMPTION               |
| -                        | `Unrecognized<string>`   |