# CheckTypes

## Example Usage

```typescript
import { CheckTypes } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CheckTypes = CheckTypes.Database;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `CheckTypeUnspecified` | CHECK_TYPE_UNSPECIFIED |
| `Database`             | DATABASE               |
| `Documentary`          | DOCUMENTARY            |
| -                      | `Unrecognized<string>` |