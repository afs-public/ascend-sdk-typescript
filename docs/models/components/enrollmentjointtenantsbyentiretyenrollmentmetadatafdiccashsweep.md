# EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweep

Option to auto-enroll in FDIC cash sweep; defaults to true

## Example Usage

```typescript
import { EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweep } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweep =
  EnrollmentJointTenantsByEntiretyEnrollmentMetadataFdicCashSweep
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