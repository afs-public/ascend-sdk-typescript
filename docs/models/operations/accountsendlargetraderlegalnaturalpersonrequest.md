# AccountsEndLargeTraderLegalNaturalPersonRequest

## Example Usage

```typescript
import { EndReason } from "@apexfintechsolutions/ascend-sdk/models/components";
import { AccountsEndLargeTraderLegalNaturalPersonRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsEndLargeTraderLegalNaturalPersonRequest = {
  legalNaturalPersonId: "e6716139-da77-46d1-9f15-13599161db0b",
  endLargeTraderRequestCreate: {
    endReason: EndReason.EventReasonEnded,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `legalNaturalPersonId`                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | The legalNaturalPerson id.                                                                       | e6716139-da77-46d1-9f15-13599161db0b                                                             |
| `endLargeTraderRequestCreate`                                                                    | [components.EndLargeTraderRequestCreate](../../models/components/endlargetraderrequestcreate.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |