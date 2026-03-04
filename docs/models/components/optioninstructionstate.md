# OptionInstructionState

Current state of the instruction

## Example Usage

```typescript
import { OptionInstructionState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionInstructionState = OptionInstructionState.Accepted;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StateUnspecified`     | STATE_UNSPECIFIED      |
| `Pending`              | PENDING                |
| `Rejected`             | REJECTED               |
| `Accepted`             | ACCEPTED               |
| `Canceled`             | CANCELED               |
| `Completed`            | COMPLETED              |
| -                      | `Unrecognized<string>` |