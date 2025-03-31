# LegalEntityTaxpayerCertificationState

Taxpayer certification status.

## Example Usage

```typescript
import { LegalEntityTaxpayerCertificationState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LegalEntityTaxpayerCertificationState =
  LegalEntityTaxpayerCertificationState.Certified;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                     | Value                                    |
| ---------------------------------------- | ---------------------------------------- |
| `TaxpayerCertificationStateUnspecified`  | TAXPAYER_CERTIFICATION_STATE_UNSPECIFIED |
| `Certified`                              | CERTIFIED                                |
| `Uncertified`                            | UNCERTIFIED                              |
| -                                        | `Unrecognized<string>`                   |