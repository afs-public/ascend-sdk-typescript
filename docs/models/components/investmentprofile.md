# InvestmentProfile

The account's goals and customer's financial profile; Used to assess customer fitness and is required by FINRA

## Example Usage

```typescript
import { InvestmentProfile } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InvestmentProfile = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `accountGoals`                                                           | [components.AccountGoals](../../models/components/accountgoals.md)       | :heavy_minus_sign:                                                       | Account goals.                                                           |                                                                          |
| `customerProfile`                                                        | [components.CustomerProfile](../../models/components/customerprofile.md) | :heavy_minus_sign:                                                       | Customer profile.                                                        |                                                                          |
| `investmentProfileId`                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | The investment profile ID (generated internally).                        | 8a111faf-2923-44e4-9e1b-59328e72467b                                     |