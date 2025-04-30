# FeeCreateType

The type of fee

## Example Usage

```typescript
import { FeeCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FeeCreateType = FeeCreateType.SecFee;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `FeeTypeUnspecified`      | FEE_TYPE_UNSPECIFIED      |
| `ClientClearing`          | CLIENT_CLEARING           |
| `Liquidity`               | LIQUIDITY                 |
| `TradeActivity`           | TRADE_ACTIVITY            |
| `FinancialTransactionTax` | FINANCIAL_TRANSACTION_TAX |
| `IndexOptionFee`          | INDEX_OPTION_FEE          |
| `SecFee`                  | SEC_FEE                   |
| `OptionsRegulatory`       | OPTIONS_REGULATORY        |
| `GeneralPurposeFee`       | GENERAL_PURPOSE_FEE       |
| `BrokerFee`               | BROKER_FEE                |
| `ContractFee`             | CONTRACT_FEE              |
| `OccFee`                  | OCC_FEE                   |
| -                         | `Unrecognized<string>`    |