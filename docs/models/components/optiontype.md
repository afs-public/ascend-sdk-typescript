# OptionType

Type of deliverable asset the option is set to deliver upon expiry.

## Example Usage

```typescript
import { OptionType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionType = OptionType.Equity;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `OptionTypeUnspecified` | OPTION_TYPE_UNSPECIFIED |
| `Equity`                | EQUITY                  |
| `Index`                 | INDEX                   |
| -                       | `Unrecognized<string>`  |