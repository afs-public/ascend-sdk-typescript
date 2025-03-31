# AddOrdersRequestCreate

The message to add a list of basket orders to a basket

## Example Usage

```typescript
import {
  AddOrdersRequestCreate,
  BasketOrderCreateAssetType,
  BasketOrderCreateIdentifierType,
  BasketOrderCreateOrderType,
  BasketOrderCreateSide,
  BasketOrderCreateTimeInForce,
} from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AddOrdersRequestCreate = {
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
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `basketOrders`                                                                                | [components.BasketOrderCreate](../../models/components/basketordercreate.md)[]                | :heavy_check_mark:                                                                            | The orders to add to the basket. A maximum of 1000 orders can be added to a basket at a time. |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Format: correspondents/{correspondent}/baskets/{basket}                                       | correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521         |