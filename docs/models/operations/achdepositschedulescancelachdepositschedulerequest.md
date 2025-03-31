# AchDepositSchedulesCancelAchDepositScheduleRequest

## Example Usage

```typescript
import { AchDepositSchedulesCancelAchDepositScheduleRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchDepositSchedulesCancelAchDepositScheduleRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achDepositScheduleId: "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  cancelAchDepositScheduleRequestCreate: {
    name:
      "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDepositSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The account id.                                                                                                      | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                           |
| `achDepositScheduleId`                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The achDepositSchedule id.                                                                                           | 40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1                                                                                 |
| `cancelAchDepositScheduleRequestCreate`                                                                              | [components.CancelAchDepositScheduleRequestCreate](../../models/components/cancelachdepositschedulerequestcreate.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |