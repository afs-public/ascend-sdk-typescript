# SubscriberGetPushSubscriptionDeliveryResponse

## Example Usage

```typescript
import { SubscriberGetPushSubscriptionDeliveryResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: SubscriberGetPushSubscriptionDeliveryResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)                         | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `pushSubscriptionDelivery`                                                                 | [components.PushSubscriptionDelivery](../../models/components/pushsubscriptiondelivery.md) | :heavy_minus_sign:                                                                         | OK                                                                                         |
| `status`                                                                                   | [components.Status](../../models/components/status.md)                                     | :heavy_minus_sign:                                                                         | INVALID_ARGUMENT: The request was not well formed.                                         |