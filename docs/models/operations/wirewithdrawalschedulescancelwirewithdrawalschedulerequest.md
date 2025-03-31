# WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest

## Example Usage

```typescript
import { WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: WireWithdrawalSchedulesCancelWireWithdrawalScheduleRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  wireWithdrawalScheduleId: "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  cancelWireWithdrawalScheduleRequestCreate: {
    name:
      "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireWithdrawalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The account id.                                                                                                              | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                                   |
| `wireWithdrawalScheduleId`                                                                                                   | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The wireWithdrawalSchedule id.                                                                                               | 40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1                                                                                         |
| `cancelWireWithdrawalScheduleRequestCreate`                                                                                  | [components.CancelWireWithdrawalScheduleRequestCreate](../../models/components/cancelwirewithdrawalschedulerequestcreate.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |