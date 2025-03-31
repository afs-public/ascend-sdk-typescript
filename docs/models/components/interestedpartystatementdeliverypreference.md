# InterestedPartyStatementDeliveryPreference

Delivery method instruction for account statements for a given Interested Party; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation

## Example Usage

```typescript
import { InterestedPartyStatementDeliveryPreference } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InterestedPartyStatementDeliveryPreference =
  InterestedPartyStatementDeliveryPreference.Digital;
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