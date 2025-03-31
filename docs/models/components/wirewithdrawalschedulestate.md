# WireWithdrawalScheduleState

The state of the represented schedule

## Example Usage

```typescript
import { WireWithdrawalScheduleState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalScheduleState = WireWithdrawalScheduleState.Active;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Active`               | ACTIVE                 |
| `Canceled`             | CANCELED               |
| `Completed`            | COMPLETED              |
| -                      | `Unrecognized<string>` |