# FixedIncomeStatus

The status of the fixed income

## Example Usage

```typescript
import { FixedIncomeStatus } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FixedIncomeStatus = FixedIncomeStatus.Outstanding;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                            | Value                           |
| ------------------------------- | ------------------------------- |
| `FixedIncomeStatusUnspecified`  | FIXED_INCOME_STATUS_UNSPECIFIED |
| `Outstanding`                   | OUTSTANDING                     |
| `Matured`                       | MATURED                         |
| `Called`                        | CALLED                          |
| `Unknown`                       | UNKNOWN                         |
| `Defaulted`                     | DEFAULTED                       |
| `Converted`                     | CONVERTED                       |
| `Tendered`                      | TENDERED                        |
| `PreIssuance`                   | PRE_ISSUANCE                    |
| `Liquidated`                    | LIQUIDATED                      |
| `Repurchased`                   | REPURCHASED                     |
| `Repaid`                        | REPAID                          |
| `Restructured`                  | RESTRUCTURED                    |
| `Put`                           | PUT                             |
| `Funged`                        | FUNGED                          |
| -                               | `Unrecognized<string>`          |