# WatchlistServiceGetWatchlistItemResponse

## Example Usage

```typescript
import { WatchlistServiceGetWatchlistItemResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: WatchlistServiceGetWatchlistItemResponse = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `watchlistItem`                                                                                              | [components.WatchlistItem](../../models/components/watchlistitem.md)                                         | :heavy_minus_sign:                                                                                           | OK                                                                                                           |
| `status`                                                                                                     | [components.Status](../../models/components/status.md)                                                       | :heavy_minus_sign:                                                                                           | INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details. |