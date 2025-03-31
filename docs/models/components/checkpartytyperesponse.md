# CheckPartyTypeResponse

Returns whether a potential cash journal will be considered first party or third party

## Example Usage

```typescript
import { CheckPartyTypeResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CheckPartyTypeResponse = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `partyType`                                                                                              | [components.CheckPartyTypeResponsePartyType](../../models/components/checkpartytyperesponsepartytype.md) | :heavy_minus_sign:                                                                                       | Whether the cash journal is considered first party or third party                                        | FIRST_PARTY                                                                                              |
| `reason`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | If cash journal is considered third party, reason for why it is considered third party                   | Account owner information does not match                                                                 |