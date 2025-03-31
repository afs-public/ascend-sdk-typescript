# AchDepositScheduleState

The state of the represented schedule

## Example Usage

```typescript
import { AchDepositScheduleState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AchDepositScheduleState = AchDepositScheduleState.Active;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Active`               | ACTIVE                 |
| `Canceled`             | CANCELED               |
| `Completed`            | COMPLETED              |
| -                      | `Unrecognized<string>` |