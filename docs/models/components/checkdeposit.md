# CheckDeposit

A deposit transfer using the check mechanism.

## Example Usage

```typescript
import { CheckDeposit } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CheckDeposit = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                       | [components.CheckDepositAmount](../../models/components/checkdepositamount.md)                                 | :heavy_minus_sign:                                                                                             | The amount in USD.                                                                                             | {<br/>"value": "10.00"<br/>}                                                                                   |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | The resource name of the check deposit. Format: accounts/{account}/checkDeposits/{check_deposit}               | accounts/01H8FB90ZRRFWXB4XC2JPJ1D4Y/checkDeposits/20230817000319                                               |
| `retirementContribution`                                                                                       | [components.CheckDepositRetirementContribution](../../models/components/checkdepositretirementcontribution.md) | :heavy_minus_sign:                                                                                             | The retirement contribution details.                                                                           |                                                                                                                |
| `state`                                                                                                        | [components.CheckDepositState](../../models/components/checkdepositstate.md)                                   | :heavy_minus_sign:                                                                                             | The current state of the check deposit.                                                                        |                                                                                                                |