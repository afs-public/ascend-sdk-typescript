# Result

The outcome of the delivery

## Example Usage

```typescript
import { Result } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Result = Result.Succeeded;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                          | Value                                         |
| --------------------------------------------- | --------------------------------------------- |
| `PushSubscriptionDeliveryResultUnspecified`   | PUSH_SUBSCRIPTION_DELIVERY_RESULT_UNSPECIFIED |
| `Succeeded`                                   | SUCCEEDED                                     |
| `Failed`                                      | FAILED                                        |
| -                                             | `Unrecognized<string>`                        |