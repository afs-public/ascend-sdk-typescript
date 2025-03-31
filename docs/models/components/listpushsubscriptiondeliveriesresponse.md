# ListPushSubscriptionDeliveriesResponse

A response to a list push subscription deliveries method

## Example Usage

```typescript
import { ListPushSubscriptionDeliveriesResponse } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ListPushSubscriptionDeliveriesResponse = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `nextPageToken`                                                                              | *string*                                                                                     | :heavy_minus_sign:                                                                           | Page token used for pagination; Supplying a page token returns the next page of results      | ZXhhbXBsZQo                                                                                  |
| `pushSubscriptionDeliveries`                                                                 | [components.PushSubscriptionDelivery](../../models/components/pushsubscriptiondelivery.md)[] | :heavy_minus_sign:                                                                           | The returned collection of deliveries                                                        |                                                                                              |