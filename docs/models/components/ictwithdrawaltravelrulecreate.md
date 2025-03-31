# IctWithdrawalTravelRuleCreate

The travel rules associated with an ICT withdrawal

## Example Usage

```typescript
import { IctWithdrawalTravelRuleCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: IctWithdrawalTravelRuleCreate = {
  recipientInstitution: {
    accountId: "<id>",
    title: "<value>",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `recipientInstitution`                                                                  | [components.InstitutionCreate](../../models/components/institutioncreate.md)            | :heavy_check_mark:                                                                      | Institution representing originator or recipient of funds from an Instant Cash Transfer |