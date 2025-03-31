# ReaderListEventMessagesResponse

## Example Usage

```typescript
import { ReaderListEventMessagesResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: ReaderListEventMessagesResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                           | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `listEventMessagesResponse`                                                                  | [components.ListEventMessagesResponse](../../models/components/listeventmessagesresponse.md) | :heavy_minus_sign:                                                                           | OK                                                                                           |
| `status`                                                                                     | [components.Status](../../models/components/status.md)                                       | :heavy_minus_sign:                                                                           | INVALID_ARGUMENT: The request was not well formed.                                           |