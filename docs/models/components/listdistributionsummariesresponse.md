# ListDistributionSummariesResponse

Response object for aggregated distribution retirement summaries

## Example Usage

```typescript
import { ListDistributionSummariesResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListDistributionSummariesResponse = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `distributionSummaries`                                                                                                      | [components.DistributionSummary](../../models/components/distributionsummary.md)[]                                           | :heavy_minus_sign:                                                                                                           | List of distribution amount(s) and rollover amount(s), with their corresponding tax year(s)                                  |                                                                                                                              |
| `nextPageToken`                                                                                                              | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | Can be sent as `page_token` in the request to retrieve the next page If this field is omitted, there are no subsequent pages | AbTYnwAkMjIyZDNjYTAtZmVjZS00N2Q5LTgyMDctNzI3MDdkMjFiZ3hh                                                                     |