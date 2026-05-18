# CftcDocumentDeliveryPreference

Delivery method instruction for CFTC documents for a given Interested Party record; Not set for interested parties (no email collected); only applies to CFTC regulated accounts

## Example Usage

```typescript
import { CftcDocumentDeliveryPreference } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CftcDocumentDeliveryPreference =
  CftcDocumentDeliveryPreference.Digital;
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