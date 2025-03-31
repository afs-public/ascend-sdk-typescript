# BasketOrderCreateTimeInForce

Must be the value "DAY". Regulatory requirements dictate that the system capture the intended time_in_force, which is why this a mandatory field.

## Example Usage

```typescript
import { BasketOrderCreateTimeInForce } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BasketOrderCreateTimeInForce = BasketOrderCreateTimeInForce.Day;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `TimeInForceUnspecified`  | TIME_IN_FORCE_UNSPECIFIED |
| `Day`                     | DAY                       |
| -                         | `Unrecognized<string>`    |