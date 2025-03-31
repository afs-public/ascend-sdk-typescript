# ListActivitiesResponse

A response to the list activity method

## Example Usage

```typescript
import { ListActivitiesResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListActivitiesResponse = {};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `activities`                                                                                                        | [components.Activity](../../models/components/activity.md)[]                                                        | :heavy_minus_sign:                                                                                                  | an array of activities Returns empty array if no results are found                                                  |                                                                                                                     |
| `nextPageToken`                                                                                                     | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | The next page token returned by this call. Can be provided in another request to retrieve the subsequent page       | v-BAwEBCVBhZ2VUb2tlbgH_ggABAgEPUmVxdWVzdENoZWNrc3VtAQYAAQJJZAEMAAAAI_-CAfwVsHF9ARgyMDI0LTA2LTA0OjFGQTA1MDExOjUwMDEA |