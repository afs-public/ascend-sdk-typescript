# TimeInForce

For Equities: Either "DAY" or "GOOD_TILL_DATE" are allowed. For Mutual Funds: Only "DAY" is allowed. For Fixed Income: Only "DAY" is allowed.

## Example Usage

```typescript
import { TimeInForce } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TimeInForce = TimeInForce.Day;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Day`                  | DAY                    |
| `GoodTillDate`         | GOOD_TILL_DATE         |
| -                      | `Unrecognized<string>` |