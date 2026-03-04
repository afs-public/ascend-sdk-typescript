# AssetTaxReportingStructure

Indicates whether the investment generates IRS Form 1099 or Schedule K-1 for tax reporting. Critical for year-end tax processing.

## Example Usage

```typescript
import { AssetTaxReportingStructure } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AssetTaxReportingStructure = AssetTaxReportingStructure.Form1099;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                | Value                               |
| ----------------------------------- | ----------------------------------- |
| `TaxReportingStructureUnspecified`  | TAX_REPORTING_STRUCTURE_UNSPECIFIED |
| `Form1099`                          | FORM_1099                           |
| `FormK1`                            | FORM_K1                             |
| -                                   | `Unrecognized<string>`              |