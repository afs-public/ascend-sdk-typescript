# AchDepositSchedulesUpdateAchDepositScheduleRequest

## Example Usage

```typescript
import { AchDepositSchedulesUpdateAchDepositScheduleRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchDepositSchedulesUpdateAchDepositScheduleRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achDepositScheduleId: "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  achDepositScheduleUpdate: {},
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                               | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The account id.                                                                                                           | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                                |
| `achDepositScheduleId`                                                                                                    | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The achDepositSchedule id.                                                                                                | 40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1                                                                                      |
| `updateMask`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | A field mask representing the update. Note: only the 'schedule_details.amount' field of a schedule is currently updatable |                                                                                                                           |
| `achDepositScheduleUpdate`                                                                                                | [components.AchDepositScheduleUpdate](../../models/components/achdepositscheduleupdate.md)                                | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |                                                                                                                           |