# IctDepositsCreateIctDepositRequest

## Example Usage

```typescript
import { Program } from "@apexfintechsolutions/ascend-sdk/models/components";
import { IctDepositsCreateIctDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: IctDepositsCreateIctDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  ictDepositCreate: {
    amount: {},
    clientTransferId: "ABC-123",
    program: Program.DepositOnly,
    travelRule: {
      originatingInstitution: {
        accountId: "<id>",
        title: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `accountId`                                                                | *string*                                                                   | :heavy_check_mark:                                                         | The account id.                                                            | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                 |
| `ictDepositCreate`                                                         | [components.IctDepositCreate](../../models/components/ictdepositcreate.md) | :heavy_check_mark:                                                         | N/A                                                                        |                                                                            |