# InvestmentProfileCreate

Investor profile.

## Example Usage

```typescript
import { InvestmentProfileCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InvestmentProfileCreate = {};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountGoals`                                                                                                                                                       | [components.AccountGoalsCreate](../../models/components/accountgoalscreate.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                   | The account goals on an investor profile.                                                                                                                            |
| `customerProfile`                                                                                                                                                    | [components.CustomerProfileCreate](../../models/components/customerprofilecreate.md)                                                                                 | :heavy_minus_sign:                                                                                                                                                   | A detailed summary of financial and personal details of an investor, to help understand the investor's financial standing, investment experience and risk tolerance. |