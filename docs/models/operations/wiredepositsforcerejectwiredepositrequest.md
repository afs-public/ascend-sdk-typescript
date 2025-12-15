# WireDepositsForceRejectWireDepositRequest

## Example Usage

```typescript
import { WireDepositsForceRejectWireDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: WireDepositsForceRejectWireDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  wireDepositId: "20230817000319",
  forceRejectWireDepositRequestCreate: {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireDeposits/20230817000319",
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The account id.                                                                                                  | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                       |
| `wireDepositId`                                                                                                  | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The wireDeposit id.                                                                                              | 20230817000319                                                                                                   |
| `forceRejectWireDepositRequestCreate`                                                                            | [components.ForceRejectWireDepositRequestCreate](../../models/components/forcerejectwiredepositrequestcreate.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |                                                                                                                  |