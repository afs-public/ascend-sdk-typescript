# Money

Object containing currency/ price information for the trade lot

## Example Usage

```typescript
import { Money } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Money = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `currencyCode`                                             | *string*                                                   | :heavy_minus_sign:                                         | Currency code of the price                                 | USD                                                        |
| `price`                                                    | [components.LotPrice](../../models/components/lotprice.md) | :heavy_minus_sign:                                         | Price of the trade lot                                     | {<br/>"value": "0.25"<br/>}                                |