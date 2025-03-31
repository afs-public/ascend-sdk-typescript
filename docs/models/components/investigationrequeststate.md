# InvestigationRequestState

Current state of investigation request

## Example Usage

```typescript
import { InvestigationRequestState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InvestigationRequestState = InvestigationRequestState.Open;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                    | Value                                   |
| --------------------------------------- | --------------------------------------- |
| `InvestigationRequestStateUnspecified`  | INVESTIGATION_REQUEST_STATE_UNSPECIFIED |
| `Open`                                  | OPEN                                    |
| `Closed`                                | CLOSED                                  |
| -                                       | `Unrecognized<string>`                  |