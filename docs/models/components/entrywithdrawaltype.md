# EntryWithdrawalType

Provides information on the method through which a deposit/ withdrawal was initiated

## Example Usage

```typescript
import { EntryWithdrawalType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntryWithdrawalType = EntryWithdrawalType.Ach;
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