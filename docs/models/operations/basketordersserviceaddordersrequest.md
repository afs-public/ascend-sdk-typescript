# BasketOrdersServiceAddOrdersRequest

## Example Usage

```typescript
import {
  BasketOrderCreateAssetType,
  BasketOrderCreateIdentifierType,
  BasketOrderCreateOrderType,
  BasketOrderCreateSide,
  BasketOrderCreateTimeInForce,
} from "@apexfintechsolutions/ascend-sdk/models/components";
import { BasketOrdersServiceAddOrdersRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BasketOrdersServiceAddOrdersRequest = {
  correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
  basketId: "fffd326-72fa-4d2b-bd1f-45384fe5d521",
  addOrdersRequestCreate: {
    basketOrders: [
      {
        accountId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
        assetType: BasketOrderCreateAssetType.Equity,
        clientOrderId: "a6d5258b-6b23-478a-8145-98e79d60427a",
        identifier: "SBUX",
        identifierType: BasketOrderCreateIdentifierType.Symbol,
        orderType: BasketOrderCreateOrderType.Market,
        side: BasketOrderCreateSide.Buy,
        timeInForce: BasketOrderCreateTimeInForce.Day,
      },
    ],
    name:
      "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521",
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `correspondentId`                                                                      | *string*                                                                               | :heavy_check_mark:                                                                     | The correspondent id.                                                                  | 01HPMZZM6RKMVZA1JQ63RQKJRP                                                             |
| `basketId`                                                                             | *string*                                                                               | :heavy_check_mark:                                                                     | The basket id.                                                                         | fffd326-72fa-4d2b-bd1f-45384fe5d521                                                    |
| `addOrdersRequestCreate`                                                               | [components.AddOrdersRequestCreate](../../models/components/addordersrequestcreate.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |