# InterestedPartyUpdateTradeConfirmationDeliveryPreference

Delivery method instruction for trade confirmations for a given Interested Party record; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation

## Example Usage

```typescript
import { InterestedPartyUpdateTradeConfirmationDeliveryPreference } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InterestedPartyUpdateTradeConfirmationDeliveryPreference =
  InterestedPartyUpdateTradeConfirmationDeliveryPreference.Physical;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Physical`             | PHYSICAL               |
| `Suppress`             | SUPPRESS               |
| -                      | `Unrecognized<string>` |