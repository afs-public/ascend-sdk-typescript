# PartyRequestUpdateProspectusDeliveryPreference

Delivery method instruction for prospectuses for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated

## Example Usage

```typescript
import { PartyRequestUpdateProspectusDeliveryPreference } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PartyRequestUpdateProspectusDeliveryPreference =
  PartyRequestUpdateProspectusDeliveryPreference.Digital;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                            | Value                           |
| ------------------------------- | ------------------------------- |
| `DeliveryPreferenceUnspecified` | DELIVERY_PREFERENCE_UNSPECIFIED |
| `Digital`                       | DIGITAL                         |
| `Physical`                      | PHYSICAL                        |
| `Suppress`                      | SUPPRESS                        |
| -                               | `Unrecognized<string>`          |