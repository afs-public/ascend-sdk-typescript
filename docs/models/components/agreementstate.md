# AgreementState

The status of an agreement which blocks an enrollment; `REQUIRED` if not yet received, or `AFFIRMED` if acknowledgement has been received by AFS

## Example Usage

```typescript
import { AgreementState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AgreementState = AgreementState.Affirmed;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `AgreementStateUnspecified` | AGREEMENT_STATE_UNSPECIFIED |
| `Required`                  | REQUIRED                    |
| `Affirmed`                  | AFFIRMED                    |
| `Voided`                    | VOIDED                      |
| -                           | `Unrecognized<string>`      |