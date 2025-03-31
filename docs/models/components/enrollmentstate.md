# EnrollmentState

Indicates where in the enrollment is in the process; May be `PENDING_AGREEMENT`, `ACTIVE`, `INACTIVE`, `PROCESSING`, or `EXPIRED`

## Example Usage

```typescript
import { EnrollmentState } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollmentState = EnrollmentState.Active;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                         | Value                        |
| ---------------------------- | ---------------------------- |
| `EnrollmentStateUnspecified` | ENROLLMENT_STATE_UNSPECIFIED |
| `Active`                     | ACTIVE                       |
| `Inactive`                   | INACTIVE                     |
| `PendingAgreement`           | PENDING_AGREEMENT            |
| `Processing`                 | PROCESSING                   |
| `Expired`                    | EXPIRED                      |
| -                            | `Unrecognized<string>`       |