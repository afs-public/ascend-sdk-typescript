# AchDepositsForceReturnAchDepositRequest

## Example Usage

```typescript
import { NachaReturnCreateCode } from "@apexfintechsolutions/ascend-sdk/models/components";
import { AchDepositsForceReturnAchDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchDepositsForceReturnAchDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achDepositId: "20230817000319",
  forceReturnAchDepositRequestCreate: {
    nachaReturn: {
      code: NachaReturnCreateCode.R41,
    },
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/achDeposits/20230817000319",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The account id.                                                                                                | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                     |
| `achDepositId`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The achDeposit id.                                                                                             | 20230817000319                                                                                                 |
| `forceReturnAchDepositRequestCreate`                                                                           | [components.ForceReturnAchDepositRequestCreate](../../models/components/forcereturnachdepositrequestcreate.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |