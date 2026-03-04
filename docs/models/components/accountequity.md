# AccountEquity

Account Equity fields returned from the request.

## Example Usage

```typescript
import { AccountEquity } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AccountEquity = {};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `accountEquityAmount`                                                                                                        | [components.AssetBuyingPowerAccountEquityAmount](../../models/components/assetbuyingpoweraccountequityamount.md)             | :heavy_minus_sign:                                                                                                           | The account_equity in USD returned from the request.                                                                         | {<br/>"value": "100.00"<br/>}                                                                                                |
| `positionMarketValueAmount`                                                                                                  | [components.AssetBuyingPowerPositionMarketValueAmount](../../models/components/assetbuyingpowerpositionmarketvalueamount.md) | :heavy_minus_sign:                                                                                                           | The position_market_value in USD returned from the request.                                                                  | {<br/>"value": "100.00"<br/>}                                                                                                |