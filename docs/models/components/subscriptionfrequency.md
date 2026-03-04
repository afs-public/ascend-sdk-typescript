# SubscriptionFrequency

Indicates how frequently the asset will accept subscriptions (that is, how often an account is allowed to buy the asset).

## Example Usage

```typescript
import { SubscriptionFrequency } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SubscriptionFrequency = SubscriptionFrequency.Monthly;
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