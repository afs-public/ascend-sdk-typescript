# SubscriberDeletePushSubscriptionResponse

## Example Usage

```typescript
import { SubscriberDeletePushSubscriptionResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: SubscriberDeletePushSubscriptionResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `status`                                                                                                                         | [components.Status](../../models/components/status.md)                                                                           | :heavy_minus_sign:                                                                                                               | INVALID_ARGUMENT: The request was not well formed.<br/>FAILED_PRECONDITION: The subscription cannot be deleted in its current state. |