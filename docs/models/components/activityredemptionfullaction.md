# ActivityRedemptionFullAction

Denotes whether the shares are incoming or outgoing

## Example Usage

```typescript
import { ActivityRedemptionFullAction } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityRedemptionFullAction = ActivityRedemptionFullAction.Incoming;
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