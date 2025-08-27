# FeeType

The type of fee being assessed

## Example Usage

```typescript
import { FeeType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FeeType = FeeType.Liquidity;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                   | Value                                  |
| -------------------------------------- | -------------------------------------- |
| `FeeTypeUnspecified`                   | FEE_TYPE_UNSPECIFIED                   |
| `ClientClearing`                       | CLIENT_CLEARING                        |
| `Liquidity`                            | LIQUIDITY                              |
| `GeneralPurpose`                       | GENERAL_PURPOSE                        |
| `Commission`                           | COMMISSION                             |
| `Taf`                                  | TAF                                    |
| `Sec`                                  | SEC                                    |
| `AccountClosing`                       | ACCOUNT_CLOSING                        |
| `AccountIra`                           | ACCOUNT_IRA                            |
| `AchReturn`                            | ACH_RETURN                             |
| `Advisory`                             | ADVISORY                               |
| `CheckFee`                             | CHECK_FEE                              |
| `Exchange`                             | EXCHANGE                               |
| `Management`                           | MANAGEMENT                             |
| `Overnight`                            | OVERNIGHT                              |
| `Platform`                             | PLATFORM                               |
| `Statement`                            | STATEMENT                              |
| `StopPayment`                          | STOP_PAYMENT                           |
| `WireFee`                              | WIRE_FEE                               |
| `Inactivity`                           | INACTIVITY                             |
| `AmaService`                           | AMA_SERVICE                            |
| `NoticeOfChange`                       | NOTICE_OF_CHANGE                       |
| `AccountTransfer`                      | ACCOUNT_TRANSFER                       |
| `AgencyProcessing`                     | AGENCY_PROCESSING                      |
| `RtpFee`                               | RTP_FEE                                |
| `DomesticWireDepositFee`               | DOMESTIC_WIRE_DEPOSIT_FEE              |
| `DomesticWireWithdrawalFee`            | DOMESTIC_WIRE_WITHDRAWAL_FEE           |
| `InternationalWireDepositFee`          | INTERNATIONAL_WIRE_DEPOSIT_FEE         |
| `InternationalWireWithdrawalFee`       | INTERNATIONAL_WIRE_WITHDRAWAL_FEE      |
| `BrokerFee`                            | BROKER_FEE                             |
| `OccFee`                               | OCC_FEE                                |
| `ContractFee`                          | CONTRACT_FEE                           |
| `OptionsRegulatory`                    | OPTIONS_REGULATORY                     |
| `FinancialTransactionTax`              | FINANCIAL_TRANSACTION_TAX              |
| `RegularCheckDelivery`                 | REGULAR_CHECK_DELIVERY                 |
| `OvernightCheckDelivery`               | OVERNIGHT_CHECK_DELIVERY               |
| `SaturdayCheckDelivery`                | SATURDAY_CHECK_DELIVERY                |
| `OvernightCheckToBroker`               | OVERNIGHT_CHECK_TO_BROKER              |
| `InternationalCheckOvernightDelivery`  | INTERNATIONAL_CHECK_OVERNIGHT_DELIVERY |
| `InternationalCheckRegularDelivery`    | INTERNATIONAL_CHECK_REGULAR_DELIVERY   |
| `PrintCheckAtFirm`                     | PRINT_CHECK_AT_FIRM                    |
| `VoidedCheck`                          | VOIDED_CHECK                           |
| `StopPaymentAfter180Days`              | STOP_PAYMENT_AFTER_180_DAYS            |
| -                                      | `Unrecognized<string>`                 |