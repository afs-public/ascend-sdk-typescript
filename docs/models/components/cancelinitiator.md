# CancelInitiator

Output only field that is required for Equity Orders for any client who is having Apex do CAT reporting on their behalf. This field denotes the initiator of the cancel request. This field will be present when provided on the CancelOrderRequest

## Example Usage

```typescript
import { CancelInitiator } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelInitiator = CancelInitiator.Firm;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `InitiatorUnspecified` | INITIATOR_UNSPECIFIED  |
| `Firm`                 | FIRM                   |
| `Client`               | CLIENT                 |
| -                      | `Unrecognized<string>` |