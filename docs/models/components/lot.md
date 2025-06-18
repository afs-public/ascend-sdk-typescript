# Lot

## Example Usage

```typescript
import { Lot } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Lot = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_minus_sign:                                                 | Client supplied id                                                 | 5821A4ED5ADF4774B151B57E9BBF2FDC                                   |
| `money`                                                            | [components.LotMoney](../../models/components/lotmoney.md)         | :heavy_minus_sign:                                                 | Object containing currency/ price information for the trade lot    |                                                                    |
| `quantity`                                                         | [components.LotQuantity](../../models/components/lotquantity.md)   | :heavy_minus_sign:                                                 | Quantity of the trade lot                                          | {<br/>"value": "0.25"<br/>}                                        |
| `tradeDate`                                                        | [components.LotTradeDate](../../models/components/lottradedate.md) | :heavy_minus_sign:                                                 | Trade date of the trade lot                                        | {<br/>"day": 14,<br/>"month": 5,<br/>"year": 2024<br/>}            |