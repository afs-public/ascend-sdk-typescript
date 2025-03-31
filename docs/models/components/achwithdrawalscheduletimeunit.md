# AchWithdrawalScheduleTimeUnit

The time unit used to calculate the interval between transfers. The time period between transfers in a scheduled series is the unit of time times the multiplier

## Example Usage

```typescript
import { AchWithdrawalScheduleTimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AchWithdrawalScheduleTimeUnit = AchWithdrawalScheduleTimeUnit.Month;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Day`                  | DAY                    |
| `Week`                 | WEEK                   |
| `Month`                | MONTH                  |
| -                      | `Unrecognized<string>` |