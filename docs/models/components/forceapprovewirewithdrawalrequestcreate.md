# ForceApproveWireWithdrawalRequestCreate

Request to simulate approve of a wire withdrawal

## Example Usage

```typescript
import { ForceApproveWireWithdrawalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceApproveWireWithdrawalRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireWithdrawals/20230817000319",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | The name of the wire withdrawal to force approve                   | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireWithdrawals/20230817000319 |