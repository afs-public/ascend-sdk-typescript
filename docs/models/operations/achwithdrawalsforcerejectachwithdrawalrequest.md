# AchWithdrawalsForceRejectAchWithdrawalRequest

## Example Usage

```typescript
import { AchWithdrawalsForceRejectAchWithdrawalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchWithdrawalsForceRejectAchWithdrawalRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achWithdrawalId: "20230620500726",
  forceRejectAchWithdrawalRequestCreate: {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawals/20230620500726",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The account id.                                                                                                      | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                           |
| `achWithdrawalId`                                                                                                    | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The achWithdrawal id.                                                                                                | 20230620500726                                                                                                       |
| `forceRejectAchWithdrawalRequestCreate`                                                                              | [components.ForceRejectAchWithdrawalRequestCreate](../../models/components/forcerejectachwithdrawalrequestcreate.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |