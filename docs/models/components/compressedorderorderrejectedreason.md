# CompressedOrderOrderRejectedReason

When an order has the REJECTED status, this will be populated with a system code describing the rejection.

## Example Usage

```typescript
import { CompressedOrderOrderRejectedReason } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CompressedOrderOrderRejectedReason =
  CompressedOrderOrderRejectedReason.BelowNotionalMinimum;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                                      | Value                                                     |
| --------------------------------------------------------- | --------------------------------------------------------- |
| `OrderRejectReasonUnspecified`                            | ORDER_REJECT_REASON_UNSPECIFIED                           |
| `BrokerOption`                                            | BROKER_OPTION                                             |
| `UnknownSecurity`                                         | UNKNOWN_SECURITY                                          |
| `ExchangeClosed`                                          | EXCHANGE_CLOSED                                           |
| `TooLateToEnter`                                          | TOO_LATE_TO_ENTER                                         |
| `UnknownOrder`                                            | UNKNOWN_ORDER                                             |
| `DuplicateOrder`                                          | DUPLICATE_ORDER                                           |
| `StaleOrder`                                              | STALE_ORDER                                               |
| `BelowNotionalMinimum`                                    | BELOW_NOTIONAL_MINIMUM                                    |
| `AccountNotEntitled`                                      | ACCOUNT_NOT_ENTITLED                                      |
| `SystemError`                                             | SYSTEM_ERROR                                              |
| `BlockingCorporateAction`                                 | BLOCKING_CORPORATE_ACTION                                 |
| `UnavailablePriceQuote`                                   | UNAVAILABLE_PRICE_QUOTE                                   |
| `ExecutionMisconfiguredClient`                            | EXECUTION_MISCONFIGURED_CLIENT                            |
| `NotionalQuantityNotAllowedForSecurity`                   | NOTIONAL_QUANTITY_NOT_ALLOWED_FOR_SECURITY                |
| `FractionalQuantityNotAllowedForSecurity`                 | FRACTIONAL_QUANTITY_NOT_ALLOWED_FOR_SECURITY              |
| `OnlyFractionalSellOrWholeOrdersAllowedForSecurity`       | ONLY_FRACTIONAL_SELL_OR_WHOLE_ORDERS_ALLOWED_FOR_SECURITY |
| `SymbolNotTradeable`                                      | SYMBOL_NOT_TRADEABLE                                      |
| `AboveNotionalMaximum`                                    | ABOVE_NOTIONAL_MAXIMUM                                    |
| `AboveShareMaximum`                                       | ABOVE_SHARE_MAXIMUM                                       |
| `MaxSellQuantityRequired`                                 | MAX_SELL_QUANTITY_REQUIRED                                |
| `MaxSellQuantityProhibited`                               | MAX_SELL_QUANTITY_PROHIBITED                              |
| `StockTradesDisabled`                                     | STOCK_TRADES_DISABLED                                     |
| `AssetNotSetUpToTrade`                                    | ASSET_NOT_SET_UP_TO_TRADE                                 |
| `AnotherBasketOrderForAccountHasFailedRiskChecks`         | ANOTHER_BASKET_ORDER_FOR_ACCOUNT_HAS_FAILED_RISK_CHECKS   |
| `InsufficientPosition`                                    | INSUFFICIENT_POSITION                                     |
| `FailedBuyingPower`                                       | FAILED_BUYING_POWER                                       |
| `RoundUpAmountTooSmall`                                   | ROUND_UP_AMOUNT_TOO_SMALL                                 |
| `AssetNotSetUpForRoundUps`                                | ASSET_NOT_SET_UP_FOR_ROUND_UPS                            |
| -                                                         | `Unrecognized<string>`                                    |