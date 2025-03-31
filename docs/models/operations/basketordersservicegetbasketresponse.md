# BasketOrdersServiceGetBasketResponse

## Example Usage

```typescript
import { BasketOrdersServiceGetBasketResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BasketOrdersServiceGetBasketResponse = {
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
| `basket`                                                                                         | [components.Basket](../../models/components/basket.md)                                           | :heavy_minus_sign:                                                                               | OK                                                                                               |
| `status`                                                                                         | [components.Status](../../models/components/status.md)                                           | :heavy_minus_sign:                                                                               | INVALID_ARGUMENT: The correspondent_id or the basket_id could not be determined for the request. |