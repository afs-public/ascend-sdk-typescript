# SetOptionExtraReportingDataRequestCreate

Request message for SetOptionExtraReportingData.

## Example Usage

```typescript
import { SetOptionExtraReportingDataRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SetOptionExtraReportingDataRequestCreate = {
  cancelConfirmedTime: new Date("2025-12-13T15:28:17.262732Z"),
  name:
    "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/optionOrders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cancelConfirmedTime`                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time the correspondent confirmed receipt of the cancellation.                             | 2025-12-13T15:28:17.262732Z                                                                   |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Format: accounts/{account_id}/optionOrders/{option_order_id}                                  | accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/optionOrders/ebb0c9b5-2c74-45c9-a4ab-40596b778706         |