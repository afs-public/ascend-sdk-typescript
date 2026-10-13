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
  accountId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
  orderCostPreviewRequestCreate: {
    assetType: OrderCostPreviewRequestCreateAssetType.FixedIncome,
    identifier: "037833100",
    identifierType: OrderCostPreviewRequestCreateIdentifierType.Cusip,
    limitPrice: {
      price: {},
      type: LimitPriceCreateType.PricePerUnit,
    },
    parent: "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X",
    quantity: {},
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The account id.                                                                                      | 01HBRQ5BW6ZAY4BNWP4GWRD80X                                                                           |
| `orderCostPreviewRequestCreate`                                                                      | [components.OrderCostPreviewRequestCreate](../../models/components/ordercostpreviewrequestcreate.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |