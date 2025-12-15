# ForceApproveWireDepositRequestCreate

Request to simulate approve of a wire deposit

## Example Usage

```typescript
import { ForceApproveWireDepositRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceApproveWireDepositRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireDeposits/20230817000319",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `name`                                                          | *string*                                                        | :heavy_check_mark:                                              | The name of the wire deposit to force approve                   | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireDeposits/20230817000319 |