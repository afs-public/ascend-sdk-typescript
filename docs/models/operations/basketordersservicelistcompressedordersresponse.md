# BasketOrdersServiceListCompressedOrdersResponse

## Example Usage

```typescript
import { BasketOrdersServiceListCompressedOrdersResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BasketOrdersServiceListCompressedOrdersResponse = {};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `listCompressedOrdersResponse`                                                                     | [components.ListCompressedOrdersResponse](../../models/components/listcompressedordersresponse.md) | :heavy_minus_sign:                                                                                 | OK                                                                                                 |
| `status`                                                                                           | [components.Status](../../models/components/status.md)                                             | :heavy_minus_sign:                                                                                 | INVALID_ARGUMENT: The correspondent_id or the basket_id could not be determined for the request.   |