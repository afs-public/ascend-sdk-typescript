# AcceptTransferResponseDirection

The direction of the transfer

## Example Usage

```typescript
import { AcceptTransferResponseDirection } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcceptTransferResponseDirection =
  AcceptTransferResponseDirection.Outgoing;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `DirectionUnspecified` | DIRECTION_UNSPECIFIED  |
| `Outgoing`             | OUTGOING               |
| `Incoming`             | INCOMING               |
| -                      | `Unrecognized<string>` |