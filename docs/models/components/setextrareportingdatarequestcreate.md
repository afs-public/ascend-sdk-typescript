# SetExtraReportingDataRequestCreate

## Example Usage

```typescript
import { SetExtraReportingDataRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SetExtraReportingDataRequestCreate = {
  cancelConfirmedTime: new Date("2025-12-13T15:28:17.262732Z"),
  name:
    "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/orders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cancelConfirmedTime`                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2025-12-13 15:28:17.262732 +0000 UTC                                                          |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Format: accounts/{account_id}/orders/{order_id}                                               | accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/orders/ebb0c9b5-2c74-45c9-a4ab-40596b778706               |