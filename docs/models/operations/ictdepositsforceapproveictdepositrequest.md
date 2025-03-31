# IctDepositsForceApproveIctDepositRequest

## Example Usage

```typescript
import { IctDepositsForceApproveIctDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: IctDepositsForceApproveIctDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  ictDepositId: "20240321000472",
  forceApproveIctDepositRequestCreate: {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictDeposits/20240321000472",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The account id.                                                                                                  | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                       |
| `ictDepositId`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ictDeposit id.                                                                                               | 20240321000472                                                                                                   |
| `forceApproveIctDepositRequestCreate`                                                                            | [components.ForceApproveIctDepositRequestCreate](../../models/components/forceapproveictdepositrequestcreate.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |