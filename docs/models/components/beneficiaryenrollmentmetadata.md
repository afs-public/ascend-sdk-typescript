# BeneficiaryEnrollmentMetadata

Metadata for the BENEFICIARY_DESIGNATION enrollment type.

## Example Usage

```typescript
import { BeneficiaryEnrollmentMetadata } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BeneficiaryEnrollmentMetadata = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `contingentBeneficiaries`                                                                        | [components.Beneficiary](../../models/components/beneficiary.md)[]                               | :heavy_minus_sign:                                                                               | Contingent Beneficiary list is optional, with a maximum of five contingent beneficiaries.        |
| `primaryBeneficiaries`                                                                           | [components.Beneficiary](../../models/components/beneficiary.md)[]                               | :heavy_minus_sign:                                                                               | At least one primary beneficiary must be provided, with a maximum of five primary beneficiaries. |