# TaxWithholdingMetadata

Optional tax withholding metadata for TAX_WITHHOLDING operating purpose

## Example Usage

```typescript
import { TaxWithholdingMetadata } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TaxWithholdingMetadata = {};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `taxAuthority`                                                                                                              | [components.EnrollmentTaxAuthority](../../models/components/enrollmenttaxauthority.md)                                      | :heavy_minus_sign:                                                                                                          | Tax Authority for Enrollment                                                                                                | TX                                                                                                                          |
| `withholdingType`                                                                                                           | [components.EnrollmentWithholdingType](../../models/components/enrollmentwithholdingtype.md)                                | :heavy_minus_sign:                                                                                                          | A designation used by the custodian to determine how much federal income tax should be withheld from the proceeds of a sale | BACKUP                                                                                                                      |