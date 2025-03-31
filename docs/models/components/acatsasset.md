# AcatsAsset

The asset being transferred If cash, the asset_id is the currency code (e.g. USD) and the position is the amount

## Example Usage

```typescript
import { AcatsAsset } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcatsAsset = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `assetCategory`                                                                | [components.AssetCategory](../../models/components/assetcategory.md)           | :heavy_minus_sign:                                                             | The NSCC asset category                                                        | EQUITIES                                                                       |
| `assetId`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | The asset identifier                                                           | 58160                                                                          |
| `identifier`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | The asset identifier                                                           | US37733W2044                                                                   |
| `position`                                                                     | [components.AcatsAssetPosition](../../models/components/acatsassetposition.md) | :heavy_minus_sign:                                                             | The position or amount of the asset                                            |                                                                                |
| `type`                                                                         | [components.AcatsAssetType](../../models/components/acatsassettype.md)         | :heavy_minus_sign:                                                             | The asset identifier type                                                      | CUSIP                                                                          |