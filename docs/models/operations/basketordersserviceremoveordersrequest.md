# BasketOrdersServiceRemoveOrdersRequest

## Example Usage

```typescript
import { BasketOrdersServiceRemoveOrdersRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BasketOrdersServiceRemoveOrdersRequest = {
  correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
  basketId: "fffd326-72fa-4d2b-bd1f-45384fe5d521",
  removeOrdersRequestCreate: {
    clientOrderIds: [
      "77e4c4b9-38e7-469f-9a8d-cd8baf7c1952",
      "4cff908e-aaed-401d-8ec9-929e3eb18cbc",
    ],
    name:
      "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521",
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `correspondentId`                                                                            | *string*                                                                                     | :heavy_check_mark:                                                                           | The correspondent id.                                                                        | 01HPMZZM6RKMVZA1JQ63RQKJRP                                                                   |
| `basketId`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | The basket id.                                                                               | fffd326-72fa-4d2b-bd1f-45384fe5d521                                                          |
| `removeOrdersRequestCreate`                                                                  | [components.RemoveOrdersRequestCreate](../../models/components/removeordersrequestcreate.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |