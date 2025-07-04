# WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest

## Example Usage

```typescript
import { WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: WireWithdrawalSchedulesUpdateWireWithdrawalScheduleRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  wireWithdrawalScheduleId: "40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
  wireWithdrawalScheduleUpdate: {},
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                               | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The account id.                                                                                                           | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                                |
| `wireWithdrawalScheduleId`                                                                                                | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The wireWithdrawalSchedule id.                                                                                            | 40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1                                                                                      |
| `updateMask`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | A field mask representing the update. Note: only the 'schedule_details.amount' field of a schedule is currently updatable | {<br/>"update_mask": "schedule_details.amount"<br/>}                                                                      |
| `wireWithdrawalScheduleUpdate`                                                                                            | [components.WireWithdrawalScheduleUpdate](../../models/components/wirewithdrawalscheduleupdate.md)                        | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |                                                                                                                           |