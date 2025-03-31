# LegalNaturalPersonNameSuffix

The suffix of a natural person; A suffix in a name is any part of the name that comes after the last name

## Example Usage

```typescript
import { LegalNaturalPersonNameSuffix } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LegalNaturalPersonNameSuffix = LegalNaturalPersonNameSuffix.Jr;
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