# RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType

The identifier type of the asset being sought. This will be the same value as what was sent on the request.

## Example Usage

```typescript
import { RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType =
  RetrieveFixedIncomeMarksResponseAssetMarkIdentifierType.Cusip;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `AssetId`              | ASSET_ID               |
| `Cusip`                | CUSIP                  |
| `Isin`                 | ISIN                   |
| -                      | `Unrecognized<string>` |