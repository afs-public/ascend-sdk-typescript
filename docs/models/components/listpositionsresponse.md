# ListPositionsResponse

positions with 0 values will be returned if there are offsetting position deltas or a position was reduced to 0

## Example Usage

```typescript
import { ListPositionsResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListPositionsResponse = {};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                                                                                      | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | The next page token returned by this call. Can be provided in another request to retrieve the subsequent page                                        | Mv-BAwEBCVBhZ2VUb2tlbgH_ggABAgEPUmVxdWVzdENoZWNrc3VtAQYAAQJJZAEMAAAAOv-CAfwFIZG3AS8xZWYyMmM4OC1lODkwLTBiMzgtOTI4Zi1kM2JhYmJmOWMyMWU6MjAyNC0wNi0wMgA= |
| `positions`                                                                                                                                          | [components.Position](../../models/components/position.md)[]                                                                                         | :heavy_minus_sign:                                                                                                                                   | The positions returned                                                                                                                               |                                                                                                                                                      |