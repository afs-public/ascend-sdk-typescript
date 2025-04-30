# ForceReturnAchDepositRequestCreate

Request to force a Nacha return on a completed ACH deposit. FOR TESTING ONLY!

## Example Usage

```typescript
import { ForceReturnAchDepositRequestCreate, NachaReturnCreateCode } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceReturnAchDepositRequestCreate = {
  nachaReturn: {
    code: NachaReturnCreateCode.R67,
  },
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `nachaReturn`                                                                | [components.NachaReturnCreate](../../models/components/nachareturncreate.md) | :heavy_check_mark:                                                           | A return on an ACH transfer from the Nacha network.                          |                                                                              |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name of the ACH deposit to force a Nacha return on.                      | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319               |