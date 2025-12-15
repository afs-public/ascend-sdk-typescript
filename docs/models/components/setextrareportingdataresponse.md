# SetExtraReportingDataResponse

The response message for setting extra reporting data onto a basket order

## Example Usage

```typescript
import { SetExtraReportingDataResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SetExtraReportingDataResponse = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `basketOrder`                                                                                                              | [components.SetExtraReportingDataResponseBasketOrder](../../models/components/setextrareportingdataresponsebasketorder.md) | :heavy_minus_sign:                                                                                                         | The basket order that was updated                                                                                          |                                                                                                                            |
| `name`                                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Format: correspondents/{correspondent}/baskets/{basket}                                                                    | correspondents/01HPMZZM6RKMVZA1JQ63RQKJRP/baskets/fffd326-72fa-4d2b-bd1f-45384fe5d521                                      |