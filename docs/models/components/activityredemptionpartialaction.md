# ActivityRedemptionPartialAction

Corresponds to whether the entry is incoming or outgoing

## Example Usage

```typescript
import { ActivityRedemptionPartialAction } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityRedemptionPartialAction =
  ActivityRedemptionPartialAction.Incoming;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `ActionUnspecified`    | ACTION_UNSPECIFIED     |
| `Incoming`             | INCOMING               |
| `Outgoing`             | OUTGOING               |
| `CashInLieu`           | CASH_IN_LIEU           |
| -                      | `Unrecognized<string>` |