# AssetType1

The type or category of the asset

## Example Usage

```typescript
import { AssetType1 } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AssetType1 = AssetType1.Equity;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `TypeUnspecified`      | TYPE_UNSPECIFIED       |
| `Equity`               | EQUITY                 |
| `Option`               | OPTION                 |
| `Currency`             | CURRENCY               |
| `Digital`              | DIGITAL                |
| `FdicSynthetic`        | FDIC_SYNTHETIC         |
| `FixedIncome`          | FIXED_INCOME           |
| `MutualFund`           | MUTUAL_FUND            |
| -                      | `Unrecognized<string>` |