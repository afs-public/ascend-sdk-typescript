# AvailableEnrollment

Available Enrollment on an Account.

## Example Usage

```typescript
import { AvailableEnrollment } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: AvailableEnrollment = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `agreements`                                                             | [components.LegalAgreement](../../models/components/legalagreement.md)[] | :heavy_minus_sign:                                                       | A list of legal agreements associated with the enrollment.               |
| `enrollmentType`                                                         | [components.EnrollmentType](../../models/components/enrollmenttype.md)   | :heavy_minus_sign:                                                       | The enrollment type.                                                     |