# ReportingEligibility

Tax reporting eligibility.

## Example Usage

```typescript
import { ReportingEligibility } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: ReportingEligibility = ReportingEligibility.Eligible;
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

| Name                                  | Value                                 |
| ------------------------------------- | ------------------------------------- |
| `TaxReportingEligibilityUnspecified`  | TAX_REPORTING_ELIGIBILITY_UNSPECIFIED |
| `Eligible`                            | ELIGIBLE                              |
| `Ineligible`                          | INELIGIBLE                            |
| -                                     | `Unrecognized<string>`                |