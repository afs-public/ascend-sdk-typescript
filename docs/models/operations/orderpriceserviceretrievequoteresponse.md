# OrderPriceServiceRetrieveQuoteResponse

## Example Usage

```typescript
import { OrderPriceServiceRetrieveQuoteResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OrderPriceServiceRetrieveQuoteResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                                                             | Type                                                                                                                                                              | Required                                                                                                                                                          | Description                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                                        | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                                | :heavy_check_mark:                                                                                                                                                | N/A                                                                                                                                                               |
| `retrieveQuoteResponse`                                                                                                                                           | [components.RetrieveQuoteResponse](../../models/components/retrievequoteresponse.md)                                                                              | :heavy_minus_sign:                                                                                                                                                | OK                                                                                                                                                                |
| `status`                                                                                                                                                          | [components.Status](../../models/components/status.md)                                                                                                            | :heavy_minus_sign:                                                                                                                                                | INVALID_ARGUMENT: There was an issue with one or more fields in the request.  The message field will contain details about which field failed validation and why. |