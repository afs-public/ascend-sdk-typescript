# CashJournalScheduleCreate

A Cash Journal transfer schedule

## Example Usage

```typescript
import { CashJournalScheduleCreate, TimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CashJournalScheduleCreate = {
  destinationAccount: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D5Z",
  scheduleDetails: {
    clientScheduleId: "ABC-123",
    scheduleProperties: {
      startDate: {},
      timeUnit: TimeUnit.Month,
      unitMultiplier: 1,
    },
  },
  sourceAccount: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `destinationAccount`                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The destination account for the Cash Journal                                                             | accounts/01H8FB90ZRRFWXB4XC2JPJ1D5Z                                                                      |
| `retirementContribution`                                                                                 | [components.RetirementContributionCreate](../../models/components/retirementcontributioncreate.md)       | :heavy_minus_sign:                                                                                       | A contribution to a retirement account.                                                                  |                                                                                                          |
| `retirementDistribution`                                                                                 | [components.RetirementDistributionCreate](../../models/components/retirementdistributioncreate.md)       | :heavy_minus_sign:                                                                                       | A distribution from a retirement account.                                                                |                                                                                                          |
| `scheduleDetails`                                                                                        | [components.WithdrawalScheduleDetailsCreate](../../models/components/withdrawalscheduledetailscreate.md) | :heavy_check_mark:                                                                                       | Details of withdrawal schedule transfers                                                                 |                                                                                                          |
| `sourceAccount`                                                                                          | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The source account for the Cash Journal                                                                  | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                      |