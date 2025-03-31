# WireWithdrawalScheduleCreate

A withdrawal transfer schedule using the Wire mechanism

## Example Usage

```typescript
import { RecipientBankBankIdCreateType, TimeUnit, WireWithdrawalScheduleCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: WireWithdrawalScheduleCreate = {
  beneficiary: {
    account: "73849218650987",
  },
  recipientBank: {
    bankId: {
      id: "ABNANL2AXXX",
      type: RecipientBankBankIdCreateType.Bic,
    },
  },
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `beneficiary`                                                                                                | [components.WireWithdrawalBeneficiaryCreate](../../models/components/wirewithdrawalbeneficiarycreate.md)     | :heavy_check_mark:                                                                                           | The person or entity taking receipt of the wired funds                                                       |
| `intermediary`                                                                                               | [components.WireWithdrawalIntermediaryCreate](../../models/components/wirewithdrawalintermediarycreate.md)   | :heavy_minus_sign:                                                                                           | An intermediary party                                                                                        |
| `recipientBank`                                                                                              | [components.WireWithdrawalRecipientBankCreate](../../models/components/wirewithdrawalrecipientbankcreate.md) | :heavy_check_mark:                                                                                           | A recipient bank / financial institution                                                                     |
| `retirementDistribution`                                                                                     | [components.RetirementDistributionCreate](../../models/components/retirementdistributioncreate.md)           | :heavy_minus_sign:                                                                                           | A distribution from a retirement account.                                                                    |
| `scheduleDetails`                                                                                            | [components.WithdrawalScheduleDetailsCreate](../../models/components/withdrawalscheduledetailscreate.md)     | :heavy_check_mark:                                                                                           | Details of withdrawal schedule transfers                                                                     |