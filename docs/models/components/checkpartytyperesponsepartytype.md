# CheckPartyTypeResponsePartyType

Whether the cash journal is considered first party or third party

## Example Usage

```typescript
import { CheckPartyTypeResponsePartyType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CheckPartyTypeResponsePartyType =
  CheckPartyTypeResponsePartyType.FirstParty;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `PartyTypeUnspecified` | PARTY_TYPE_UNSPECIFIED |
| `FirstParty`           | FIRST_PARTY            |
| `ThirdParty`           | THIRD_PARTY            |
| -                      | `Unrecognized<string>` |