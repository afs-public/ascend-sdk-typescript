# ForceApproveAchDepositRequestCreate

Request to force approval of an existing ACH deposit that is pending review. FOR TESTING ONLY!

## Example Usage

```typescript
import { ForceApproveAchDepositRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceApproveAchDepositRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The name of the ACH deposit to force approve.                  | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319 |