# BasketCreate

The message describing a basket

## Example Usage

```typescript
import { BasketCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BasketCreate = {
  clientBasketId: "39347a0d-860b-48e8-a04d-511133f057e3",
  correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `clientBasketId`                                                        | *string*                                                                | :heavy_check_mark:                                                      | User-supplied unique basket ID. Cannot be more than 40 characters long. | 39347a0d-860b-48e8-a04d-511133f057e3                                    |
| `correspondentId`                                                       | *string*                                                                | :heavy_check_mark:                                                      | The unique id for the correspondent for the basket                      | 01HPMZZM6RKMVZA1JQ63RQKJRP                                              |