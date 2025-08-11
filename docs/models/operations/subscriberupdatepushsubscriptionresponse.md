# SubscriberUpdatePushSubscriptionResponse

## Example Usage

```typescript
import { SubscriberUpdatePushSubscriptionResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: SubscriberUpdatePushSubscriptionResponse = {};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `httpMeta`                                                                                                                       | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                                               | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `pushSubscription`                                                                                                               | [components.PushSubscription](../../models/components/pushsubscription.md)                                                       | :heavy_minus_sign:                                                                                                               | OK                                                                                                                               |
| `status`                                                                                                                         | [components.Status](../../models/components/status.md)                                                                           | :heavy_minus_sign:                                                                                                               | INVALID_ARGUMENT: The request was not well formed.<br/>FAILED_PRECONDITION: The subscription cannot be updated in its current state. |