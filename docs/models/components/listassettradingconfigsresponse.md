# ListAssetTradingConfigsResponse

ListAssetTradingConfigsResponse is the response message for ListAssetTradingConfig method.

## Example Usage

```typescript
import { ListAssetTradingConfigsResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListAssetTradingConfigsResponse = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `assetTradingConfigs`                                                                                                      | [components.AssetTradingConfig](../../models/components/assettradingconfig.md)[]                                           | :heavy_minus_sign:                                                                                                         | The asset trading configs returned in the response.                                                                        |                                                                                                                            |
| `nextPageToken`                                                                                                            | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The next_page_token value to include in a subsequent ListAssetTradingConfigs request to retrieve the next page of results. | Mv-BAwEBCVBhZ2VUb2tlbgH_ggABAgEPUmVxdWVzdENoZWNrc3VtAQYAAQJJZAEMAAAAD_-CAfzrRtzkAQQ1MDA3AA==                               |