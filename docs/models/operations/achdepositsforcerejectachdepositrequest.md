# AchDepositsForceRejectAchDepositRequest

## Example Usage

```typescript
import { AchDepositsForceRejectAchDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchDepositsForceRejectAchDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achDepositId: "20230817000319",
  forceRejectAchDepositRequestCreate: {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The account id.                                                                                                | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                     |
| `achDepositId`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The achDeposit id.                                                                                             | 20230817000319                                                                                                 |
| `forceRejectAchDepositRequestCreate`                                                                           | [components.ForceRejectAchDepositRequestCreate](../../models/components/forcerejectachdepositrequestcreate.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |