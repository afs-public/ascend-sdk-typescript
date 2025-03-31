# TimeHorizon

TThe length of time an investor expects to hold an investment before selling it; this can affect the appropriate asset allocation and risk level for the portfolio

## Example Usage

```typescript
import { TimeHorizon } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TimeHorizon = TimeHorizon.Average;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                     | Value                    |
| ------------------------ | ------------------------ |
| `TimeHorizonUnspecified` | TIME_HORIZON_UNSPECIFIED |
| `Short`                  | SHORT                    |
| `Average`                | AVERAGE                  |
| `Long`                   | LONG                     |
| -                        | `Unrecognized<string>`   |