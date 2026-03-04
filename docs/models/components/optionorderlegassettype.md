# OptionOrderLegAssetType

The type of the asset in this option order leg. Orders with only a single leg may only contain an OPTION asset type. Orders with multiple legs must contain at least one OPTION leg, and no more than one EQUITY leg.

## Example Usage

```typescript
import { OptionOrderLegAssetType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionOrderLegAssetType = OptionOrderLegAssetType.Option;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Equity`               | EQUITY                 |
| `Option`               | OPTION                 |
| -                      | `Unrecognized<string>` |