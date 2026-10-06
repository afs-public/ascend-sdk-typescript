# OpenLotTerm

Capital gains term, adjusted for wash sales.

## Example Usage

```typescript
import { OpenLotTerm } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OpenLotTerm = OpenLotTerm.ShortTerm;
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