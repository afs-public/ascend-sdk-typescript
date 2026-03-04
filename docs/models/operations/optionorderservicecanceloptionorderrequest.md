# OptionOrderServiceCancelOptionOrderRequest

## Example Usage

```typescript
import { OptionOrderServiceCancelOptionOrderRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OptionOrderServiceCancelOptionOrderRequest = {
  accountId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
  optionOrderId: "ebb0c9b5-2c74-45c9-a4ab-40596b778706",
  cancelOptionOrderRequestCreate: {
    name:
      "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/optionOrders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            | Example                                                                                                |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `accountId`                                                                                            | *string*                                                                                               | :heavy_check_mark:                                                                                     | The account id.                                                                                        | 01HBRQ5BW6ZAY4BNWP4GWRD80X                                                                             |
| `optionOrderId`                                                                                        | *string*                                                                                               | :heavy_check_mark:                                                                                     | The optionOrder id.                                                                                    | ebb0c9b5-2c74-45c9-a4ab-40596b778706                                                                   |
| `cancelOptionOrderRequestCreate`                                                                       | [components.CancelOptionOrderRequestCreate](../../models/components/canceloptionorderrequestcreate.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |                                                                                                        |