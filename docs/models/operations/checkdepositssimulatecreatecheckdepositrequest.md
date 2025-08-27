# CheckDepositsSimulateCreateCheckDepositRequest

## Example Usage

```typescript
import { CheckDepositsSimulateCreateCheckDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CheckDepositsSimulateCreateCheckDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  simulateCreateCheckDepositRequestCreate: {
    amount: {},
    parent: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  },
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                              | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The account id.                                                                                                          | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                               |
| `simulateCreateCheckDepositRequestCreate`                                                                                | [components.SimulateCreateCheckDepositRequestCreate](../../models/components/simulatecreatecheckdepositrequestcreate.md) | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |                                                                                                                          |