# RebookExecutionRequestCreate

A response for the rebook execution method.

## Example Usage

```typescript
import { RebookExecutionRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: RebookExecutionRequestCreate = {
  execution: {
    executionTime: new Date("2024-07-17T12:00:00Z"),
    externalId: "0H06HAP3A3Y",
    price: {},
    quantity: {},
  },
  name:
    "accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM/executions/02G0XX2KDN3M9QKFKRE2HYSCMY",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `execution`                                                                                                                                                                    | [components.ExecutionCreate](../../models/components/executioncreate.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | An execution represents a partial-fill or a fill that is part of an order. Executions are children to a Trade, which collectively represents an entire order made by a client. |                                                                                                                                                                                |
| `name`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The name of the execution to rebook.                                                                                                                                           | accounts/02HASWB2DTMRT3DAM45P56J2T2/trades/01J0XX2KDN3M9QKFKRE2HYSCQM/executions/02G0XX2KDN3M9QKFKRE2HYSCMY                                                                    |