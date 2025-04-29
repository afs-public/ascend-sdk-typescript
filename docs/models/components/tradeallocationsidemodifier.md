# TradeAllocationSideModifier

Side modifier for the trade allocation.

## Example Usage

```typescript
import { TradeAllocationSideModifier } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TradeAllocationSideModifier = TradeAllocationSideModifier.Short;
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