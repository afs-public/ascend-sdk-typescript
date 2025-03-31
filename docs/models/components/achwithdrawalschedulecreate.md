# AchWithdrawalScheduleCreate

A withdrawal transfer schedule using the ACH mechanism

## Example Usage

```typescript
import { AchWithdrawalScheduleCreate, TimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AchWithdrawalScheduleCreate = {
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
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `bankRelationship`                                                                                       | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The name of the bank relationship to be used in the ACH transaction                                      | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e                           |
| `iraDistribution`                                                                                        | [components.RetirementDistributionCreate](../../models/components/retirementdistributioncreate.md)       | :heavy_minus_sign:                                                                                       | A distribution from a retirement account.                                                                |                                                                                                          |
| `scheduleDetails`                                                                                        | [components.WithdrawalScheduleDetailsCreate](../../models/components/withdrawalscheduledetailscreate.md) | :heavy_check_mark:                                                                                       | Details of withdrawal schedule transfers                                                                 |                                                                                                          |