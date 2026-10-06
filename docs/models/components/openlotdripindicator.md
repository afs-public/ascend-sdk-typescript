# OpenLotDripIndicator

Indicates acquisition through a dividend reinvestment plan.

## Example Usage

```typescript
import { OpenLotDripIndicator } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OpenLotDripIndicator = OpenLotDripIndicator.Drip;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                       | Value                      |
| -------------------------- | -------------------------- |
| `DripIndicatorUnspecified` | DRIP_INDICATOR_UNSPECIFIED |
| `Drip`                     | DRIP                       |
| -                          | `Unrecognized<string>`     |