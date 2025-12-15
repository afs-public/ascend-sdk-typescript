# PartyTaxpayerCertificationState

Taxpayer certification status.

## Example Usage

```typescript
import { PartyTaxpayerCertificationState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PartyTaxpayerCertificationState =
  PartyTaxpayerCertificationState.Certified;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                     | Value                                    |
| ---------------------------------------- | ---------------------------------------- |
| `TaxpayerCertificationStateUnspecified`  | TAXPAYER_CERTIFICATION_STATE_UNSPECIFIED |
| `Certified`                              | CERTIFIED                                |
| `Uncertified`                            | UNCERTIFIED                              |
| `PendingCertification`                   | PENDING_CERTIFICATION                    |
| -                                        | `Unrecognized<string>`                   |