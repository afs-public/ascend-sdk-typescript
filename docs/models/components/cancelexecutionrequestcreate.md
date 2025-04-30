# CancelExecutionRequestCreate

A request for canceling a single execution.

## Example Usage

```typescript
import { CancelExecutionRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CancelExecutionRequestCreate = {
  name:
    "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM/executions/02G0XX2KDN3M9QKFKRE2HYSCMY",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The name of the execution to cancel.                                                                        | accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM/executions/02G0XX2KDN3M9QKFKRE2HYSCMY |