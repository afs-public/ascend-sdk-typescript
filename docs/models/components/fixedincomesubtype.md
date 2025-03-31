# FixedIncomeSubtype

The type of treasury

## Example Usage

```typescript
import { FixedIncomeSubtype } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: FixedIncomeSubtype = FixedIncomeSubtype.Bond;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                             | Value                            |
| -------------------------------- | -------------------------------- |
| `FixedIncomeSubtypeUnspecified`  | FIXED_INCOME_SUBTYPE_UNSPECIFIED |
| `Bond`                           | BOND                             |
| `Strips`                         | STRIPS                           |
| `Bill`                           | BILL                             |
| `Note`                           | NOTE                             |
| `Tips`                           | TIPS                             |
| -                                | `Unrecognized<string>`           |