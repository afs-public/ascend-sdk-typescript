# AchDepositsCreateAchDepositRequest

## Example Usage

```typescript
import { AchDepositsCreateAchDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AchDepositsCreateAchDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  achDepositCreate: {
    amount: {},
    bankRelationship:
      "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/bankRelationships/651ef9de0dee00240813e60e",
    clientTransferId: "179dcd33-49f8-4615-989c-560fb387c4fd",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accountId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | The account id.                                                            | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                 |
| `achDepositCreate`                                                         | [components.AchDepositCreate](../../models/components/achdepositcreate.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |