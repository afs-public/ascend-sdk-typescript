# ForceRejectAchDepositRequestCreate

Request to force rejection of an existing ACH deposit that is pending review. FOR TESTING ONLY!

## Example Usage

```typescript
import { ForceRejectAchDepositRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceRejectAchDepositRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The name of the ACH deposit to force reject.                   | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319 |