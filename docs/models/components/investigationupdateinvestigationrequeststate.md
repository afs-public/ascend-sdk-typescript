# InvestigationUpdateInvestigationRequestState

Current state of investigation request

## Example Usage

```typescript
import { InvestigationUpdateInvestigationRequestState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InvestigationUpdateInvestigationRequestState =
  InvestigationUpdateInvestigationRequestState.Open;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                    | Value                                   |
| --------------------------------------- | --------------------------------------- |
| `InvestigationRequestStateUnspecified`  | INVESTIGATION_REQUEST_STATE_UNSPECIFIED |
| `Open`                                  | OPEN                                    |
| `Closed`                                | CLOSED                                  |
| -                                       | `Unrecognized<string>`                  |