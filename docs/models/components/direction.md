# Direction

The direction of the transfer

## Example Usage

```typescript
import { Direction } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Direction = Direction.Outgoing;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `DirectionUnspecified` | DIRECTION_UNSPECIFIED  |
| `Outgoing`             | OUTGOING               |
| `Incoming`             | INCOMING               |
| -                      | `Unrecognized<string>` |