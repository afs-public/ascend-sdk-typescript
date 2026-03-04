# OptionOrderServiceCreateOptionOrderRequest

## Example Usage

```typescript
import {
  OptionOrderCreateBrokerCapacity,
  OptionOrderCreateOrderType,
  OptionOrderCreateTimeInForce,
  PriceDirection,
} from "@apexfintechsolutions/ascend-sdk/models/components";
import { OptionOrderServiceCreateOptionOrderRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OptionOrderServiceCreateOptionOrderRequest = {
  accountId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
  optionOrderCreate: {
    brokerCapacity: OptionOrderCreateBrokerCapacity.Agency,
    clientOrderId: "a6d5258b-6b23-478a-8145-98e79d60427a",
    currencyCode: "USD",
    legs: [],
    limitPrice: {},
    orderDate: {},
    orderType: OptionOrderCreateOrderType.Limit,
    priceDirection: PriceDirection.Credit,
    quantity: {},
    timeInForce: OptionOrderCreateTimeInForce.Day,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accountId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | The account id.                                                              | 01HBRQ5BW6ZAY4BNWP4GWRD80X                                                   |
| `optionOrderCreate`                                                          | [components.OptionOrderCreate](../../models/components/optionordercreate.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |