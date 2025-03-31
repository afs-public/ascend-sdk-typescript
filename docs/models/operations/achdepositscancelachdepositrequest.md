# AchDepositsCancelAchDepositRequest

## Example Usage

```typescript
import { AchDepositsCancelAchDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchDepositsCancelAchDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achDepositId: "20230817000319",
  cancelAchDepositRequestCreate: {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The account id.                                                                                      | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                           |
| `achDepositId`                                                                                       | *string*                                                                                             | :heavy_check_mark:                                                                                   | The achDeposit id.                                                                                   | 20230817000319                                                                                       |
| `cancelAchDepositRequestCreate`                                                                      | [components.CancelAchDepositRequestCreate](../../models/components/cancelachdepositrequestcreate.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |