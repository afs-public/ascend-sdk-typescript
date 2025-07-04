# ForceRejectIctWithdrawalRequestCreate

Request to simulate the rejection of an ICT withdrawal

## Example Usage

```typescript
import { ForceRejectIctWithdrawalRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ForceRejectIctWithdrawalRequestCreate = {
  name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictWithdrawals/20240321000472",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Full name of the ICT withdrawal resource to force a rejection on. Contains account id and ICT withdrawal id. | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/ictWithdrawals/20240321000472                                            |
| `reason`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Reason why the ICT withdrawal is being rejected                                                              | Simulate a rejected transfer                                                                                 |