# CancelOrderRequestCreateCancelInitiator

Only relevant for CAT reporting when clients have Apex do CAT reporting on their behalf. A value may be provided for non-Equity orders, and will be remembered, but the value will have no impact on how they are processed. Cancel requests without this field set will default to CLIENT

## Example Usage

```typescript
import { CancelOrderRequestCreateCancelInitiator } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelOrderRequestCreateCancelInitiator =
  CancelOrderRequestCreateCancelInitiator.Firm;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `InitiatorUnspecified` | INITIATOR_UNSPECIFIED  |
| `Firm`                 | FIRM                   |
| `Client`               | CLIENT                 |
| -                      | `Unrecognized<string>` |