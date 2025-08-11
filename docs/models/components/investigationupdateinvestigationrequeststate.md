# InvestigationUpdateInvestigationRequestState

The state of an investigation request, one of:
- `INVESTIGATION_REQUEST_STATE_UNSPECIFIED` - Default/Null value.
- `OPEN` - The investigation request is open.
- `CLOSED` - The investigation request is closed.

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