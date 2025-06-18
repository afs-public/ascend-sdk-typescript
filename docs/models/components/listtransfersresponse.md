# ListTransfersResponse

Response to list existing transfers.

## Example Usage

```typescript
import { ListTransfersResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListTransfersResponse = {};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    | Example                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `nextPageToken`                                                                                                                | *string*                                                                                                                       | :heavy_minus_sign:                                                                                                             | A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. | CgwI5uHttgYQyJXO2wESJDAxOTFjOTMxLTA3YjMtYzU0ZC0yMDNmLWU1M2U0OTBkY2FhZRoicmVjZWl2ZXIuYWNjb3VudF9pZCBpbiBbJzEwMDAwQUEnXQ         |
| `transfers`                                                                                                                    | [components.AcatsTransfer](../../models/components/acatstransfer.md)[]                                                         | :heavy_minus_sign:                                                                                                             | transfers resulting from filter query                                                                                          |                                                                                                                                |