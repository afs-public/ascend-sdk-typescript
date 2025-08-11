# AccountsEndLargeTrader1Request

## Example Usage

```typescript
import { EndReason } from "@apexfintechsolutions/ascend-sdk/models/components";
import { AccountsEndLargeTrader1Request } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsEndLargeTrader1Request = {
  legalEntityId: "e6716139-da77-46d1-9f15-13599161db0b",
  endLargeTraderRequestCreate: {
    endReason: EndReason.EventReasonCorrection,
  },
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `legalEntityId`                                                                                  | *string*                                                                                         | :heavy_check_mark:                                                                               | The legalEntity id.                                                                              | e6716139-da77-46d1-9f15-13599161db0b                                                             |
| `endLargeTraderRequestCreate`                                                                    | [components.EndLargeTraderRequestCreate](../../models/components/endlargetraderrequestcreate.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |