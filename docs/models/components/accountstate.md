# AccountState

Indicates if the account is `OPEN`, `PENDING`, or `CLOSED`

## Example Usage

```typescript
import { AccountState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AccountState = AccountState.Open;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StateUnspecified`     | STATE_UNSPECIFIED      |
| `Pending`              | PENDING                |
| `Open`                 | OPEN                   |
| `Closed`               | CLOSED                 |
| -                      | `Unrecognized<string>` |