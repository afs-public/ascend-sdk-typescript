# BookingRebookExecutionRequest

## Example Usage

```typescript
import { BookingRebookExecutionRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingRebookExecutionRequest = {
  accountId: "02HASWB2DTMRT3DAM45P56J2T2",
  tradeId: "01J0XX2KDN3M9QKFKRE2HYSCQM",
  executionId: "02G0XX2KDN3M9QKFKRE2HYSCMY",
  rebookExecutionRequestCreate: {
    execution: {
      executionTime: new Date("2024-07-17T12:00:00Z"),
      externalId: "0H06HAP3A3Y",
      price: {},
      quantity: {},
    },
    name:
      "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM/executions/02G0XX2KDN3M9QKFKRE2HYSCMY",
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | The account id.                                                                                    | 02HASWB2DTMRT3DAM45P56J2T2                                                                         |
| `tradeId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | The trade id.                                                                                      | 01J0XX2KDN3M9QKFKRE2HYSCQM                                                                         |
| `executionId`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | The execution id.                                                                                  | 02G0XX2KDN3M9QKFKRE2HYSCMY                                                                         |
| `rebookExecutionRequestCreate`                                                                     | [components.RebookExecutionRequestCreate](../../models/components/rebookexecutionrequestcreate.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |