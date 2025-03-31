# CompressedOrderOrderType

The execution type of this order. Only MARKET is supported.

## Example Usage

```typescript
import { CompressedOrderOrderType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CompressedOrderOrderType = CompressedOrderOrderType.Market;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `OrderTypeUnspecified` | ORDER_TYPE_UNSPECIFIED |
| `Market`               | MARKET                 |
| -                      | `Unrecognized<string>` |