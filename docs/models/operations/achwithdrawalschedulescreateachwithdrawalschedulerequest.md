# AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest

## Example Usage

```typescript
import { TimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";
import { AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchWithdrawalSchedulesCreateAchWithdrawalScheduleRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achWithdrawalScheduleCreate: {
    bankRelationship:
      "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
    scheduleDetails: {
      clientScheduleId: "ABC-123",
      scheduleProperties: {
        startDate: {},
        timeUnit: TimeUnit.Month,
        unitMultiplier: 1,
      },
    },
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | The account id.                                                                                  | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                       |
| `achWithdrawalScheduleCreate`                                                                    | [components.AchWithdrawalScheduleCreate](../../models/components/achwithdrawalschedulecreate.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |