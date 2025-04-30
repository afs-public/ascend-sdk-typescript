# JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweep

Option to auto-enroll in FDIC cash sweep; defaults to FDIC_CASH_SWEEP_ENROLL

## Example Usage

```typescript
import { JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweep } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweep =
  JointCommunityPropertyEnrollmentMetadataCreateFdicCashSweep
    .FdicCashSweepEnroll;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                    | Value                                   |
| --------------------------------------- | --------------------------------------- |
| `AutoEnrollFdicCashSweepUnspecified`    | AUTO_ENROLL_FDIC_CASH_SWEEP_UNSPECIFIED |
| `FdicCashSweepEnroll`                   | FDIC_CASH_SWEEP_ENROLL                  |
| `FdicCashSweepDecline`                  | FDIC_CASH_SWEEP_DECLINE                 |
| -                                       | `Unrecognized<string>`                  |