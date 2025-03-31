# IctWithdrawalsCreateIctWithdrawalRequest

## Example Usage

```typescript
import { IctWithdrawalCreateProgram } from "@apexfintechsolutions/ascend-sdk/models/components";
import { IctWithdrawalsCreateIctWithdrawalRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: IctWithdrawalsCreateIctWithdrawalRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  ictWithdrawalCreate: {
    clientTransferId: "20230817000319",
    program: IctWithdrawalCreateProgram.BrokerPartner,
    travelRule: {
      recipientInstitution: {
        accountId: "<id>",
        title: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accountId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | The account id.                                                                  | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                       |
| `ictWithdrawalCreate`                                                            | [components.IctWithdrawalCreate](../../models/components/ictwithdrawalcreate.md) | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |