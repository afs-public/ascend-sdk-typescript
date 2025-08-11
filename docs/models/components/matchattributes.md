# MatchAttributes

## Example Usage

```typescript
import { MatchAttributes } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: MatchAttributes = MatchAttributes.Identification;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                        | Value                       |
| --------------------------- | --------------------------- |
| `MatchAttributeUnspecified` | MATCH_ATTRIBUTE_UNSPECIFIED |
| `Name`                      | NAME                        |
| `PhoneNumber`               | PHONE_NUMBER                |
| `BirthDate`                 | BIRTH_DATE                  |
| `Identification`            | IDENTIFICATION              |
| `Email`                     | EMAIL                       |
| `Address`                   | ADDRESS                     |
| -                           | `Unrecognized<string>`      |