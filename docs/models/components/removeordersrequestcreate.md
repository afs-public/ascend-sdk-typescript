# RemoveOrdersRequestCreate

The message to remove a list of basket orders by client order ID.

## Example Usage

```typescript
import { RemoveOrdersRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RemoveOrdersRequestCreate = {
  clientOrderIds: [
    "77e4c4b9-38e7-469f-9a8d-cd8baf7c1952",
    "4cff908e-aaed-401d-8ec9-929e3eb18cbc",
  ],
  name:
    "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          | Example                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `clientOrderIds`                                                                                                     | *string*[]                                                                                                           | :heavy_check_mark:                                                                                                   | The client order IDs of the basket orders to remove. A maximum of 500 orders can be removed from a basket at a time. | [<br/>"77e4c4b9-38e7-469f-9a8d-cd8baf7c1952",<br/>"4cff908e-aaed-401d-8ec9-929e3eb18cbc"<br/>]                       |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Format: correspondents/{correspondent}/baskets/{basket}                                                              | correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521                                |