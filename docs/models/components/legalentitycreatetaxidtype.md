# LegalEntityCreateTaxIdType

The nature of the U.S. Tax ID indicated in the related tax_id field; Examples include ITIN, SSN, EIN.

## Example Usage

```typescript
import { LegalEntityCreateTaxIdType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: LegalEntityCreateTaxIdType =
  LegalEntityCreateTaxIdType.TaxIdTypeUnspecified;
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