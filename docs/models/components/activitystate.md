# ActivityState

The state of the activity

## Example Usage

```typescript
import { ActivityState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityState = ActivityState.Pending;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `ActivityStateUnspecified` | ACTIVITY_STATE_UNSPECIFIED |
| `Pending`                  | PENDING                    |
| `Current`                  | CURRENT                    |
| `Canceled`                 | CANCELED                   |
| `Rebooked`                 | REBOOKED                   |
| `Rebook`                   | REBOOK                     |
| `Cancel`                   | CANCEL                     |
| -                          | `Unrecognized<string>`     |