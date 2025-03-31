# PartyType

Whether a cash journal is first party or third party Determined asynchronously when the transfer is processing, and will be set by the time the transfer is posted

## Example Usage

```typescript
import { PartyType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PartyType = PartyType.FirstParty;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `PartyTypeUnspecified` | PARTY_TYPE_UNSPECIFIED |
| `FirstParty`           | FIRST_PARTY            |
| `ThirdParty`           | THIRD_PARTY            |
| -                      | `Unrecognized<string>` |