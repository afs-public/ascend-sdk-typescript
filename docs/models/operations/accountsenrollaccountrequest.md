# AccountsEnrollAccountRequest

## Example Usage

```typescript
import { EnrollmentCreateType } from "@apexfintechsolutions/ascend-sdk/models/components";
import { AccountsEnrollAccountRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsEnrollAccountRequest = {
  accountId: "01HC3MAQ4DR9QN1V8MJ4CN1HMK",
  enrollAccountRequestCreate: {
    enrollment: {
      principalApproverId: "02HB7N66WW02WL3B6B9W29K0HW",
      type: EnrollmentCreateType.RegistrationIndividual,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `accountId`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | The account id.                                                                                | 01HC3MAQ4DR9QN1V8MJ4CN1HMK                                                                     |
| `enrollAccountRequestCreate`                                                                   | [components.EnrollAccountRequestCreate](../../models/components/enrollaccountrequestcreate.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |                                                                                                |