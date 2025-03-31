# OrderPriceServicePreviewOrderCostRequest

## Example Usage

```typescript
import {
  LimitPriceCreateType,
  OrderCostPreviewRequestCreateAssetType,
  OrderCostPreviewRequestCreateIdentifierType,
} from "@apexfintechsolutions/ascend-sdk/models/components";
import { OrderPriceServicePreviewOrderCostRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OrderPriceServicePreviewOrderCostRequest = {
  accountId: "<id>",
  orderCostPreviewRequestCreate: {
    assetType: OrderCostPreviewRequestCreateAssetType.FixedIncome,
    identifier: "37833100",
    identifierType: OrderCostPreviewRequestCreateIdentifierType.Cusip,
    limitPrice: {
      price: {},
      type: LimitPriceCreateType.PricePerUnit,
    },
    parent: "<value>",
    quantity: {},
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The account id.                                                                                      |
| `orderCostPreviewRequestCreate`                                                                      | [components.OrderCostPreviewRequestCreate](../../models/components/ordercostpreviewrequestcreate.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |