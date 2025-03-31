# TotalNetWorthRangeUsd

Total net worth range; the low number is exclusive, the high number is inclusive

## Example Usage

```typescript
import { TotalNetWorthRangeUsd } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TotalNetWorthRangeUsd = TotalNetWorthRangeUsd.From100KTo200K;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `UsdRangeUnspecified`  | USD_RANGE_UNSPECIFIED  |
| `Under25K`             | UNDER_25K              |
| `From25KTo50K`         | FROM_25K_TO_50K        |
| `From50KTo100K`        | FROM_50K_TO_100K       |
| `From100KTo200K`       | FROM_100K_TO_200K      |
| `From200KTo300K`       | FROM_200K_TO_300K      |
| `From300KTo500K`       | FROM_300K_TO_500K      |
| `From500KTo1M`         | FROM_500K_TO_1M        |
| `From1MTo5M`           | FROM_1M_TO_5M          |
| `Over5M`               | OVER_5M                |
| -                      | `Unrecognized<string>` |