# ConsentMethod

The consent method for the enrollment. Defaults to ESIGNATURE.

## Example Usage

```typescript
import { ConsentMethod } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ConsentMethod = ConsentMethod.NegativeConsentConversion;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `ConsentMethodUnspecified`  | CONSENT_METHOD_UNSPECIFIED  |
| `Esignature`                | ESIGNATURE                  |
| `WetSignature`              | WET_SIGNATURE               |
| `NegativeConsentConversion` | NEGATIVE_CONSENT_CONVERSION |
| `InternalConversion`        | INTERNAL_CONVERSION         |
| -                           | `Unrecognized<string>`      |