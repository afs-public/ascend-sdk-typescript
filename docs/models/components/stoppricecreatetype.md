# StopPriceCreateType

The type of this price, which must PRICE_PER_UNIT for equity orders. (Fixed income and mutual fund assets do not support stop orders.)

## Example Usage

```typescript
import { StopPriceCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: StopPriceCreateType = StopPriceCreateType.PricePerUnit;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `StopPriceTypeUnspecified`  | STOP_PRICE_TYPE_UNSPECIFIED |
| `PricePerUnit`              | PRICE_PER_UNIT              |
| -                           | `Unrecognized<string>`      |