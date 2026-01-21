# CheckWithdrawalSchedulesCreateCheckWithdrawalScheduleRequest

## Example Usage

```typescript
import { DeliveryMethod, TimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";
import { CheckWithdrawalSchedulesCreateCheckWithdrawalScheduleRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CheckWithdrawalSchedulesCreateCheckWithdrawalScheduleRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  checkWithdrawalScheduleCreate: {
    deliveryMethod: DeliveryMethod.Standard,
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The account id.                                                                                      | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                           |
| `checkWithdrawalScheduleCreate`                                                                      | [components.CheckWithdrawalScheduleCreate](../../models/components/checkwithdrawalschedulecreate.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |