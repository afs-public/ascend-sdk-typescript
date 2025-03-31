# TradeConfirmationDeliveryPreference

Delivery method instruction for trade confirmations for a given Interested Party record; Can be `DIGITAL`, `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation

## Example Usage

```typescript
import { TradeConfirmationDeliveryPreference } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TradeConfirmationDeliveryPreference =
  TradeConfirmationDeliveryPreference.Digital;
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