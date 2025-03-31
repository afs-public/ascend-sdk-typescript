# AssetEquityType

the code indicating the type of associated security.

## Example Usage

```typescript
import { AssetEquityType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AssetEquityType = AssetEquityType.CommonStock;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `EquityTypeUnspecified`       | EQUITY_TYPE_UNSPECIFIED       |
| `CommonStock`                 | COMMON_STOCK                  |
| `PreferredStock`              | PREFERRED_STOCK               |
| `PreferredAdr`                | PREFERRED_ADR                 |
| `SpecialStock`                | SPECIAL_STOCK                 |
| `Index`                       | INDEX                         |
| `Warrant`                     | WARRANT                       |
| `Adr`                         | ADR                           |
| `Rights`                      | RIGHTS                        |
| `SharesOfBeneficialInterest`  | SHARES_OF_BENEFICIAL_INTEREST |
| `Certificates`                | CERTIFICATES                  |
| `Units`                       | UNITS                         |
| `DebtIssue`                   | DEBT_ISSUE                    |
| `EquityTypeOption`            | EQUITY_TYPE_OPTION            |
| `Etf`                         | ETF                           |
| -                             | `Unrecognized<string>`        |