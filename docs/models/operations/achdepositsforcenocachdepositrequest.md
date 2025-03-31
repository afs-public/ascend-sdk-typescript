# AchDepositsForceNocAchDepositRequest

## Example Usage

```typescript
import { Code } from "@apexfintechsolutions/ascend-sdk/models/components";
import { AchDepositsForceNocAchDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchDepositsForceNocAchDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achDepositId: "20230817000319",
  forceNocAchDepositRequestCreate: {
    nachaNoc: {
      code: Code.C01,
    },
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The account id.                                                                                          | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                               |
| `achDepositId`                                                                                           | *string*                                                                                                 | :heavy_check_mark:                                                                                       | The achDeposit id.                                                                                       | 20230817000319                                                                                           |
| `forceNocAchDepositRequestCreate`                                                                        | [components.ForceNocAchDepositRequestCreate](../../models/components/forcenocachdepositrequestcreate.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |