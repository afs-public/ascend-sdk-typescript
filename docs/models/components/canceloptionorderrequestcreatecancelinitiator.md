# CancelOptionOrderRequestCreateCancelInitiator

Identifies whether the cancel was initiated by the correspondent firm (FIRM) or the customer (CLIENT). Defaults to CLIENT if not provided. Required for correspondents using Apex CAT reporting services.

## Example Usage

```typescript
import { CancelOptionOrderRequestCreateCancelInitiator } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelOptionOrderRequestCreateCancelInitiator =
  CancelOptionOrderRequestCreateCancelInitiator.Firm;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `InitiatorUnspecified` | INITIATOR_UNSPECIFIED  |
| `Firm`                 | FIRM                   |
| `Client`               | CLIENT                 |
| -                      | `Unrecognized<string>` |