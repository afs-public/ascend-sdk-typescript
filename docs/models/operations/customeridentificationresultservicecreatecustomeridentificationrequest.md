# CustomerIdentificationResultServiceCreateCustomerIdentificationRequest

## Example Usage

```typescript
import { CustomerIdentificationCreateCheckTypes } from "@apexfintechsolutions/ascend-sdk/models/components";
import { CustomerIdentificationResultServiceCreateCustomerIdentificationRequest } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value:
  CustomerIdentificationResultServiceCreateCustomerIdentificationRequest = {
    correspondentId: "01HPMZZM6RKMVZA1JQ63RQKJRP",
    customerIdentificationCreate: {
      checkTypes: [
        CustomerIdentificationCreateCheckTypes.Database,
      ],
    },
  };
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `correspondentId`                                                                                  | *string*                                                                                           | :heavy_check_mark:                                                                                 | The correspondent id.                                                                              | 01HPMZZM6RKMVZA1JQ63RQKJRP                                                                         |
| `customerIdentificationCreate`                                                                     | [components.CustomerIdentificationCreate](../../models/components/customeridentificationcreate.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |