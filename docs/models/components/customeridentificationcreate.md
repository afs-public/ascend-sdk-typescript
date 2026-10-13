# CustomerIdentificationCreate

CustomerIdentification includes the details of a customer identification check

## Example Usage

```typescript
import { CustomerIdentificationCreate, CustomerIdentificationCreateCheckTypes } from "@apexfintechsolutions/ascend-sdk/models/components";

let value: CustomerIdentificationCreate = {
  checkTypes: [
    CustomerIdentificationCreateCheckTypes.Database,
  ],
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `checkTypes`                                                                                                             | [components.CustomerIdentificationCreateCheckTypes](../../models/components/customeridentificationcreatechecktypes.md)[] | :heavy_check_mark:                                                                                                       | The types of checks being requested Must either be DATABASE or DOCUMENTARY else will return INVALID_ARGUMENT             | [<br/>"DATABASE"<br/>]                                                                                                   |
| `identity`                                                                                                               | [components.CustomerIdentificationIdentityCreate](../../models/components/customeridentificationidentitycreate.md)       | :heavy_minus_sign:                                                                                                       | The identity to run identity verification check on                                                                       |                                                                                                                          |