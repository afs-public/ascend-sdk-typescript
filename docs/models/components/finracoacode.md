# FinraCoaCode

The FINRA COA code associated with the account

## Example Usage

```typescript
import { FinraCoaCode } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FinraCoaCode = FinraCoaCode.Cat08Customer;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                                   | Value                                                  |
| ------------------------------------------------------ | ------------------------------------------------------ |
| `FinraCoaCodeUnspecified`                              | FINRA_COA_CODE_UNSPECIFIED                             |
| `Cat01CustomerDvpRvp`                                  | CAT_01_CUSTOMER_DVP_RVP                                |
| `Cat02CustomerManagedAccounts`                         | CAT_02_CUSTOMER_MANAGED_ACCOUNTS                       |
| `Cat03CustomerIraAccounts`                             | CAT_03_CUSTOMER_IRA_ACCOUNTS                           |
| `Cat04CustomerEmployee`                                | CAT_04_CUSTOMER_EMPLOYEE                               |
| `Cat05CustomerPrimeBroker`                             | CAT_05_CUSTOMER_PRIME_BROKER                           |
| `Cat06CustomerAffiliateNonBd`                          | CAT_06_CUSTOMER_AFFILIATE_NON_BD                       |
| `Cat07CustomerOmnibus`                                 | CAT_07_CUSTOMER_OMNIBUS                                |
| `Cat08Customer`                                        | CAT_08_CUSTOMER                                        |
| `Cat09NonCustomerOfficerDirector`                      | CAT_09_NON_CUSTOMER_OFFICER_DIRECTOR                   |
| `Cat10NonCustomerOfficerDirectorOrFamilyMembers`       | CAT_10_NON_CUSTOMER_OFFICER_DIRECTOR_OR_FAMILY_MEMBERS |
| `Cat11NonCustomerAffiliateBd`                          | CAT_11_NON_CUSTOMER_AFFILIATE_BD                       |
| `Cat12NonCustomerOmnibus`                              | CAT_12_NON_CUSTOMER_OMNIBUS                            |
| `Cat13NonCustomer`                                     | CAT_13_NON_CUSTOMER                                    |
| `Cat14Paib`                                            | CAT_14_PAIB                                            |
| `Cat15FirmInventory`                                   | CAT_15_FIRM_INVENTORY                                  |
| `Cat16CnsFails`                                        | CAT_16_CNS_FAILS                                       |
| `Cat17OtherClearingCorpFails`                          | CAT_17_OTHER_CLEARING_CORP_FAILS                       |
| `Cat18ExecutingPrimeBroker`                            | CAT_18_EXECUTING_PRIME_BROKER                          |
| `Cat19BrokerFailsToReceive`                            | CAT_19_BROKER_FAILS_TO_RECEIVE                         |
| `Cat20BrokerFailsToDeliver`                            | CAT_20_BROKER_FAILS_TO_DELIVER                         |
| `Cat21BrokerFails`                                     | CAT_21_BROKER_FAILS                                    |
| `Cat22FailToDeliverGreaterThan30Days`                  | CAT_22_FAIL_TO_DELIVER_GREATER_THAN_30_DAYS            |
| `Cat23SecuritiesBorrowed`                              | CAT_23_SECURITIES_BORROWED                             |
| `Cat24SecuritiesBorrowedNonCash`                       | CAT_24_SECURITIES_BORROWED_NON_CASH                    |
| `Cat25SecuritiesBorrowedConduit`                       | CAT_25_SECURITIES_BORROWED_CONDUIT                     |
| `Cat26SecuritiesLoaned`                                | CAT_26_SECURITIES_LOANED                               |
| `Cat27SecuritiesLoanedNonCash`                         | CAT_27_SECURITIES_LOANED_NON_CASH                      |
| `Cat28SecuritiesLoanedConduit`                         | CAT_28_SECURITIES_LOANED_CONDUIT                       |
| `Cat29SecuritiesLoanedCns`                             | CAT_29_SECURITIES_LOANED_CNS                           |
| `Cat30ReverseRepo`                                     | CAT_30_REVERSE_REPO                                    |
| `Cat31ReverseRepoTriParty`                             | CAT_31_REVERSE_REPO_TRI_PARTY                          |
| `Cat32Repo`                                            | CAT_32_REPO                                            |
| `Cat33RepoHoldInCustody`                               | CAT_33_REPO_HOLD_IN_CUSTODY                            |
| `Cat34RepoTriParty`                                    | CAT_34_REPO_TRI_PARTY                                  |
| `Cat35BankLoanFirm`                                    | CAT_35_BANK_LOAN_FIRM                                  |
| `Cat36BankLoanCustomer`                                | CAT_36_BANK_LOAN_CUSTOMER                              |
| `Cat37BankLoanNonCustomer`                             | CAT_37_BANK_LOAN_NON_CUSTOMER                          |
| `Cat38BankLoanPaib`                                    | CAT_38_BANK_LOAN_PAIB                                  |
| `Cat39Suspense`                                        | CAT_39_SUSPENSE                                        |
| `Cat40Reorganizations`                                 | CAT_40_REORGANIZATIONS                                 |
| `Cat41StockDividends`                                  | CAT_41_STOCK_DIVIDENDS                                 |
| `Cat42AbandonedProperty`                               | CAT_42_ABANDONED_PROPERTY                              |
| `Cat43PhysicalBox`                                     | CAT_43_PHYSICAL_BOX                                    |
| `Cat44LegalBox`                                        | CAT_44_LEGAL_BOX                                       |
| `Cat45Safekeeping`                                     | CAT_45_SAFEKEEPING                                     |
| `Cat4615C33Deposit`                                    | CAT_46_15C3_3_DEPOSIT                                  |
| `Cat47DomesticDepositoryControl`                       | CAT_47_DOMESTIC_DEPOSITORY_CONTROL                     |
| `Cat48ForeignDepositoryControl`                        | CAT_48_FOREIGN_DEPOSITORY_CONTROL                      |
| `Cat49DomesticDepositoryNonControl`                    | CAT_49_DOMESTIC_DEPOSITORY_NON_CONTROL                 |
| `Cat50ForeignDepositoryNonControl`                     | CAT_50_FOREIGN_DEPOSITORY_NON_CONTROL                  |
| `Cat51TransferControl`                                 | CAT_51_TRANSFER_CONTROL                                |
| `Cat52TransferNonControl`                              | CAT_52_TRANSFER_NON_CONTROL                            |
| `Cat53TransferLegal`                                   | CAT_53_TRANSFER_LEGAL                                  |
| `Cat54InTransitControl`                                | CAT_54_IN_TRANSIT_CONTROL                              |
| `Cat55InTransitNonControl`                             | CAT_55_IN_TRANSIT_NON_CONTROL                          |
| `Cat56ClearingDomestic`                                | CAT_56_CLEARING_DOMESTIC                               |
| `Cat57ClearingForeign`                                 | CAT_57_CLEARING_FOREIGN                                |
| `Cat58TestAccount`                                     | CAT_58_TEST_ACCOUNT                                    |
| `Cat59OutOfBalance`                                    | CAT_59_OUT_OF_BALANCE                                  |
| `Cat60Conversion`                                      | CAT_60_CONVERSION                                      |
| `Cat61DepositsOccMargin`                               | CAT_61_DEPOSITS_OCC_MARGIN                             |
| `Cat62DepositsOther`                                   | CAT_62_DEPOSITS_OTHER                                  |
| `Cat63Other`                                           | CAT_63_OTHER                                           |
| -                                                      | `Unrecognized<string>`                                 |