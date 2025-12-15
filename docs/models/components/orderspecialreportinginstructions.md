# OrderSpecialReportingInstructions

## Example Usage

```typescript
import { OrderSpecialReportingInstructions } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderSpecialReportingInstructions =
  OrderSpecialReportingInstructions.AveragePrice;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                       | Value                                      |
| ------------------------------------------ | ------------------------------------------ |
| `SpecialReportingInstructionsUnspecified`  | SPECIAL_REPORTING_INSTRUCTIONS_UNSPECIFIED |
| `CustomerDirected`                         | CUSTOMER_DIRECTED                          |
| `WithDividend`                             | WITH_DIVIDEND                              |
| `WithRights`                               | WITH_RIGHTS                                |
| `DiscretionExercised`                      | DISCRETION_EXERCISED                       |
| `DiscretionNotExercised`                   | DISCRETION_NOT_EXERCISED                   |
| `BrokerDealerOrder`                        | BROKER_DEALER_ORDER                        |
| `FullyRegistered`                          | FULLY_REGISTERED                           |
| `OddlotDiffOnRequest`                      | ODDLOT_DIFF_ON_REQUEST                     |
| `ProspectusEnclosed`                       | PROSPECTUS_ENCLOSED                        |
| `ProspectusSeparateMail`                   | PROSPECTUS_SEPARATE_MAIL                   |
| `Solicited`                                | SOLICITED                                  |
| `Unsolicited`                              | UNSOLICITED                                |
| `XDividend`                                | X_DIVIDEND                                 |
| `ActingAsPrincipal`                        | ACTING_AS_PRINCIPAL                        |
| `AveragePrice`                             | AVERAGE_PRICE                              |
| `BrokerLiquidation`                        | BROKER_LIQUIDATION                         |
| `InternetOrder`                            | INTERNET_ORDER                             |
| `MarginSellout`                            | MARGIN_SELLOUT                             |
| `NegativeNetProceed`                       | NEGATIVE_NET_PROCEED                       |
| `RisklessPrincipal`                        | RISKLESS_PRINCIPAL                         |
| `ThirdMarket`                              | THIRD_MARKET                               |
| `SuppressTraceReporting`                   | SUPPRESS_TRACE_REPORTING                   |
| `WhenDistributed`                          | WHEN_DISTRIBUTED                           |
| `RoundUp`                                  | ROUND_UP                                   |
| `CatParentAlgo`                            | CAT_PARENT_ALGO                            |
| `CatParentGtc`                             | CAT_PARENT_GTC                             |
| -                                          | `Unrecognized<string>`                     |