# ExecutionState

The state that the trade is in.

## Example Usage

```typescript
import { ExecutionState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ExecutionState = ExecutionState.Booked;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StateUnspecified`     | STATE_UNSPECIFIED      |
| `Creating`             | CREATING               |
| `Rebooking`            | REBOOKING              |
| `Canceling`            | CANCELING              |
| `Booked`               | BOOKED                 |
| `Rebooked`             | REBOOKED               |
| `Canceled`             | CANCELED               |
| `Failed`               | FAILED                 |
| -                      | `Unrecognized<string>` |