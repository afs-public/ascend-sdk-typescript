# Term

Capital gains term, adjusted for wash sales.

## Example Usage

```typescript
import { Term } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: Term = Term.ShortTerm;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                   | Value                  |
| ---------------------- | ---------------------- |
| `TermUnspecified`      | TERM_UNSPECIFIED       |
| `LongTerm`             | LONG_TERM              |
| `ShortTerm`            | SHORT_TERM             |
| `SixtyForty`           | SIXTY_FORTY            |
| -                      | `Unrecognized<string>` |