# RebookTradeAllocationResponseState

The state that the trade allocation is in.

## Example Usage

```typescript
import { RebookTradeAllocationResponseState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RebookTradeAllocationResponseState =
  RebookTradeAllocationResponseState.Booked;
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