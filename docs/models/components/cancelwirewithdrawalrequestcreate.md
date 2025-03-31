# CancelWireWithdrawalRequestCreate

Request to cancel an existing wire withdrawal. The cancel will only succeed if the wire has not made it to the SendingToBank state

## Example Usage

```typescript
import { CancelWireWithdrawalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelWireWithdrawalRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireWithdrawals/20230817000319",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | The name of the wire withdrawal to cancel                          | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireWithdrawals/20230817000319 |
| `reason`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | The reason why the wire withdrawal is being canceled               | User Request                                                       |