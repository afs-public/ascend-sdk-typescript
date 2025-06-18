# PartyExemptCustomerReason

**Field Dependencies:**

Exempt entities must set `exempt_verifying_beneficial_owners` to `true` and provide an `exempt_customer_reason` on the owner record.

Required if `exempt_verifying_beneficial_owners` is `true`.

Otherwise, must be empty.

## Example Usage

```typescript
import { PartyExemptCustomerReason } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PartyExemptCustomerReason =
  PartyExemptCustomerReason.NonBankListedEntity;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                                    | Value                                                   |
| ------------------------------------------------------- | ------------------------------------------------------- |
| `ExemptReasonUnspecified`                               | EXEMPT_REASON_UNSPECIFIED                               |
| `RegulatedFinancialInstitution`                         | REGULATED_FINANCIAL_INSTITUTION                         |
| `DepartmentOrAgencyOfFederalStateOrSubdivision`         | DEPARTMENT_OR_AGENCY_OF_FEDERAL_STATE_OR_SUBDIVISION    |
| `NonBankListedEntity`                                   | NON_BANK_LISTED_ENTITY                                  |
| `Section12SecuritiesExchangeAct1934Or15D`               | SECTION_12_SECURITIES_EXCHANGE_ACT_1934_OR_15D          |
| `Section3InvestmentCompanyAct1940`                      | SECTION_3_INVESTMENT_COMPANY_ACT_1940                   |
| `Section202AInvestmentAdvisorsAct1940`                  | SECTION_202A_INVESTMENT_ADVISORS_ACT_1940               |
| `Section3SecuritiesExchangeAct1934Section6Or17A`        | SECTION_3_SECURITIES_EXCHANGE_ACT_1934_SECTION_6_OR_17A |
| `AnyOtherSecuritiesExchangeAct1934`                     | ANY_OTHER_SECURITIES_EXCHANGE_ACT_1934                  |
| `CommodityFuturesTradingCommissionRegistered`           | COMMODITY_FUTURES_TRADING_COMMISSION_REGISTERED         |
| `PublicAccountingFirmSection102SarbanesOxley`           | PUBLIC_ACCOUNTING_FIRM_SECTION_102_SARBANES_OXLEY       |
| `StateRegulatedInsuranceCompany`                        | STATE_REGULATED_INSURANCE_COMPANY                       |
| -                                                       | `Unrecognized<string>`                                  |