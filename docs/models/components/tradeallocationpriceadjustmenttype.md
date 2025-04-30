# TradeAllocationPriceAdjustmentType

The type of price adjustment being applied by the broker to the net price of the security.

## Example Usage

```typescript
import { TradeAllocationPriceAdjustmentType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TradeAllocationPriceAdjustmentType =
  TradeAllocationPriceAdjustmentType.Markup;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                              | Value                             |
| --------------------------------- | --------------------------------- |
| `PriceAdjustmentTypeUnspecified`  | PRICE_ADJUSTMENT_TYPE_UNSPECIFIED |
| `Markup`                          | MARKUP                            |
| `Markdown`                        | MARKDOWN                          |
| `GrossCredit`                     | GROSS_CREDIT                      |
| -                                 | `Unrecognized<string>`            |