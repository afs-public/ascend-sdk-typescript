# BasketTradingExecutedPriceType

The type of this price, which must be PRICE_PER_UNIT for equity orders

## Example Usage

```typescript
import { BasketTradingExecutedPriceType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BasketTradingExecutedPriceType =
  BasketTradingExecutedPriceType.PricePerUnit;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `PricePerUnit`         | PRICE_PER_UNIT         |
| -                      | `Unrecognized<string>` |