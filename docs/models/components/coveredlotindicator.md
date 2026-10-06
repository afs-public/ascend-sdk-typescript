# CoveredLotIndicator

Indicates covered/non-covered status of lot.

## Example Usage

```typescript
import { CoveredLotIndicator } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CoveredLotIndicator = CoveredLotIndicator.Covered;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                              | Value                             |
| --------------------------------- | --------------------------------- |
| `CoveredLotIndicatorUnspecified`  | COVERED_LOT_INDICATOR_UNSPECIFIED |
| `Covered`                         | COVERED                           |
| `NonCovered`                      | NON_COVERED                       |
| -                                 | `Unrecognized<string>`            |