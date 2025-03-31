# BeneficiaryTaxIdType

The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN. Tax id type is required if birth date is not provided.

## Example Usage

```typescript
import { BeneficiaryTaxIdType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: BeneficiaryTaxIdType = BeneficiaryTaxIdType.TaxIdTypeUnspecified;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `TaxIdTypeUnspecified`  | TAX_ID_TYPE_UNSPECIFIED |
| `TaxIdTypeSsn`          | TAX_ID_TYPE_SSN         |
| `TaxIdTypeItin`         | TAX_ID_TYPE_ITIN        |
| `TaxIdTypeEin`          | TAX_ID_TYPE_EIN         |
| -                       | `Unrecognized<string>`  |