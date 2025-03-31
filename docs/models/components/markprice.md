# MarkPrice

The definition of a price value and its calculation method as returned in mark data

## Example Usage

```typescript
import { MarkPrice } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: MarkPrice = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `price`                                                                | [components.MarkPricePrice](../../models/components/markpriceprice.md) | :heavy_minus_sign:                                                     | The price value                                                        | {<br/>"value": "97.43"<br/>}                                           |
| `type`                                                                 | [components.MarkPriceType](../../models/components/markpricetype.md)   | :heavy_minus_sign:                                                     | The calculation type of this price                                     | PERCENTAGE_OF_PAR                                                      |