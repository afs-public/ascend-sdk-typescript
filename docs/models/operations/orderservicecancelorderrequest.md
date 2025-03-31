# OrderServiceCancelOrderRequest

## Example Usage

```typescript
import { OrderServiceCancelOrderRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OrderServiceCancelOrderRequest = {
  accountId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
  orderId: "ebb0c9b5-2c74-45c9-a4ab-40596b778706",
  cancelOrderRequestCreate: {
    name:
      "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/orders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `accountId`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | The account id.                                                                            | 01HBRQ5BW6ZAY4BNWP4GWRD80X                                                                 |
| `orderId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | The order id.                                                                              | ebb0c9b5-2c74-45c9-a4ab-40596b778706                                                       |
| `cancelOrderRequestCreate`                                                                 | [components.CancelOrderRequestCreate](../../models/components/cancelorderrequestcreate.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |