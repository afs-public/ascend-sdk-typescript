# EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequency

The frequency by which cash is anticipated to be withdrawn from the account

## Example Usage

```typescript
import { EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequency } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequency =
  EnrollmentForeignJointAccountEnrollmentMetadataWithdrawalFrequency.Frequent;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                             | Value                            |
| -------------------------------- | -------------------------------- |
| `WithdrawalFrequencyUnspecified` | WITHDRAWAL_FREQUENCY_UNSPECIFIED |
| `Frequent`                       | FREQUENT                         |
| `Occasional`                     | OCCASIONAL                       |
| `Rare`                           | RARE                             |
| -                                | `Unrecognized<string>`           |