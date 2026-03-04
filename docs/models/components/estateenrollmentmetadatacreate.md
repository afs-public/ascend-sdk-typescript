# EstateEnrollmentMetadataCreate

Enrollment metadata for estate enrollments

## Example Usage

```typescript
import { EstateEnrollmentMetadataCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EstateEnrollmentMetadataCreate = {};
```

## Fields

| Field                                                                                                                                                  | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            | Example                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `certificateOfAppointmentDocumentId`                                                                                                                   | *string*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                     | The document id for the certificate of appointment                                                                                                     | c401f3b2-cdb5-4a6c-9f5f-aa393cf12583                                                                                                                   |
| `dividendReinvestmentPlan`                                                                                                                             | [components.EstateEnrollmentMetadataCreateDividendReinvestmentPlan](../../models/components/estateenrollmentmetadatacreatedividendreinvestmentplan.md) | :heavy_minus_sign:                                                                                                                                     | Option to auto-enroll in Dividend Reinvestment; defaults to DIVIDEND_REINVESTMENT_ENROLL                                                               | DIVIDEND_REINVESTMENT_ENROLL                                                                                                                           |