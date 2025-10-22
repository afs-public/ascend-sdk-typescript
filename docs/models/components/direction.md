# Direction

Flag indicating whether this is a deposit or withdrawal transfer

## Example Usage

```typescript
import { Direction } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Direction = Direction.Deposit;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `DirectionUnspecified` | DIRECTION_UNSPECIFIED  |
| `Deposit`              | DEPOSIT                |
| `Withdrawal`           | WITHDRAWAL             |
| `Journal`              | JOURNAL                |
| -                      | `Unrecognized<string>` |