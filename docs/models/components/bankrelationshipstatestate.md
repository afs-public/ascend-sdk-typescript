# BankRelationshipStateState

The high level state of the bank relationship.

## Example Usage

```typescript
import { BankRelationshipStateState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BankRelationshipStateState = BankRelationshipStateState.Canceled;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `StateUnspecified`     | STATE_UNSPECIFIED      |
| `Pending`              | PENDING                |
| `Approved`             | APPROVED               |
| `Canceled`             | CANCELED               |
| `Rejected`             | REJECTED               |
| -                      | `Unrecognized<string>` |