# PartyStatementDeliveryPreference

Delivery method instruction for account statements for a given Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `DIGITAL` on account creation but may be updated

## Example Usage

```typescript
import { PartyStatementDeliveryPreference } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PartyStatementDeliveryPreference =
  PartyStatementDeliveryPreference.Digital;
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