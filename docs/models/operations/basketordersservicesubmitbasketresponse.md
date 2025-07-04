# BasketOrdersServiceSubmitBasketResponse

## Example Usage

```typescript
import { BasketOrdersServiceSubmitBasketResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BasketOrdersServiceSubmitBasketResponse = {
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
| `basket`                                                                                                                                                          | [components.Basket](../../models/components/basket.md)                                                                                                            | :heavy_minus_sign:                                                                                                                                                | OK                                                                                                                                                                |
| `status`                                                                                                                                                          | [components.Status](../../models/components/status.md)                                                                                                            | :heavy_minus_sign:                                                                                                                                                | INVALID_ARGUMENT: There was an issue with one or more fields in the request.  The message field will contain details about which field failed validation and why. |