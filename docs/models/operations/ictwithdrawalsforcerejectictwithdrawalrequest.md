# IctWithdrawalsForceRejectIctWithdrawalRequest

## Example Usage

```typescript
import { IctWithdrawalsForceRejectIctWithdrawalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: IctWithdrawalsForceRejectIctWithdrawalRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  ictWithdrawalId: "20240321000472",
  forceRejectIctWithdrawalRequestCreate: {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictWithdrawals/20240321000472",
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                          | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The account id.                                                                                                      | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                           |
| `ictWithdrawalId`                                                                                                    | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The ictWithdrawal id.                                                                                                | 20240321000472                                                                                                       |
| `forceRejectIctWithdrawalRequestCreate`                                                                              | [components.ForceRejectIctWithdrawalRequestCreate](../../models/components/forcerejectictwithdrawalrequestcreate.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |                                                                                                                      |