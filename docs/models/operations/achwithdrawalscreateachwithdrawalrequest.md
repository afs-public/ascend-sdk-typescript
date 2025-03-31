# AchWithdrawalsCreateAchWithdrawalRequest

## Example Usage

```typescript
import { AchWithdrawalsCreateAchWithdrawalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchWithdrawalsCreateAchWithdrawalRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achWithdrawalCreate: {
    bankRelationship:
      "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
    clientTransferId: "179dcd33-49f8-4615-989c-560fb387c4fd",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accountId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The account id.                                                                  | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                       |
| `achWithdrawalCreate`                                                            | [components.AchWithdrawalCreate](../../models/components/achwithdrawalcreate.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |