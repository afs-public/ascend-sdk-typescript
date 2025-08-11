# AddOrdersRequestCreate

The message to add a list of basket orders to a basket

## Example Usage

```typescript
import { AddOrdersRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AddOrdersRequestCreate = {
  basketOrders: [],
  name:
    "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `basketOrders`                                                                                | [components.BasketOrderCreate](../../models/components/basketordercreate.md)[]                | :heavy_check_mark:                                                                            | The orders to add to the basket. A maximum of 1000 orders can be added to a basket at a time. |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Format: correspondents/{correspondent}/baskets/{basket}                                       | correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521         |