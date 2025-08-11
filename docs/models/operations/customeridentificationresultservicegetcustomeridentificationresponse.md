# CustomerIdentificationResultServiceGetCustomerIdentificationResponse

## Example Usage

```typescript
import { CustomerIdentificationResultServiceGetCustomerIdentificationResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value:
  CustomerIdentificationResultServiceGetCustomerIdentificationResponse = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `customerIdentification`                                                                                     | [components.CustomerIdentification](../../models/components/customeridentification.md)                       | :heavy_minus_sign:                                                                                           | OK                                                                                                           |
| `status`                                                                                                     | [components.Status](../../models/components/status.md)                                                       | :heavy_minus_sign:                                                                                           | INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details. |