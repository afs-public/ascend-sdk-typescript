# InvestorCommunicationServiceListDocumentsResponse

## Example Usage

```typescript
import { InvestorCommunicationServiceListDocumentsResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: InvestorCommunicationServiceListDocumentsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `httpMeta`                                                                           | [components.HTTPMetadata](../../models/components/httpmetadata.md)                   | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `listDocumentsResponse`                                                              | [components.ListDocumentsResponse](../../models/components/listdocumentsresponse.md) | :heavy_minus_sign:                                                                   | OK                                                                                   |
| `status`                                                                             | [components.Status](../../models/components/status.md)                               | :heavy_minus_sign:                                                                   | INVALID_ARGUMENT: The request was not well formed.                                   |