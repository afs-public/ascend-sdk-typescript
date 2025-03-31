# BasketState

The processing status of the basket

## Example Usage

```typescript
import { BasketState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BasketState = BasketState.Submitted;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StateUnspecified`     | STATE_UNSPECIFIED      |
| `New`                  | NEW                    |
| `Submitted`            | SUBMITTED              |
| `Executing`            | EXECUTING              |
| `Allocating`           | ALLOCATING             |
| `Done`                 | DONE                   |
| `Rejected`             | REJECTED               |
| `PartiallyFilled`      | PARTIALLY_FILLED       |
| -                      | `Unrecognized<string>` |