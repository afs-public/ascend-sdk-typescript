# DeactivateEnrollmentRequestCreate

The request for deactivating an Enrollment on an account.

## Example Usage

```typescript
import { DeactivateEnrollmentRequestCreate } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: DeactivateEnrollmentRequestCreate = {};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              | Example                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `enrollmentId`                                                                                                                           | *string*                                                                                                                                 | :heavy_minus_sign:                                                                                                                       | **Field Dependencies:**<br/><br/>Required if `enrollment_type` is not present.<br/><br/>Otherwise, must be empty.                        | 22951598-70e2-46f1-bb32-38e8da7a5cdb                                                                                                     |
| `enrollmentType`                                                                                                                         | [components.DeactivateEnrollmentRequestCreateEnrollmentType](../../models/components/deactivateenrollmentrequestcreateenrollmenttype.md) | :heavy_minus_sign:                                                                                                                       | **Field Dependencies:**<br/><br/>Required if `enrollment_id` is not present.<br/><br/>Otherwise, must be empty.                          | CASH_FDIC_CASH_SWEEP                                                                                                                     |