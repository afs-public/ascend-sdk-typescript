# ActivitySideModifier

Indicates whether the trade is opening a new position or closing an existing position

## Example Usage

```typescript
import { ActivitySideModifier } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ActivitySideModifier = ActivitySideModifier.Open;
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