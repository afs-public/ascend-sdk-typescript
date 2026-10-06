# OpenLotLongShortIndicator

Indicates whether the lot is long or short.

## Example Usage

```typescript
import { OpenLotLongShortIndicator } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OpenLotLongShortIndicator = OpenLotLongShortIndicator.Long;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                             | Value                            |
| -------------------------------- | -------------------------------- |
| `LongShortIndicatorUnspecified`  | LONG_SHORT_INDICATOR_UNSPECIFIED |
| `Long`                           | LONG                             |
| `Short`                          | SHORT                            |
| -                                | `Unrecognized<string>`           |