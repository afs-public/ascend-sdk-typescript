# ForceApproveIctDepositRequestCreate

Request to simulate the approval of an ICT deposit

## Example Usage

```typescript
import { ForceApproveIctDepositRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceApproveIctDepositRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictDeposits/20240321000472",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | Full name of the ICT deposit resource to force an approval on. Contains account id and ICT deposit id. | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictDeposits/20240321000472                                         |