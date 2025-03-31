# PushSubscriptionUpdate

Configuration information about a push subscription

## Example Usage

```typescript
import { PushSubscriptionUpdate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: PushSubscriptionUpdate = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        | Example                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `displayName`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The user-defined name for the subscription                                                                         | This is an example HTTP configuration.                                                                             |
| `eventTypes`                                                                                                       | *string*[]                                                                                                         | :heavy_minus_sign:                                                                                                 | Filter for event types; ["\*"] matches all values; Suffix wildcards using "\*" (e.g. ["account.\*"]) are supported | [<br/>"position.v1.updated"<br/>]                                                                                  |
| `httpCallback`                                                                                                     | [components.HttpPushCallbackUpdate](../../models/components/httppushcallbackupdate.md)                             | :heavy_minus_sign:                                                                                                 | Configuration information about an HTTP target callback                                                            |                                                                                                                    |