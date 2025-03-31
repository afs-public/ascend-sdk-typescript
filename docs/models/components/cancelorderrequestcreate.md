# CancelOrderRequestCreate

The message to request cancellation of an existing order

## Example Usage

```typescript
import { CancelOrderRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelOrderRequestCreate = {
  name:
    "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/orders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | Format: accounts/{account_id}/orders/{order_id}                                 | accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/orders/ebb0c9b5-2c74-45c9-a4ab-40596b778706 |