# State

The current status of the subscription

## Example Usage

```typescript
import { State } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: State = State.Creating;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                | Value                               |
| ----------------------------------- | ----------------------------------- |
| `PushSubscriptionStateUnspecified`  | PUSH_SUBSCRIPTION_STATE_UNSPECIFIED |
| `Creating`                          | CREATING                            |
| `Active`                            | ACTIVE                              |
| `Updating`                          | UPDATING                            |
| `Deleting`                          | DELETING                            |
| -                                   | `Unrecognized<string>`              |