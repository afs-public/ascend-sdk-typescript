# BasketOrdersServiceCreateBasketRequest

## Example Usage

```typescript
import { BasketOrdersServiceCreateBasketRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BasketOrdersServiceCreateBasketRequest = {
  correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
  basketCreate: {
    clientBasketId: "39347a0d-860b-48e8-a04d-511133f057e3",
    correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `correspondentId`                                                  | *string*                                                           | :heavy_check_mark:                                                 | The correspondent id.                                              | 01HPMZZM6RKMVZA1JQ63RQKJRP                                         |
| `basketCreate`                                                     | [components.BasketCreate](../../models/components/basketcreate.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |