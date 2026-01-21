# FixedIncomeType

Type of fixed income security

## Example Usage

```typescript
import { FixedIncomeType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FixedIncomeType = FixedIncomeType.Treasury;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                          | Value                         |
| ----------------------------- | ----------------------------- |
| `FixedIncomeTypeUnspecified`  | FIXED_INCOME_TYPE_UNSPECIFIED |
| `Municipal`                   | MUNICIPAL                     |
| `Corporate`                   | CORPORATE                     |
| `Cd`                          | CD                            |
| `Agency`                      | AGENCY                        |
| `Treasury`                    | TREASURY                      |
| `Government`                  | GOVERNMENT                    |
| `ForeignGovernment`           | FOREIGN_GOVERNMENT            |
| `EuroBond`                    | EURO_BOND                     |
| -                             | `Unrecognized<string>`        |