# OrderRejectedReason

When an order has the REJECTED status, this will be populated with a system code describing the rejection.

## Example Usage

```typescript
import { OrderRejectedReason } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderRejectedReason = OrderRejectedReason.FailedBuyingPower;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                                      | Value                                                     |
| --------------------------------------------------------- | --------------------------------------------------------- |
| `OrderRejectReasonUnspecified`                            | ORDER_REJECT_REASON_UNSPECIFIED                           |
| `BrokerOption`                                            | BROKER_OPTION                                             |
| `UnknownSecurity`                                         | UNKNOWN_SECURITY                                          |
| `ExchangeClosed`                                          | EXCHANGE_CLOSED                                           |
| `OrderExceedsLimit`                                       | ORDER_EXCEEDS_LIMIT                                       |
| `TooLateToEnter`                                          | TOO_LATE_TO_ENTER                                         |
| `UnknownOrder`                                            | UNKNOWN_ORDER                                             |
| `DuplicateOrder`                                          | DUPLICATE_ORDER                                           |
| `StaleOrder`                                              | STALE_ORDER                                               |
| `BelowNotionalMinimum`                                    | BELOW_NOTIONAL_MINIMUM                                    |
| `OrderDateUnavailable`                                    | ORDER_DATE_UNAVAILABLE                                    |
| `AggressiveLimitPrice`                                    | AGGRESSIVE_LIMIT_PRICE                                    |
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
| `FailedBuyingPower`                                       | FAILED_BUYING_POWER                                       |
| `InsufficientPosition`                                    | INSUFFICIENT_POSITION                                     |
| `MaxSellQuantityRequired`                                 | MAX_SELL_QUANTITY_REQUIRED                                |
| `MaxSellQuantityProhibited`                               | MAX_SELL_QUANTITY_PROHIBITED                              |
| `StopPriceExceedsMarketPrice`                             | STOP_PRICE_EXCEEDS_MARKET_PRICE                           |
| `TradesDisabledForAssetType`                              | TRADES_DISABLED_FOR_ASSET_TYPE                            |
| `CommissionNotAllowedForNonBrokerDealer`                  | COMMISSION_NOT_ALLOWED_FOR_NON_BROKER_DEALER              |
| `AssetNotSetUpToTrade`                                    | ASSET_NOT_SET_UP_TO_TRADE                                 |
| `InvalidOrderQuantity`                                    | INVALID_ORDER_QUANTITY                                    |
| `ClientReceivedTimeRequired`                              | CLIENT_RECEIVED_TIME_REQUIRED                             |
| `ClientNotPermittedToUseTradingSession`                   | CLIENT_NOT_PERMITTED_TO_USE_TRADING_SESSION               |
| -                                                         | `Unrecognized<string>`                                    |