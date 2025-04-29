# BookingCancelExecutionRequest

## Example Usage

```typescript
import { BookingCancelExecutionRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingCancelExecutionRequest = {
  accountId: "02HASWB2DTMRT3DAM45P56J2T2",
  tradeId: "01J0XX2KDN3M9QKFKRE2HYSCQM",
  executionId: "02G0XX2KDN3M9QKFKRE2HYSCMY",
  cancelExecutionRequestCreate: {
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
| `cancelExecutionRequestCreate`                                                                     | [components.CancelExecutionRequestCreate](../../models/components/cancelexecutionrequestcreate.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |