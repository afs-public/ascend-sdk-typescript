# CancelAchWithdrawalRequestCreate

Request to cancel an existing ACH withdrawal.

## Example Usage

```typescript
import { CancelAchWithdrawalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelAchWithdrawalRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawals/20230620500726",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The name of the ACH withdrawal to cancel.                         | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawals/20230620500726 |
| `reason`                                                          | *string*                                                          | :heavy_minus_sign:                                                | The reason why the ACH withdrawal is being canceled.              | User Request                                                      |