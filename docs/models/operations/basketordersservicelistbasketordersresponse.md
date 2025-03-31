# BasketOrdersServiceListBasketOrdersResponse

## Example Usage

```typescript
import { BasketOrdersServiceListBasketOrdersResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BasketOrdersServiceListBasketOrdersResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `listBasketOrdersResponse`                                                                       | [components.ListBasketOrdersResponse](../../models/components/listbasketordersresponse.md)       | :heavy_minus_sign:                                                                               | OK                                                                                               |
| `status`                                                                                         | [components.Status](../../models/components/status.md)                                           | :heavy_minus_sign:                                                                               | INVALID_ARGUMENT: The correspondent_id or the basket_id could not be determined for the request. |