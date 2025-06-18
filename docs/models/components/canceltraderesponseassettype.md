# CancelTradeResponseAssetType

Type of the asset being traded. Required for SYMBOL and CUSIP.

## Example Usage

```typescript
import { CancelTradeResponseAssetType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelTradeResponseAssetType = CancelTradeResponseAssetType.Equity;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AssetTypeUnspecified` | ASSET_TYPE_UNSPECIFIED |
| `Equity`               | EQUITY                 |
| `FixedIncome`          | FIXED_INCOME           |
| -                      | `Unrecognized<string>` |