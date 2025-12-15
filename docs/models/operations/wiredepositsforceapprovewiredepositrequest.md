# WireDepositsForceApproveWireDepositRequest

## Example Usage

```typescript
import { WireDepositsForceApproveWireDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: WireDepositsForceApproveWireDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  wireDepositId: "20230817000319",
  forceApproveWireDepositRequestCreate: {
    name: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/wireDeposits/20230817000319",
  },
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                                        | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The account id.                                                                                                    | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                         |
| `wireDepositId`                                                                                                    | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The wireDeposit id.                                                                                                | 20230817000319                                                                                                     |
| `forceApproveWireDepositRequestCreate`                                                                             | [components.ForceApproveWireDepositRequestCreate](../../models/components/forceapprovewiredepositrequestcreate.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |                                                                                                                    |