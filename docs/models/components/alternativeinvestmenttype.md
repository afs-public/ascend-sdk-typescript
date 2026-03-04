# AlternativeInvestmentType

The type of alternative investment asset.

## Example Usage

```typescript
import { AlternativeInvestmentType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AlternativeInvestmentType =
  AlternativeInvestmentType.PrivateEquityFund;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                     | Value                                    |
| ---------------------------------------- | ---------------------------------------- |
| `TypeUnspecified`                        | TYPE_UNSPECIFIED                         |
| `HedgeFund`                              | HEDGE_FUND                               |
| `FundOfFunds`                            | FUND_OF_FUNDS                            |
| `PrivateEquityFund`                      | PRIVATE_EQUITY_FUND                      |
| `ManagedDebtFund`                        | MANAGED_DEBT_FUND                        |
| `PrivateDebtFund`                        | PRIVATE_DEBT_FUND                        |
| `ManagedCurrencyFund`                    | MANAGED_CURRENCY_FUND                    |
| `CommodityPoolFund`                      | COMMODITY_POOL_FUND                      |
| `Reit`                                   | REIT                                     |
| `ManagedFutureFund`                      | MANAGED_FUTURE_FUND                      |
| `OtherType`                              | OTHER_TYPE                               |
| `BusinessDevelopmentCorporation`         | BUSINESS_DEVELOPMENT_CORPORATION         |
| `RegisteredHedgeFund`                    | REGISTERED_HEDGE_FUND                    |
| `OilAndGasPublic`                        | OIL_AND_GAS_PUBLIC                       |
| `OilAndGasPrivate`                       | OIL_AND_GAS_PRIVATE                      |
| `EquipmentLeasingPublic`                 | EQUIPMENT_LEASING_PUBLIC                 |
| `EquipmentLeasingPrivate`                | EQUIPMENT_LEASING_PRIVATE                |
| `FuturesPublic`                          | FUTURES_PUBLIC                           |
| `FuturesPrivate`                         | FUTURES_PRIVATE                          |
| `NotesPublic`                            | NOTES_PUBLIC                             |
| `NotesPrivate`                           | NOTES_PRIVATE                            |
| `RealEstatePublic`                       | REAL_ESTATE_PUBLIC                       |
| `RealEstatePrivate`                      | REAL_ESTATE_PRIVATE                      |
| `ClosedEndManagementInvestmentCompany`   | CLOSED_END_MANAGEMENT_INVESTMENT_COMPANY |
| -                                        | `Unrecognized<string>`                   |