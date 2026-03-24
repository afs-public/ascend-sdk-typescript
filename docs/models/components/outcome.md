# Outcome

The determined outcome of the event

## Example Usage

```typescript
import { Outcome } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Outcome = Outcome.Favorable;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                               | Value                              |
| ---------------------------------- | ---------------------------------- |
| `EventContractOutcomeUnspecified`  | EVENT_CONTRACT_OUTCOME_UNSPECIFIED |
| `Favorable`                        | FAVORABLE                          |
| `Unfavorable`                      | UNFAVORABLE                        |
| `Void`                             | VOID                               |
| `Tie`                              | TIE                                |
| -                                  | `Unrecognized<string>`             |