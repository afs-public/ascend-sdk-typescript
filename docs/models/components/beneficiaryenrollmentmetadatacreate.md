# BeneficiaryEnrollmentMetadataCreate

Enrollment metadata for the BENEFICIARY_DESIGNATION enrollment type.

## Example Usage

```typescript
import { BeneficiaryCreateRelationType, BeneficiaryEnrollmentMetadataCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BeneficiaryEnrollmentMetadataCreate = {
  primaryBeneficiaries: [
    {
      beneficiaryPercentage: 100,
      relationType: BeneficiaryCreateRelationType.Spouse,
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `contingentBeneficiaries`                                                                        | [components.BeneficiaryCreate](../../models/components/beneficiarycreate.md)[]                   | :heavy_minus_sign:                                                                               | Contingent Beneficiary list is optional, with a maximum of five contingent beneficiaries.        |
| `primaryBeneficiaries`                                                                           | [components.BeneficiaryCreate](../../models/components/beneficiarycreate.md)[]                   | :heavy_check_mark:                                                                               | At least one primary beneficiary must be provided, with a maximum of five primary beneficiaries. |