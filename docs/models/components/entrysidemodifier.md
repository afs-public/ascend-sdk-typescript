# EntrySideModifier

Indicates whether the trade is opening a new position or closing an existing position Should be populated if possible for trades; the side modifier for the trade

## Example Usage

```typescript
import { EntrySideModifier } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EntrySideModifier = EntrySideModifier.Open;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `SideModifierUnspecified` | SIDE_MODIFIER_UNSPECIFIED |
| `Short`                   | SHORT                     |
| `ShortExempt`             | SHORT_EXEMPT              |
| `ShortCover`              | SHORT_COVER               |
| `Open`                    | OPEN                      |
| `Close`                   | CLOSE                     |
| -                         | `Unrecognized<string>`    |