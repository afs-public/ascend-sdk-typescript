# ListEntriesResponse

ListEntriesResponse

## Example Usage

```typescript
import { ListEntriesResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListEntriesResponse = {};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `entries`                                                                                                                                            | [components.Entry](../../models/components/entry.md)[]                                                                                               | :heavy_minus_sign:                                                                                                                                   | An array of entries, empty if no results are found                                                                                                   |                                                                                                                                                      |
| `nextPageToken`                                                                                                                                      | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | The next page token returned by this call. Can be provided in another request to retrieve the subsequent page                                        | Mv-BAwEBCVBhZ2VUb2tlbgH_ggABAgEPUmVxdWVzdENoZWNrc3VtAQYAAQJJZAEMAAAAOv-CAfzbNG7ZAS8xZWYyMmM4ZS02MWEwLTBlMmUtYjVkMy1hMzEzZWNjY2ZiNTM6MjAyNC0wNi0wMgA= |