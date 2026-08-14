# BasketTradingSetExtraReportingDataRequestCreate

The message to set extra reporting data onto a basket order

## Example Usage

```typescript
import { BasketTradingSetExtraReportingDataRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BasketTradingSetExtraReportingDataRequestCreate = {
  clientOrderId: "4cff908e-aaed-401d-8ec9-929e3eb18cbc",
  name:
    "correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `clientOrderId`                                                                            | *string*                                                                                   | :heavy_check_mark:                                                                         | The client-provided order id for the order to update                                       | 4cff908e-aaed-401d-8ec9-929e3eb18cbc                                                       |
| `extraReportingData`                                                                       | [components.ExtraReportingDataCreate](../../models/components/extrareportingdatacreate.md) | :heavy_minus_sign:                                                                         | Any extra reporting data provided by the client for an order                               |                                                                                            |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | Format: correspondents/{correspondent}/baskets/{basket}                                    | correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521      |