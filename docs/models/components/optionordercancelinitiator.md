# OptionOrderCancelInitiator

Whether the cancel was initiated by the correspondent firm (FIRM) or the customer (CLIENT). Populated from the CancelOptionOrderRequest.

## Example Usage

```typescript
import { OptionOrderCancelInitiator } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionOrderCancelInitiator = OptionOrderCancelInitiator.Firm;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `InitiatorUnspecified` | INITIATOR_UNSPECIFIED  |
| `Firm`                 | FIRM                   |
| `Client`               | CLIENT                 |
| -                      | `Unrecognized<string>` |