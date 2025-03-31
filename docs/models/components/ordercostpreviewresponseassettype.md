# OrderCostPreviewResponseAssetType

The type of asset referenced by the security identifier

## Example Usage

```typescript
import { OrderCostPreviewResponseAssetType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderCostPreviewResponseAssetType =
  OrderCostPreviewResponseAssetType.FixedIncome;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AssetTypeUnspecified` | ASSET_TYPE_UNSPECIFIED |
| `Equity`               | EQUITY                 |
| `FixedIncome`          | FIXED_INCOME           |
| `MutualFund`           | MUTUAL_FUND            |
| -                      | `Unrecognized<string>` |