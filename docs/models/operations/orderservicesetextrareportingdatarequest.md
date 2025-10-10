# OrderServiceSetExtraReportingDataRequest

## Example Usage

```typescript
import { OrderServiceSetExtraReportingDataRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: OrderServiceSetExtraReportingDataRequest = {
  accountId: "01HBRQ5BW6ZAY4BNWP4GWRD80X",
  orderId: "ebb0c9b5-2c74-45c9-a4ab-40596b778706",
  setExtraReportingDataRequestCreate: {
    cancelConfirmedTime: new Date("2025-12-13T15:28:17.262732Z"),
    name:
      "accounts/01HBRQ5BW6ZAY4BNWP4GWRD80X/orders/ebb0c9b5-2c74-45c9-a4ab-40596b778706",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The account id.                                                                                                | 01HBRQ5BW6ZAY4BNWP4GWRD80X                                                                                     |
| `orderId`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The order id.                                                                                                  | ebb0c9b5-2c74-45c9-a4ab-40596b778706                                                                           |
| `setExtraReportingDataRequestCreate`                                                                           | [components.SetExtraReportingDataRequestCreate](../../models/components/setextrareportingdatarequestcreate.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |