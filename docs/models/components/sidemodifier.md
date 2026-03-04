# SideModifier

The open/close modification of the side, signaling whether this option order leg intends to OPEN a new position, or to CLOSE an existing one.

## Example Usage

```typescript
import { SideModifier } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: SideModifier = SideModifier.Open;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                      | Value                     |
| ------------------------- | ------------------------- |
| `SideModifierUnspecified` | SIDE_MODIFIER_UNSPECIFIED |
| `Open`                    | OPEN                      |
| `Close`                   | CLOSE                     |
| -                         | `Unrecognized<string>`    |