# OrderServiceCreateOrderRequest

## Example Usage

```typescript
import { AssetType, IdentifierType, OrderType, Side, TimeInForce } from "@apexfintechsolutions/ascend-sdk/models/components";
import { OrderServiceCreateOrderRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OrderServiceCreateOrderRequest = {
  accountId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
  orderCreate: {
    assetType: AssetType.Equity,
    clientOrderId: "a6d5258b-6b23-478a-8145-98e79d60427a",
    identifier: "SBUX",
    identifierType: IdentifierType.Symbol,
    orderDate: {},
    orderType: OrderType.Market,
    side: Side.Buy,
    timeInForce: TimeInForce.Day,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `accountId`                                                      | *string*                                                         | :heavy_check_mark:                                               | The account id.                                                  | 01HBRQ5BW6ZAY4BNWP4GWRD80X                                       |
| `orderCreate`                                                    | [components.OrderCreate](../../models/components/ordercreate.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |