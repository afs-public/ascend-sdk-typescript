# Interest

Used to record the payment of interest to accounts that have maintained a cash balance or the charging of interest to accounts that have used margin and details related to the interest

## Example Usage

```typescript
import { Interest } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Interest = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `interestAccrualEndDate`                                                                   | [components.InterestAccrualEndDate](../../models/components/interestaccrualenddate.md)     | :heavy_minus_sign:                                                                         | Date on which interest accrues before the calculation is made for payment or charge        | {<br/>"day": 28,<br/>"month": 10,<br/>"year": 2024<br/>}                                   |
| `interestAccrualStartDate`                                                                 | [components.InterestAccrualStartDate](../../models/components/interestaccrualstartdate.md) | :heavy_minus_sign:                                                                         | Date on which interest begins to accrue on a cash balance or borrowed funds                | {<br/>"day": 28,<br/>"month": 10,<br/>"year": 2024<br/>}                                   |
| `interestType`                                                                             | [components.InterestType](../../models/components/interesttype.md)                         | :heavy_minus_sign:                                                                         | N/A                                                                                        | CREDIT                                                                                     |