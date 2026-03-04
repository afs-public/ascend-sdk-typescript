# TaxReportingStructure

The asset’s tax reporting structure.

## Example Usage

```typescript
import { TaxReportingStructure } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: TaxReportingStructure =
  TaxReportingStructure.TaxReportingStructureK1;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                | Value                               |
| ----------------------------------- | ----------------------------------- |
| `TaxReportingStructureUnspecified`  | TAX_REPORTING_STRUCTURE_UNSPECIFIED |
| `TaxReportingStructure1099`         | TAX_REPORTING_STRUCTURE_1099        |
| `TaxReportingStructureK1`           | TAX_REPORTING_STRUCTURE_K1          |
| `TaxReportingStructureOther`        | TAX_REPORTING_STRUCTURE_OTHER       |
| -                                   | `Unrecognized<string>`              |