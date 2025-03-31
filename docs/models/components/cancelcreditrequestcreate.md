# CancelCreditRequestCreate

Request to cancel an existing credit

## Example Usage

```typescript
import { CancelCreditRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelCreditRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/credits/20230823123456",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | The name of the credit to cancel                           | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/credits/20230823123456 |
| `reason`                                                   | *string*                                                   | :heavy_minus_sign:                                         | The optional reason about why the credit is being canceled | Reverse previous credit                                    |