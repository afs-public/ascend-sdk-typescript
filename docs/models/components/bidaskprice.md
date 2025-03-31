# BidAskPrice

The definition of a price value and its calculation method as returned in quote data

## Example Usage

```typescript
import { BidAskPrice } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BidAskPrice = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `price`                                                                    | [components.BidAskPricePrice](../../models/components/bidaskpriceprice.md) | :heavy_minus_sign:                                                         | The price value                                                            | {<br/>"value": "97.43"<br/>}                                               |
| `type`                                                                     | [components.BidAskPriceType](../../models/components/bidaskpricetype.md)   | :heavy_minus_sign:                                                         | The calculation type of this price                                         | PERCENTAGE_OF_PAR                                                          |