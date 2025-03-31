# ~~IraContribution~~

The ira contribution info for an IRA account. Deprecated, see retirement_contribution_details

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { AchDepositScheduleCreateType, IraContribution } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IraContribution = {
  taxYear: 2024,
  type: AchDepositScheduleCreateType.Regular,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taxYear`                                                                                                                                             | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | Tax year for which the contribution is applied. Current year is always valid; prior year is only valid before tax deadline. Must be in "YYYY" format. | 2024                                                                                                                                                  |
| `type`                                                                                                                                                | [components.AchDepositScheduleCreateType](../../models/components/achdepositschedulecreatetype.md)                                                    | :heavy_check_mark:                                                                                                                                    | The type of retirement contribution.                                                                                                                  | REGULAR                                                                                                                                               |