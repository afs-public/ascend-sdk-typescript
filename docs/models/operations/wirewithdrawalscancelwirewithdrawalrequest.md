# WireWithdrawalsCancelWireWithdrawalRequest

## Example Usage

```typescript
import { WireWithdrawalsCancelWireWithdrawalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: WireWithdrawalsCancelWireWithdrawalRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  wireWithdrawalId: "20230817000319",
  cancelWireWithdrawalRequestCreate: {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireWithdrawals/20230817000319",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The account id.                                                                                              | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                   |
| `wireWithdrawalId`                                                                                           | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The wireWithdrawal id.                                                                                       | 20230817000319                                                                                               |
| `cancelWireWithdrawalRequestCreate`                                                                          | [components.CancelWireWithdrawalRequestCreate](../../models/components/cancelwirewithdrawalrequestcreate.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |