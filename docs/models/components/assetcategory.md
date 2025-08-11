# AssetCategory

The NSCC asset category

## Example Usage

```typescript
import { AssetCategory } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AssetCategory = AssetCategory.MortgageBackedSecurity;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `AssetCategoryUnspecified`   | ASSET_CATEGORY_UNSPECIFIED   |
| `AlternativeInvestment`      | ALTERNATIVE_INVESTMENT       |
| `Annuity`                    | ANNUITY                      |
| `AuctionRatePreferredUit`    | AUCTION_RATE_PREFERRED_UIT   |
| `CdAndCommercialPaper`       | CD_AND_COMMERCIAL_PAPER      |
| `CorporateBond`              | CORPORATE_BOND               |
| `DeferredSaleChargeUit`      | DEFERRED_SALE_CHARGE_UIT     |
| `Equity`                     | EQUITY                       |
| `ForeignCurrency`            | FOREIGN_CURRENCY             |
| `ForeignDebt`                | FOREIGN_DEBT                 |
| `ForeignEquity`              | FOREIGN_EQUITY               |
| `LifeInsurance`              | LIFE_INSURANCE               |
| `LimitedPartnership`         | LIMITED_PARTNERSHIP          |
| `MortgageBackedSecurity`     | MORTGAGE_BACKED_SECURITY     |
| `MutualFundMoneyMarket`      | MUTUAL_FUND_MONEY_MARKET     |
| `MutualFundNonMoneyMarket`   | MUTUAL_FUND_NON_MONEY_MARKET |
| `MunicipalBond`              | MUNICIPAL_BOND               |
| `Option`                     | OPTION                       |
| `RealEstateInvestmentTrust`  | REAL_ESTATE_INVESTMENT_TRUST |
| `Right`                      | RIGHT                        |
| `UsGovernment`               | US_GOVERNMENT                |
| `UnitInvestmentTrust`        | UNIT_INVESTMENT_TRUST        |
| `Unit`                       | UNIT                         |
| `Warrant`                    | WARRANT                      |
| `ZeroCouponBond`             | ZERO_COUPON_BOND             |
| -                            | `Unrecognized<string>`       |