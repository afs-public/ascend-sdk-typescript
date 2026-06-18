# ActivityMoneyness

Indicates whether the price of the underlying was above or below the strike price of the option

## Example Usage

```typescript
import { ActivityMoneyness } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityMoneyness = ActivityMoneyness.InTheMoney;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `MoneynessUnspecified` | MONEYNESS_UNSPECIFIED  |
| `InTheMoney`           | IN_THE_MONEY           |
| `OutOfTheMoney`        | OUT_OF_THE_MONEY       |
| -                      | `Unrecognized<string>` |