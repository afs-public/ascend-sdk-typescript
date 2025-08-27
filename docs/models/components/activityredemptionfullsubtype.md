# ActivityRedemptionFullSubtype

The subtype for the corporate action event

## Example Usage

```typescript
import { ActivityRedemptionFullSubtype } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityRedemptionFullSubtype =
  ActivityRedemptionFullSubtype.AdditionalDividend;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                    | Value                                   |
| --------------------------------------- | --------------------------------------- |
| `CorporateactionsubtypeUnspecified`     | CORPORATEACTIONSUBTYPE_UNSPECIFIED      |
| `AdditionalDividend`                    | ADDITIONAL_DIVIDEND                     |
| `ApproximateRate`                       | APPROXIMATE_RATE                        |
| `DividendArrears`                       | DIVIDEND_ARREARS                        |
| `DividendCancelled`                     | DIVIDEND_CANCELLED                      |
| `DividendPaymentTaxClassifications`     | DIVIDEND_PAYMENT_TAX_CLASSIFICATIONS    |
| `DividendRescinded`                     | DIVIDEND_RESCINDED                      |
| `EstimatedReturnOfCapital`              | ESTIMATED_RETURN_OF_CAPITAL             |
| `EstimatedReturnOfCapitalPlusIncome`    | ESTIMATED_RETURN_OF_CAPITAL_PLUS_INCOME |
| `ExtraDividend`                         | EXTRA_DIVIDEND                          |
| `ExtraDividendPlusIncome`               | EXTRA_DIVIDEND_PLUS_INCOME              |
| `FinalPaymentTransferBooksAreClosed`    | FINAL_PAYMENT_TRANSFER_BOOKS_ARE_CLOSED |
| `GrossRate`                             | GROSS_RATE                              |
| `InitialDividend`                       | INITIAL_DIVIDEND                        |
| `InitialDividendLongPeriod`             | INITIAL_DIVIDEND_LONG_PERIOD            |
| `InitialDividendShortPeriod`            | INITIAL_DIVIDEND_SHORT_PERIOD           |
| `LimitedPartnershipDistribution`        | LIMITED_PARTNERSHIP_DISTRIBUTION        |
| `Liquidation`                           | LIQUIDATION                             |
| `NetRate`                               | NET_RATE                                |
| `Other`                                 | OTHER                                   |
| `ProceedsFromSaleOfRights`              | PROCEEDS_FROM_SALE_OF_RIGHTS            |
| `RegularDividend`                       | REGULAR_DIVIDEND                        |
| `ReturnOfCapital`                       | RETURN_OF_CAPITAL                       |
| `ReturnOfCapitalPlusIncome`             | RETURN_OF_CAPITAL_PLUS_INCOME           |
| `SpecialDividend`                       | SPECIAL_DIVIDEND                        |
| `SpecialDividendPlusIncome`             | SPECIAL_DIVIDEND_PLUS_INCOME            |
| `YearEndDividend`                       | YEAR_END_DIVIDEND                       |
| `YearEndDividendPlusIncome`             | YEAR_END_DIVIDEND_PLUS_INCOME           |
| `Partial`                               | PARTIAL                                 |
| `Full`                                  | FULL                                    |
| `Maturity`                              | MATURITY                                |
| `Termination`                           | TERMINATION                             |
| `RedemptionOfWarrants`                  | REDEMPTION_OF_WARRANTS                  |
| `InterimPayment`                        | INTERIM_PAYMENT                         |
| `FinalPayment`                          | FINAL_PAYMENT                           |
| -                                       | `Unrecognized<string>`                  |