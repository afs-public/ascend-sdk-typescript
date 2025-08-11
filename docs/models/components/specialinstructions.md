# SpecialInstructions

## Example Usage

```typescript
import { SpecialInstructions } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SpecialInstructions = SpecialInstructions.FullyRegistered;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                             | Value                            |
| -------------------------------- | -------------------------------- |
| `SpecialInstructionsUnspecified` | SPECIAL_INSTRUCTIONS_UNSPECIFIED |
| `Rule144`                        | RULE_144                         |
| `WithDividend`                   | WITH_DIVIDEND                    |
| `WithRights`                     | WITH_RIGHTS                      |
| `CloseContract`                  | CLOSE_CONTRACT                   |
| `CoverShort`                     | COVER_SHORT                      |
| `CrossTrade`                     | CROSS_TRADE                      |
| `OpenContractCovered`            | OPEN_CONTRACT_COVERED            |
| `DiscretionExercised`            | DISCRETION_EXERCISED             |
| `DiscretionNotExercised`         | DISCRETION_NOT_EXERCISED         |
| `OptionAssignment`               | OPTION_ASSIGNMENT                |
| `EmployeeStockOption`            | EMPLOYEE_STOCK_OPTION            |
| `InvestmentBanking`              | INVESTMENT_BANKING               |
| `BrokerDealerOrder`              | BROKER_DEALER_ORDER              |
| `MakeMarketInSecurity`           | MAKE_MARKET_IN_SECURITY          |
| `MakeMarketSolicited`            | MAKE_MARKET_SOLICITED            |
| `MakeMarketUnsolicited`          | MAKE_MARKET_UNSOLICITED          |
| `CustomerDirected`               | CUSTOMER_DIRECTED                |
| `FullyRegistered`                | FULLY_REGISTERED                 |
| `OpenContract`                   | OPEN_CONTRACT                    |
| `OddlotDiffOnRequest`            | ODDLOT_DIFF_ON_REQUEST           |
| `ProspectusEnclosed`             | PROSPECTUS_ENCLOSED              |
| `ProspectusSeparateMail`         | PROSPECTUS_SEPARATE_MAIL         |
| `Solicited`                      | SOLICITED                        |
| `Unsolicited`                    | UNSOLICITED                      |
| `XDividend`                      | X_DIVIDEND                       |
| `ActingAsPrincipal`              | ACTING_AS_PRINCIPAL              |
| `AveragePrice`                   | AVERAGE_PRICE                    |
| `BrokerLiquidation`              | BROKER_LIQUIDATION               |
| `CouponBooks`                    | COUPON_BOOKS                     |
| `HasPostageFee`                  | HAS_POSTAGE_FEE                  |
| `InternetOrder`                  | INTERNET_ORDER                   |
| `MarginSellout`                  | MARGIN_SELLOUT                   |
| `MarketMakersAsPrincipal`        | MARKET_MAKERS_AS_PRINCIPAL       |
| `NegativeNetProceed`             | NEGATIVE_NET_PROCEED             |
| `PreFigIndicator`                | PRE_FIG_INDICATOR                |
| `RisklessPrincipalInstruction`   | RISKLESS_PRINCIPAL_INSTRUCTION   |
| `ShortInstruction`               | SHORT_INSTRUCTION                |
| `ThirdMarket`                    | THIRD_MARKET                     |
| `SuppressMsrbTransmission`       | SUPPRESS_MSRB_TRANSMISSION       |
| `SuppressTraceReporting`         | SUPPRESS_TRACE_REPORTING         |
| `SuppressEmailNotification`      | SUPPRESS_EMAIL_NOTIFICATION      |
| `StockReward`                    | STOCK_REWARD                     |
| `SuppressRegFees`                | SUPPRESS_REG_FEES                |
| `SuppressSecFee`                 | SUPPRESS_SEC_FEE                 |
| `SuppressTafFee`                 | SUPPRESS_TAF_FEE                 |
| `DividendReinvestment`           | DIVIDEND_REINVESTMENT            |
| -                                | `Unrecognized<string>`           |