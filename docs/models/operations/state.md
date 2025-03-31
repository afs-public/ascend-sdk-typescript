# State

The state of bank relationships to filter by. Unspecified returns relationships of all states.

## Example Usage

```typescript
import { State } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: State = State.Approved;
```

## Values

| Name               | Value              |
| ------------------ | ------------------ |
| `StateUnspecified` | STATE_UNSPECIFIED  |
| `Pending`          | PENDING            |
| `Approved`         | APPROVED           |
| `Canceled`         | CANCELED           |
| `Rejected`         | REJECTED           |