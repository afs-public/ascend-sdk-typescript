# BasketOrderCreateAssetType

The type of the asset in this order

## Example Usage

```typescript
import { BasketOrderCreateAssetType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BasketOrderCreateAssetType = BasketOrderCreateAssetType.Equity;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AssetTypeUnspecified` | ASSET_TYPE_UNSPECIFIED |
| `Equity`               | EQUITY                 |
| `MutualFund`           | MUTUAL_FUND            |
| -                      | `Unrecognized<string>` |