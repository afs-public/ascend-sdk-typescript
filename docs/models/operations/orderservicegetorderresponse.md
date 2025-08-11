# OrderServiceGetOrderResponse

## Example Usage

```typescript
import { OrderServiceGetOrderResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OrderServiceGetOrderResponse = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                | [components.HTTPMetadata](../../models/components/httpmetadata.md)                        | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `order`                                                                                   | [components.Order](../../models/components/order.md)                                      | :heavy_minus_sign:                                                                        | OK                                                                                        |
| `status`                                                                                  | [components.Status](../../models/components/status.md)                                    | :heavy_minus_sign:                                                                        | INVALID_ARGUMENT: The account_id or the order_id could not be determined for the request. |