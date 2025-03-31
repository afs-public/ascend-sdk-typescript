# OperatingEnrollmentMetadataCreate

Enrollment metadata for the REGISTRATION_OPERATING enrollment type.

## Example Usage

```typescript
import { OperatingEnrollmentMetadataCreate, OperatingPurpose } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OperatingEnrollmentMetadataCreate = {
  operatingPurpose: OperatingPurpose.Custody,
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `operatingPurpose`                                                                                 | [components.OperatingPurpose](../../models/components/operatingpurpose.md)                         | :heavy_check_mark:                                                                                 | The purpose of the operating account.                                                              | CUSTODY                                                                                            |
| `subtitle`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | Optional subtitle for the operating purpose                                                        | C/F Optionality Securities                                                                         |
| `taxWithholdingMetadata`                                                                           | [components.TaxWithholdingMetadataCreate](../../models/components/taxwithholdingmetadatacreate.md) | :heavy_minus_sign:                                                                                 | Enrollment metadata for TAX_WITHHOLDING operating purpose                                          |                                                                                                    |