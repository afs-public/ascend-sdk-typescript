# DepositedFunds

The initial amount of money placed into the account by the customer upon or after the account's establishment.

## Example Usage

```typescript
import { DepositedFunds } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: DepositedFunds = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `initialDepositAmount`                                                             | [components.InitialDepositAmount](../../models/components/initialdepositamount.md) | :heavy_minus_sign:                                                                 | The initial deposit amount in USD                                                  | 234.34                                                                             |
| `initialDepositSource`                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | The source of the initial deposit                                                  | Product Revenue                                                                    |