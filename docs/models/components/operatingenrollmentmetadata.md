# OperatingEnrollmentMetadata

Metadata for the REGISTRATION_OPERATING enrollment type.

## Example Usage

```typescript
import { OperatingEnrollmentMetadata } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: OperatingEnrollmentMetadata = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `operatingPurpose`                                                                             | [components.EnrollmentOperatingPurpose](../../models/components/enrollmentoperatingpurpose.md) | :heavy_minus_sign:                                                                             | The purpose of the operating account.                                                          | CUSTODY                                                                                        |
| `subtitle`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | Optional subtitle for the operating purpose                                                    | C/F Optionality Securities                                                                     |
| `taxWithholdingMetadata`                                                                       | [components.TaxWithholdingMetadata](../../models/components/taxwithholdingmetadata.md)         | :heavy_minus_sign:                                                                             | Optional tax withholding metadata for TAX_WITHHOLDING operating purpose                        |                                                                                                |