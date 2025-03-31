# AchDepositsForceApproveAchDepositRequest

## Example Usage

```typescript
import { AchDepositsForceApproveAchDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchDepositsForceApproveAchDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achDepositId: "20230817000319",
  forceApproveAchDepositRequestCreate: {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The account id.                                                                                                  | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                       |
| `achDepositId`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The achDeposit id.                                                                                               | 20230817000319                                                                                                   |
| `forceApproveAchDepositRequestCreate`                                                                            | [components.ForceApproveAchDepositRequestCreate](../../models/components/forceapproveachdepositrequestcreate.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |