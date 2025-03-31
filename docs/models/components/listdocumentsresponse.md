# ListDocumentsResponse

List of documents that match a set of search parameters.

## Example Usage

```typescript
import { ListDocumentsResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListDocumentsResponse = {};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `document`                                                                                                            | [components.Document](../../models/components/document.md)[]                                                          | :heavy_minus_sign:                                                                                                    | List of documents matching the request's search parameters                                                            |
| `nextPageToken`                                                                                                       | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Only returned if there are more results than currently listed on the page; Use as page_token with subsequent requests |