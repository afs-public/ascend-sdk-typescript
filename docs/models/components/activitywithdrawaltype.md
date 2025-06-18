# ActivityWithdrawalType

The mechanism by which the funds will be withdrawn

## Example Usage

```typescript
import { ActivityWithdrawalType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivityWithdrawalType = ActivityWithdrawalType.Ach;
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
| `ExternalAch`                      | EXTERNAL_ACH                       |
| -                                  | `Unrecognized<string>`             |