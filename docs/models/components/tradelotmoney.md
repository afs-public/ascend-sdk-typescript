# ~~TradeLotMoney~~

Deprecated: use the price field instead

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

## Example Usage

```typescript
import { TradeLotMoney } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TradeLotMoney = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `currencyCode`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            | USD                                                                            |
| `price`                                                                        | [components.TradeLotMoneyPrice](../../models/components/tradelotmoneyprice.md) | :heavy_minus_sign:                                                             | N/A                                                                            | {<br/>"value": "2.50"<br/>}                                                    |