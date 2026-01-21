# CheckWithdrawalScheduleCreate

A withdrawal transfer schedule using the Check mechanism

## Example Usage

```typescript
import { CheckWithdrawalScheduleCreate, DeliveryMethod, TimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CheckWithdrawalScheduleCreate = {
  deliveryMethod: DeliveryMethod.Standard,
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
| `beneficiary`                                                                                            | [components.TransfersBeneficiaryCreate](../../models/components/transfersbeneficiarycreate.md)           | :heavy_minus_sign:                                                                                       | A Check Beneficiary                                                                                      |                                                                                                          |
| `deliveryMethod`                                                                                         | [components.DeliveryMethod](../../models/components/deliverymethod.md)                                   | :heavy_check_mark:                                                                                       | The Delivery method of check withdrawal                                                                  | STANDARD                                                                                                 |
| `memos`                                                                                                  | *string*[]                                                                                               | :heavy_minus_sign:                                                                                       | Memos on the check. The max number of lines is 3, with max of 30 characters per line                     | [<br/>"Memo Line"<br/>]                                                                                  |
| `retirementDistribution`                                                                                 | [components.RetirementDistributionCreate](../../models/components/retirementdistributioncreate.md)       | :heavy_minus_sign:                                                                                       | A distribution from a retirement account.                                                                |                                                                                                          |
| `scheduleDetails`                                                                                        | [components.WithdrawalScheduleDetailsCreate](../../models/components/withdrawalscheduledetailscreate.md) | :heavy_check_mark:                                                                                       | Details of withdrawal schedule transfers                                                                 |                                                                                                          |