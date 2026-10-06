# AcquisitionTrueZeroIndicator

Indicates whether the acquisition was a true-zero acquisition.

## Example Usage

```typescript
import { AcquisitionTrueZeroIndicator } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AcquisitionTrueZeroIndicator =
  AcquisitionTrueZeroIndicator.ZeroAcquisition;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                        | Value                                       |
| ------------------------------------------- | ------------------------------------------- |
| `AcquisitionTrueZeroIndicatorUnspecified`   | ACQUISITION_TRUE_ZERO_INDICATOR_UNSPECIFIED |
| `ZeroAcquisition`                           | ZERO_ACQUISITION                            |
| -                                           | `Unrecognized<string>`                      |