# BasketOrderAssetType

The type of the asset in this order

## Example Usage

```typescript
import { BasketOrderAssetType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BasketOrderAssetType = BasketOrderAssetType.Equity;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AssetTypeUnspecified` | ASSET_TYPE_UNSPECIFIED |
| `Equity`               | EQUITY                 |
| `MutualFund`           | MUTUAL_FUND            |
| -                      | `Unrecognized<string>` |