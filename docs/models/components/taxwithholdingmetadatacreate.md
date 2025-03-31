# TaxWithholdingMetadataCreate

Enrollment metadata for TAX_WITHHOLDING operating purpose

## Example Usage

```typescript
import { TaxAuthority, TaxWithholdingMetadataCreate, WithholdingType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TaxWithholdingMetadataCreate = {
  taxAuthority: TaxAuthority.Tx,
  withholdingType: WithholdingType.Backup,
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `taxAuthority`                                                                                                              | [components.TaxAuthority](../../models/components/taxauthority.md)                                                          | :heavy_check_mark:                                                                                                          | Tax Authority for Enrollment                                                                                                | TX                                                                                                                          |
| `withholdingType`                                                                                                           | [components.WithholdingType](../../models/components/withholdingtype.md)                                                    | :heavy_check_mark:                                                                                                          | A designation used by the custodian to determine how much federal income tax should be withheld from the proceeds of a sale | BACKUP                                                                                                                      |