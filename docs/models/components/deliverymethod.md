# DeliveryMethod

The Delivery method of check withdrawal

## Example Usage

```typescript
import { DeliveryMethod } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: DeliveryMethod = DeliveryMethod.Standard;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `DeliveryMethodUnspecified` | DELIVERY_METHOD_UNSPECIFIED |
| `Standard`                  | STANDARD                    |
| `Overnight`                 | OVERNIGHT                   |
| `OvernightToApex`           | OVERNIGHT_TO_APEX           |
| -                           | `Unrecognized<string>`      |