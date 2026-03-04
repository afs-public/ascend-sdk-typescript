# MarginsRealTimeGetAssetBuyingPowerResponse

## Example Usage

```typescript
import { MarginsRealTimeGetAssetBuyingPowerResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: MarginsRealTimeGetAssetBuyingPowerResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `assetBuyingPower`                                                                           | [components.AssetBuyingPower](../../models/components/assetbuyingpower.md)                   | :heavy_minus_sign:                                                                           | OK                                                                                           |
| `status`                                                                                     | [components.Status](../../models/components/status.md)                                       | :heavy_minus_sign:                                                                           | INVALID_ARGUMENT: The request was not well formed. Check the error message for more details. |