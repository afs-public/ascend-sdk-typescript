# ForceApproveIctWithdrawalRequestCreate

Request to simulate the approval of an ICT withdrawal

## Example Usage

```typescript
import { ForceApproveIctWithdrawalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceApproveIctWithdrawalRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictWithdrawals/20240321000472",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Full name of the ICT withdrawal resource to force a rejection on. Contains account id and ICT withdrawal id. | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictWithdrawals/20240321000472                                            |