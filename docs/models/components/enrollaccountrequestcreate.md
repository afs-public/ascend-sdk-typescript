# EnrollAccountRequestCreate

The request for creating an Enrollment on an account.

## Example Usage

```typescript
import { EnrollAccountRequestCreate, EnrollmentCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: EnrollAccountRequestCreate = {
  enrollment: {
    principalApproverId: "02HB7N66WW02WL3B6B9W29K0HW",
    type: EnrollmentCreateType.RegistrationIndividual,
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `enrollment`                                                               | [components.EnrollmentCreate](../../models/components/enrollmentcreate.md) | :heavy_check_mark:                                                         | An Enrollment represents programs the account may enroll in.               |