# WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest

## Example Usage

```typescript
import { RecipientBankBankIdCreateType, TimeUnit } from "@apexfintechsolutions/ascend-sdk/models/components";
import { WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: WireWithdrawalSchedulesCreateWireWithdrawalScheduleRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  wireWithdrawalScheduleCreate: {
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
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | The account id.                                                                                    | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                         |
| `wireWithdrawalScheduleCreate`                                                                     | [components.WireWithdrawalScheduleCreate](../../models/components/wirewithdrawalschedulecreate.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |