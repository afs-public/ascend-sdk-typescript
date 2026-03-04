# AlternativeInvestmentState

The asset’s state in the Apex alternative investment platform.

## Example Usage

```typescript
import { AlternativeInvestmentState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AlternativeInvestmentState = AlternativeInvestmentState.Open;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StateUnspecified`     | STATE_UNSPECIFIED      |
| `Open`                 | OPEN                   |
| `Closed`               | CLOSED                 |
| -                      | `Unrecognized<string>` |