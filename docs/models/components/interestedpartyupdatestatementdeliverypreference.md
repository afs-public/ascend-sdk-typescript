# InterestedPartyUpdateStatementDeliveryPreference

Delivery method instruction for account statements for a given Interested Party; Can be `PHYSICAL`, `SUPPRESS`; Defaults to `PHYSICAL` on party creation

## Example Usage

```typescript
import { InterestedPartyUpdateStatementDeliveryPreference } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InterestedPartyUpdateStatementDeliveryPreference =
  InterestedPartyUpdateStatementDeliveryPreference.Physical;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `Physical`             | PHYSICAL               |
| `Suppress`             | SUPPRESS               |
| -                      | `Unrecognized<string>` |