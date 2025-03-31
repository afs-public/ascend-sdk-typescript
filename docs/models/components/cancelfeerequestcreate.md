# CancelFeeRequestCreate

Request to cancel an existing fee

## Example Usage

```typescript
import { CancelFeeRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelFeeRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/fees/20230823123456",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `name`                                                  | *string*                                                | :heavy_check_mark:                                      | The name of the fee to cancel                           | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/fees/20230823123456 |
| `reason`                                                | *string*                                                | :heavy_minus_sign:                                      | The optional reason about why the fee is being canceled | Reverse fee charge                                      |