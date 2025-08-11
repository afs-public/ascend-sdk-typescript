# InvestigationNameSuffix

The name suffix for individuals, one of:
- `NAME_SUFFIX_UNSPECIFIED` - Default/Null value.
- `SR` - Senior.
- `JR` - Junior.
- `III` - The third.
- `IV` - The fourth.
- `V` - The fifth.

## Example Usage

```typescript
import { InvestigationNameSuffix } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: InvestigationNameSuffix = InvestigationNameSuffix.Jr;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `NameSuffixUnspecified` | NAME_SUFFIX_UNSPECIFIED |
| `Sr`                    | SR                      |
| `Jr`                    | JR                      |
| `Iii`                   | III                     |
| `Iv`                    | IV                      |
| `V`                     | V                       |
| -                       | `Unrecognized<string>`  |