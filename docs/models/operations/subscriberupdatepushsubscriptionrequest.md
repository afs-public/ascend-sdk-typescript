# SubscriberUpdatePushSubscriptionRequest

## Example Usage

```typescript
import { SubscriberUpdatePushSubscriptionRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: SubscriberUpdatePushSubscriptionRequest = {
  subscriptionId: "01H8MCDXH4JVH7KVNB2YY42907",
  pushSubscriptionUpdate: {},
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `subscriptionId`                                                                       | *string*                                                                               | :heavy_check_mark:                                                                     | The subscription id.                                                                   | 01H8MCDXH4JVH7KVNB2YY42907                                                             |
| `updateMask`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | The fields to update in subscription                                                   |                                                                                        |
| `pushSubscriptionUpdate`                                                               | [components.PushSubscriptionUpdate](../../models/components/pushsubscriptionupdate.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |                                                                                        |