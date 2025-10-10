# AssetTradingConfigAssetType

Type of the asset

## Example Usage

```typescript
import { AssetTradingConfigAssetType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AssetTradingConfigAssetType = AssetTradingConfigAssetType.Equity;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AssetTypeUnspecified` | ASSET_TYPE_UNSPECIFIED |
| `Equity`               | EQUITY                 |
| `MutualFund`           | MUTUAL_FUND            |
| `Option`               | OPTION                 |
| `Index`                | INDEX                  |
| -                      | `Unrecognized<string>` |