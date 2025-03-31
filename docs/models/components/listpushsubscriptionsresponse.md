# ListPushSubscriptionsResponse

A response to a list push subscriptions method

## Example Usage

```typescript
import { ListPushSubscriptionsResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListPushSubscriptionsResponse = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             | Example                                                                                 |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | Page token used for pagination; Supplying a page token returns the next page of results | ZXhhbXBsZQo                                                                             |
| `pushSubscriptions`                                                                     | [components.PushSubscription](../../models/components/pushsubscription.md)[]            | :heavy_minus_sign:                                                                      | The returned collection of subscriptions                                                |                                                                                         |