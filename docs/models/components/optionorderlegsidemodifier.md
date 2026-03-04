# OptionOrderLegSideModifier

The open/close modification of the side, signaling whether this option order leg intends to OPEN a new position, or to CLOSE an existing one.

## Example Usage

```typescript
import { OptionOrderLegSideModifier } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OptionOrderLegSideModifier = OptionOrderLegSideModifier.Open;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `SideModifierUnspecified` | SIDE_MODIFIER_UNSPECIFIED |
| `Open`                    | OPEN                      |
| `Close`                   | CLOSE                     |
| -                         | `Unrecognized<string>`    |