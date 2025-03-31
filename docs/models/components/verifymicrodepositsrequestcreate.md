# VerifyMicroDepositsRequestCreate

Verifies micro deposits for a pending relationship.

## Example Usage

```typescript
import { VerifyMicroDepositsRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: VerifyMicroDepositsRequestCreate = {
  amounts: {
    amount1: {},
    amount2: {},
  },
  name:
    "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `amounts`                                                                                    | [components.MicroDepositAmountsCreate](../../models/components/microdepositamountscreate.md) | :heavy_check_mark:                                                                           | The micro deposits sent to verify a pending bank relationship. FOR TESTING ONLY!             |                                                                                              |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | The name of the relationship to verify.                                                      | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e               |