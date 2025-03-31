# AccountGoalsUpdateRiskTolerance

An investor’s willingness and ability to tolerate risk when making investment decisions; reflects the investor’s comfort level with the potential ups and downs of the market and their ability to withstand potential losses

## Example Usage

```typescript
import { AccountGoalsUpdateRiskTolerance } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AccountGoalsUpdateRiskTolerance =
  AccountGoalsUpdateRiskTolerance.Medium;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `RiskToleranceUnspecified` | RISK_TOLERANCE_UNSPECIFIED |
| `Low`                      | LOW                        |
| `Medium`                   | MEDIUM                     |
| `High`                     | HIGH                       |
| -                          | `Unrecognized<string>`     |