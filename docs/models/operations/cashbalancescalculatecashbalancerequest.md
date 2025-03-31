# CashBalancesCalculateCashBalanceRequest

## Example Usage

```typescript
import { CashBalancesCalculateCashBalanceRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: CashBalancesCalculateCashBalanceRequest = {
  accountId: "01H8FB90ZRRFWXB4XC2JPJ1D4Y",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                                  | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The account id.                                                                                                              | 01H8FB90ZRRFWXB4XC2JPJ1D4Y                                                                                                   |
| `mechanism`                                                                                                                  | [operations.Mechanism](../../models/operations/mechanism.md)                                                                 | :heavy_minus_sign:                                                                                                           | The withdraw mechanism to calculate the balance for. The mechanism determines what account activity will affect the balance. | ACH                                                                                                                          |