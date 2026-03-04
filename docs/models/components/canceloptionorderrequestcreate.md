# CancelOptionOrderRequestCreate

The message to request cancellation of an existing option order

## Example Usage

```typescript
import { CancelOptionOrderRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelOptionOrderRequestCreate = {
  name:
    "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/optionOrders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `name`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | Format: accounts/{account_id}/optionOrders/{option_order_id}                          | accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/optionOrders/ebb0c9b5-2c74-45c9-a4ab-40596b778706 |