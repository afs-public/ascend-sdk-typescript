# AssetSpecific

Asset Specific fields returned from the request.

## Example Usage

```typescript
import { AssetSpecific } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AssetSpecific = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `dayTrade`                                                          | [components.DayTrade](../../models/components/daytrade.md)          | :heavy_minus_sign:                                                  | Day Trade Asset Buying Power figures returned from the request.     |                                                                     |
| `nonDayTrade`                                                       | [components.NonDayTrade](../../models/components/nondaytrade.md)    | :heavy_minus_sign:                                                  | Non Day Trade Asset Buying Power figures returned from the request. |                                                                     |
| `priceAmount`                                                       | [components.PriceAmount](../../models/components/priceamount.md)    | :heavy_minus_sign:                                                  | The current price of the asset in USD returned from the request.    | {<br/>"value": "100.00"<br/>}                                       |