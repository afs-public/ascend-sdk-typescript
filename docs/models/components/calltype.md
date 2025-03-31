# CallType

The type of call

## Example Usage

```typescript
import { CallType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CallType = CallType.Ordinary;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `CallTypeUnspecified`  | CALL_TYPE_UNSPECIFIED  |
| `Ordinary`             | ORDINARY               |
| `Special`              | SPECIAL                |
| `MakeWhole`            | MAKE_WHOLE             |
| `Regulatory`           | REGULATORY             |
| -                      | `Unrecognized<string>` |