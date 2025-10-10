# TimeInForce

Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.

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