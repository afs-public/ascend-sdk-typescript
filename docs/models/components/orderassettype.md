# OrderAssetType

The type of the asset in this order

## Example Usage

```typescript
import { OrderAssetType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderAssetType = OrderAssetType.Equity;
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