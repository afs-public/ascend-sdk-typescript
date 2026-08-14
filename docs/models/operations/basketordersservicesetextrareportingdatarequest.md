# BasketOrdersServiceSetExtraReportingDataRequest

## Example Usage

```typescript
import { BasketOrdersServiceSetExtraReportingDataRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BasketOrdersServiceSetExtraReportingDataRequest = {
  correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
  basketId: "fffd326-72fa-4d2b-bd1f-45384fe5d521",
  basketTradingSetExtraReportingDataRequestCreate: {
    clientOrderId: "4cff908e-aaed-401d-8ec9-929e3eb18cbc",
    name:
      "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521",
  },
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `correspondentId`                                                                                                                        | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The correspondent id.                                                                                                                    | 01HPMZZM6RKMVZA1JQ63RQKJRP                                                                                                               |
| `basketId`                                                                                                                               | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | The basket id.                                                                                                                           | fffd326-72fa-4d2b-bd1f-45384fe5d521                                                                                                      |
| `basketTradingSetExtraReportingDataRequestCreate`                                                                                        | [components.BasketTradingSetExtraReportingDataRequestCreate](../../models/components/baskettradingsetextrareportingdatarequestcreate.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |                                                                                                                                          |