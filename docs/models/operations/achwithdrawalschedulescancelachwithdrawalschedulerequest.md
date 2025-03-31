# AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest

## Example Usage

```typescript
import { AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchWithdrawalSchedulesCancelAchWithdrawalScheduleRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achWithdrawalScheduleId: "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  cancelAchWithdrawalScheduleRequestCreate: {
    name:
      "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The account id.                                                                                                            | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                                 |
| `achWithdrawalScheduleId`                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The achWithdrawalSchedule id.                                                                                              | 40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1                                                                                       |
| `cancelAchWithdrawalScheduleRequestCreate`                                                                                 | [components.CancelAchWithdrawalScheduleRequestCreate](../../models/components/cancelachwithdrawalschedulerequestcreate.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |