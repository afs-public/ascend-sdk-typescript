# BasketOrdersServiceSetExtraReportingDataRequest

## Example Usage

```typescript
import { BasketOrdersServiceSetExtraReportingDataRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BasketOrdersServiceSetExtraReportingDataRequest = {
  correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
  basketId: "fffd326-72fa-4d2b-bd1f-45384fe5d521",
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
| `correspondentId`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The correspondent id.                                                                                          | 01HPMZZM6RKMVZA1JQ63RQKJRP                                                                                     |
| `basketId`                                                                                                     | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The basket id.                                                                                                 | fffd326-72fa-4d2b-bd1f-45384fe5d521                                                                            |
| `setExtraReportingDataRequestCreate`                                                                           | [components.SetExtraReportingDataRequestCreate](../../models/components/setextrareportingdatarequestcreate.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |                                                                                                                |