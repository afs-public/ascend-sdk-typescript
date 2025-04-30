# BookingCreateExecutionResponse

## Example Usage

```typescript
import { BookingCreateExecutionResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingCreateExecutionResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                                                                     | Type                                                                                                                                                                      | Required                                                                                                                                                                  | Description                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                                                                | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                        | N/A                                                                                                                                                                       |
| `execution`                                                                                                                                                               | [components.Execution](../../models/components/execution.md)                                                                                                              | :heavy_minus_sign:                                                                                                                                                        | OK                                                                                                                                                                        |
| `status`                                                                                                                                                                  | [components.Status](../../models/components/status.md)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                        | FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing.<br/>INVALID_ARGUMENT: The request is not valid. |