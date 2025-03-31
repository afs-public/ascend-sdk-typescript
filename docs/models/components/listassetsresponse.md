# ListAssetsResponse

ListAssetsResponse is the response message for ListAssets method.

## Example Usage

```typescript
import { ListAssetsResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListAssetsResponse = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `assets`                                                                                                      | [components.Asset](../../models/components/asset.md)[]                                                        | :heavy_minus_sign:                                                                                            | The assets returned in the response.                                                                          |                                                                                                               |
| `nextPageToken`                                                                                               | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | The next_page_token value to include in a subsequent ListAssets request to retrieve the next page of results. | Mv-BAwEBCVBhZ2VUb2tlbgH_ggABAgEPUmVxdWVzdENoZWNrc3VtAQYAAQJJZAEMAAAAD_-CAfzrRtzkAQQ1MDA3AA==                  |