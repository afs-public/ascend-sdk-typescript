# CancelTradeAllocationResponseAssetType

Type of the asset being traded.

## Example Usage

```typescript
import { CancelTradeAllocationResponseAssetType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelTradeAllocationResponseAssetType =
  CancelTradeAllocationResponseAssetType.Equity;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AssetTypeUnspecified` | ASSET_TYPE_UNSPECIFIED |
| `Equity`               | EQUITY                 |
| `FixedIncome`          | FIXED_INCOME           |
| -                      | `Unrecognized<string>` |