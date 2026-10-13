# TradingExecutedPrice

An average price definition

## Example Usage

```typescript
import { TradingExecutedPrice } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TradingExecutedPrice = {};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `price`                                                                                                               | [components.Price](../../models/components/price.md)                                                                  | :heavy_minus_sign:                                                                                                    | The price value which must be greater than zero if provided. Supports up to 8 decimal places.                         | {<br/>"value": "97.83"<br/>}                                                                                          |
| `type`                                                                                                                | [components.TradingExecutedPriceType](../../models/components/tradingexecutedpricetype.md)                            | :heavy_minus_sign:                                                                                                    | The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders. | PRICE_PER_UNIT                                                                                                        |