# IctDepositTravelRuleCreate

The travel rules associated with an ICT deposit

## Example Usage

```typescript
import { IctDepositTravelRuleCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IctDepositTravelRuleCreate = {
  originatingInstitution: {
    accountId: "<id>",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `entityOriginatingParty`                                                                         | [components.TravelRuleEntityPartyCreate](../../models/components/travelruleentitypartycreate.md) | :heavy_minus_sign:                                                                               | Travel rule entity party                                                                         |
| `entityRecipientParty`                                                                           | [components.TravelRuleEntityPartyCreate](../../models/components/travelruleentitypartycreate.md) | :heavy_minus_sign:                                                                               | Travel rule entity party                                                                         |
| `individualOriginatingParty`                                                                     | [components.TravelRulePartyCreate](../../models/components/travelrulepartycreate.md)             | :heavy_minus_sign:                                                                               | Travel rule party                                                                                |
| `individualRecipientParty`                                                                       | [components.TravelRulePartyCreate](../../models/components/travelrulepartycreate.md)             | :heavy_minus_sign:                                                                               | Travel rule party                                                                                |
| `originatingInstitution`                                                                         | [components.InstitutionCreate](../../models/components/institutioncreate.md)                     | :heavy_check_mark:                                                                               | Institution representing originator or recipient of funds from an Instant Cash Transfer          |