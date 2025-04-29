# RetrieveQuoteResponseAssetType

The type of asset referenced by the security identifier

## Example Usage

```typescript
import { RetrieveQuoteResponseAssetType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetrieveQuoteResponseAssetType =
  RetrieveQuoteResponseAssetType.FixedIncome;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AssetTypeUnspecified` | ASSET_TYPE_UNSPECIFIED |
| `Equity`               | EQUITY                 |
| `FixedIncome`          | FIXED_INCOME           |
| `MutualFund`           | MUTUAL_FUND            |
| `Option`               | OPTION                 |
| -                      | `Unrecognized<string>` |