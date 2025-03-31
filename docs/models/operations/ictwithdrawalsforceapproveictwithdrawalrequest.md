# IctWithdrawalsForceApproveIctWithdrawalRequest

## Example Usage

```typescript
import { IctWithdrawalsForceApproveIctWithdrawalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: IctWithdrawalsForceApproveIctWithdrawalRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  ictWithdrawalId: "20240321000472",
  forceApproveIctWithdrawalRequestCreate: {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictWithdrawals/20240321000472",
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The account id.                                                                                                        | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                             |
| `ictWithdrawalId`                                                                                                      | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ictWithdrawal id.                                                                                                  | 20240321000472                                                                                                         |
| `forceApproveIctWithdrawalRequestCreate`                                                                               | [components.ForceApproveIctWithdrawalRequestCreate](../../models/components/forceapproveictwithdrawalrequestcreate.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |