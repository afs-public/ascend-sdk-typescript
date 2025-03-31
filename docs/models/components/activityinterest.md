# ActivityInterest

Used to record the payment of interest to accounts that have maintained a cash balance or the charging of interest to accounts that have used margin and details related to the interest

## Example Usage

```typescript
import { ActivityInterest } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityInterest = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `interestAccrualEndDate`                                                                                   | [components.ActivityInterestAccrualEndDate](../../models/components/activityinterestaccrualenddate.md)     | :heavy_minus_sign:                                                                                         | Date on which interest accrues before the calculation is made for payment or charge                        | {<br/>"day": 28,<br/>"month": 10,<br/>"year": 2024<br/>}                                                   |
| `interestAccrualStartDate`                                                                                 | [components.ActivityInterestAccrualStartDate](../../models/components/activityinterestaccrualstartdate.md) | :heavy_minus_sign:                                                                                         | Date on which interest begins to accrue on a cash balance or borrowed funds                                | {<br/>"day": 28,<br/>"month": 10,<br/>"year": 2024<br/>}                                                   |
| `interestType`                                                                                             | [components.ActivityInterestType](../../models/components/activityinteresttype.md)                         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        | CREDIT                                                                                                     |