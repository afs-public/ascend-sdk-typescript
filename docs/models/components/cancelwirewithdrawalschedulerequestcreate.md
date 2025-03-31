# CancelWireWithdrawalScheduleRequestCreate

Request to cancel a Wire withdrawal transfer schedule

## Example Usage

```typescript
import { CancelWireWithdrawalScheduleRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelWireWithdrawalScheduleRequestCreate = {
  name:
    "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireWithdrawalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `comment`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | A comment as to why the Wire withdrawal schedule is being canceled                               | User Request                                                                                     |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The name of the Wire withdrawal transfer schedule to cancel                                      | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireWithdrawalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1 |