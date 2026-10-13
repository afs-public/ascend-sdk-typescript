# AcatsHoldingAssetType

Asset type, aligned with supported ACATS asset classes.

## Example Usage

```typescript
import { AcatsHoldingAssetType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcatsHoldingAssetType = AcatsHoldingAssetType.Equity;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AssetTypeUnspecified` | ASSET_TYPE_UNSPECIFIED |
| `Equity`               | EQUITY                 |
| `Cash`                 | CASH                   |
| `MutualFund`           | MUTUAL_FUND            |
| `FixedIncome`          | FIXED_INCOME           |
| `Option`               | OPTION                 |
| -                      | `Unrecognized<string>` |