# CancelAchDepositRequestCreate

Request to cancel an existing ACH deposit.

## Example Usage

```typescript
import { CancelAchDepositRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelAchDepositRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The name of the ACH deposit to cancel.                         | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319 |
| `reason`                                                       | *string*                                                       | :heavy_minus_sign:                                             | Reason why the ACH deposit is being canceled.                  | User Request                                                   |