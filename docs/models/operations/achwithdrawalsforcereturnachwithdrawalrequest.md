# AchWithdrawalsForceReturnAchWithdrawalRequest

## Example Usage

```typescript
import { NachaReturnCreateCode } from "@apexfintechsolutions/ascend-sdk/models/components";
import { AchWithdrawalsForceReturnAchWithdrawalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchWithdrawalsForceReturnAchWithdrawalRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achWithdrawalId: "20230620500726",
  forceReturnAchWithdrawalRequestCreate: {
    nachaReturn: {
      code: NachaReturnCreateCode.R69,
    },
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawals/20230620500726",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The account id.                                                                                                      | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                           |
| `achWithdrawalId`                                                                                                    | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The achWithdrawal id.                                                                                                | 20230620500726                                                                                                       |
| `forceReturnAchWithdrawalRequestCreate`                                                                              | [components.ForceReturnAchWithdrawalRequestCreate](../../models/components/forcereturnachwithdrawalrequestcreate.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |