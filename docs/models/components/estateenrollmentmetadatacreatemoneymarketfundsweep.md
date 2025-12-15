# EstateEnrollmentMetadataCreateMoneyMarketFundSweep

Option to auto-enroll in Money Market Fund Sweep; defaults to MONEY_MARKET_FUND_SWEEP_ENROLL

## Example Usage

```typescript
import { EstateEnrollmentMetadataCreateMoneyMarketFundSweep } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EstateEnrollmentMetadataCreateMoneyMarketFundSweep =
  EstateEnrollmentMetadataCreateMoneyMarketFundSweep.MoneyMarketFundSweepEnroll;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                            | Value                                           |
| ----------------------------------------------- | ----------------------------------------------- |
| `AutoEnrollMoneyMarketFundSweepUnspecified`     | AUTO_ENROLL_MONEY_MARKET_FUND_SWEEP_UNSPECIFIED |
| `MoneyMarketFundSweepEnroll`                    | MONEY_MARKET_FUND_SWEEP_ENROLL                  |
| `MoneyMarketFundSweepDecline`                   | MONEY_MARKET_FUND_SWEEP_DECLINE                 |
| -                                               | `Unrecognized<string>`                          |