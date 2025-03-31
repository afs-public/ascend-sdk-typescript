# ListScheduleSummariesResponse

Response to a search transfer schedules request

## Example Usage

```typescript
import { ListScheduleSummariesResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListScheduleSummariesResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `nextPageToken`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | The next page token                                                                        | 4ZHd3wAaMD1IQ0ZKS2BKV0FSRVdLW4VLWkY1R1B3MU4                                                |
| `scheduleSummaries`                                                                        | [components.TransferScheduleSummary](../../models/components/transferschedulesummary.md)[] | :heavy_minus_sign:                                                                         | The list of transfer schedule details                                                      |                                                                                            |