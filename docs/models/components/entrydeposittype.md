# EntryDepositType

The mechanism by which funds were deposited

## Example Usage

```typescript
import { EntryDepositType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryDepositType = EntryDepositType.Ach;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                               | Value                              |
| ---------------------------------- | ---------------------------------- |
| `ExternalMovementTypeUnspecified`  | EXTERNAL_MOVEMENT_TYPE_UNSPECIFIED |
| `Ach`                              | ACH                                |
| `Check`                            | CHECK                              |
| `Wire`                             | WIRE                               |
| `Paypal`                           | PAYPAL                             |
| `Rtp`                              | RTP                                |
| `Ict`                              | ICT                                |
| `Journal`                          | JOURNAL                            |
| -                                  | `Unrecognized<string>`             |