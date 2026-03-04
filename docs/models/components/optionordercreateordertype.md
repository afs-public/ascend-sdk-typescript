# OptionOrderCreateOrderType

The execution type of this option order.

## Example Usage

```typescript
import { OptionOrderCreateOrderType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionOrderCreateOrderType = OptionOrderCreateOrderType.Limit;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `OrderTypeUnspecified` | ORDER_TYPE_UNSPECIFIED |
| `Limit`                | LIMIT                  |
| -                      | `Unrecognized<string>` |