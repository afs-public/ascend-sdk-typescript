# CancelAchWithdrawalScheduleRequestCreate

Request to cancel an ACH withdrawal transfer schedule

## Example Usage

```typescript
import { CancelAchWithdrawalScheduleRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelAchWithdrawalScheduleRequestCreate = {
  name:
    "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `comment`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | A comment as to why the ACH withdrawal schedule is being canceled                               | User Request                                                                                    |
| `name`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | The name of the ACH withdrawal transfer schedule to cancel                                      | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawalSchedules/40eb6b6f-76ff-4dc9-b8a0-b65a7658f8b1 |