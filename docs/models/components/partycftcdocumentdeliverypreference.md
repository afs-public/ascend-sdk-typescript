# PartyCftcDocumentDeliveryPreference

Delivery method instruction for CFTC documents for a given Party record; Defaults to `DIGITAL` on futures account creation Only applies to CFTC regulated accounts

## Example Usage

```typescript
import { PartyCftcDocumentDeliveryPreference } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PartyCftcDocumentDeliveryPreference =
  PartyCftcDocumentDeliveryPreference.Digital;
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