# BookingCompleteTradeResponse

## Example Usage

```typescript
import { BookingCompleteTradeResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BookingCompleteTradeResponse = {
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
| `completeTradeResponse`                                                                                                                                                   | [components.CompleteTradeResponse](../../models/components/completetraderesponse.md)                                                                                      | :heavy_minus_sign:                                                                                                                                                        | OK                                                                                                                                                                        |
| `status`                                                                                                                                                                  | [components.Status](../../models/components/status.md)                                                                                                                    | :heavy_minus_sign:                                                                                                                                                        | INVALID_ARGUMENT: The request is not valid.<br/>FAILED_PRECONDITION: The operation was rejected because the system is not in a state required for the operation's processing. |