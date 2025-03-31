# OrderCostPreviewResponseType

The type of this price, which must be PRICE_PER_UNIT for equity orders, or PERCENTAGE_OF_PAR for fixed income orders.

## Example Usage

```typescript
import { OrderCostPreviewResponseType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderCostPreviewResponseType =
  OrderCostPreviewResponseType.PricePerUnit;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `LimitPriceTypeUnspecified`  | LIMIT_PRICE_TYPE_UNSPECIFIED |
| `PricePerUnit`               | PRICE_PER_UNIT               |
| `PercentageOfPar`            | PERCENTAGE_OF_PAR            |
| -                            | `Unrecognized<string>`       |