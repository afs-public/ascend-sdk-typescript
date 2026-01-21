# CheckDepositsForceApproveCheckDepositRequest

## Example Usage

```typescript
import { CheckDepositsForceApproveCheckDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CheckDepositsForceApproveCheckDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  checkDepositId: "20230817000319",
  forceApproveCheckDepositRequestCreate: {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/checkDeposits/20230817000319",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The account id.                                                                                                      | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                           |
| `checkDepositId`                                                                                                     | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The checkDeposit id.                                                                                                 | 20230817000319                                                                                                       |
| `forceApproveCheckDepositRequestCreate`                                                                              | [components.ForceApproveCheckDepositRequestCreate](../../models/components/forceapprovecheckdepositrequestcreate.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |