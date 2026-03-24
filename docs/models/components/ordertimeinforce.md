# OrderTimeInForce

For Equities: Either "DAY" or "GOOD_TILL_DATE" are allowed. For Mutual Funds: Only "DAY" is allowed. For Fixed Income: Only "DAY" is allowed. For Event Contracts: Either "DAY", "GOOD_TILL_DATE", "GOOD_TILL_CANCELED", "IMMEDIATE_OR_CANCEL", or "FILL_OR_KILL" are allowed.

## Example Usage

```typescript
import { OrderTimeInForce } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OrderTimeInForce = OrderTimeInForce.Day;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Day`                  | DAY                    |
| `GoodTillDate`         | GOOD_TILL_DATE         |
| `GoodTillCanceled`     | GOOD_TILL_CANCELED     |
| `ImmediateOrCancel`    | IMMEDIATE_OR_CANCEL    |
| `FillOrKill`           | FILL_OR_KILL           |
| -                      | `Unrecognized<string>` |