# WireDepositsSimulateWireDepositRequest

## Example Usage

```typescript
import { WireDepositsSimulateWireDepositRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: WireDepositsSimulateWireDepositRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  simulateWireDepositRequestCreate: {
    amount: {},
    parent: "accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y",
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The account id.                                                                                            | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                 |
| `simulateWireDepositRequestCreate`                                                                         | [components.SimulateWireDepositRequestCreate](../../models/components/simulatewiredepositrequestcreate.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |                                                                                                            |