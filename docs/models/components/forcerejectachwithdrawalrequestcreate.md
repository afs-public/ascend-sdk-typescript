# ForceRejectAchWithdrawalRequestCreate

Request to force rejection of an existing ACH withdrawal that is pending review. FOR TESTING ONLY!

## Example Usage

```typescript
import { ForceRejectAchWithdrawalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceRejectAchWithdrawalRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawals/20230620500726",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The name of the ACH withdrawal to force reject.                   | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achWithdrawals/20230620500726 |