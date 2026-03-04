# ValuationFrequency

Indicates how often the asset is valued. Critical for pricing workflows, client expectations, and operational scheduling.

## Example Usage

```typescript
import { ValuationFrequency } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ValuationFrequency = ValuationFrequency.Monthly;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                            | Value                           |
| ------------------------------- | ------------------------------- |
| `ValuationFrequencyUnspecified` | VALUATION_FREQUENCY_UNSPECIFIED |
| `Daily`                         | DAILY                           |
| `Weekly`                        | WEEKLY                          |
| `Biweekly`                      | BIWEEKLY                        |
| `Monthly`                       | MONTHLY                         |
| `Semimonthly`                   | SEMIMONTHLY                     |
| `Quarterly`                     | QUARTERLY                       |
| `Annually`                      | ANNUALLY                        |
| `Other`                         | OTHER                           |
| -                               | `Unrecognized<string>`          |