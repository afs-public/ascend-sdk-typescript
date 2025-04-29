# RebookTradeResponseOriginalTradePriceAdjustmentType

The type of price adjustment being applied by the broker to the net price of the security

## Example Usage

```typescript
import { RebookTradeResponseOriginalTradePriceAdjustmentType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RebookTradeResponseOriginalTradePriceAdjustmentType =
  RebookTradeResponseOriginalTradePriceAdjustmentType.Markup;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                              | Value                             |
| --------------------------------- | --------------------------------- |
| `PriceAdjustmentTypeUnspecified`  | PRICE_ADJUSTMENT_TYPE_UNSPECIFIED |
| `Markup`                          | MARKUP                            |
| `Markdown`                        | MARKDOWN                          |
| `SalesLoad`                       | SALES_LOAD                        |
| -                                 | `Unrecognized<string>`            |