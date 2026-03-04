# RedemptionFrequency

Indicates how frequently an account can redeem the asset.

## Example Usage

```typescript
import { RedemptionFrequency } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RedemptionFrequency = RedemptionFrequency.FrequencyUnspecified;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `FrequencyUnspecified` | FREQUENCY_UNSPECIFIED  |
| `Daily`                | DAILY                  |
| `Weekly`               | WEEKLY                 |
| `BiWeekly`             | BI_WEEKLY              |
| `Monthly`              | MONTHLY                |
| `Quarterly`            | QUARTERLY              |
| `BiAnnually`           | BI_ANNUALLY            |
| `Annually`             | ANNUALLY               |
| -                      | `Unrecognized<string>` |