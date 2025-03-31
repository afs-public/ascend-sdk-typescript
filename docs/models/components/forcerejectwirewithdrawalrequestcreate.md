# ForceRejectWireWithdrawalRequestCreate

Request to simulate the rejection of a wire withdrawal

## Example Usage

```typescript
import { ForceRejectWireWithdrawalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceRejectWireWithdrawalRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireWithdrawals/20230817000319",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | The name of the wire withdrawal to force a rejection on            | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireWithdrawals/20230817000319 |
| `reason`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | The reason for the reject                                          | Simulate a rejected transfer                                       |