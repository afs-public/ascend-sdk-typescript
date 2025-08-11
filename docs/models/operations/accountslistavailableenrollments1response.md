# AccountsListAvailableEnrollments1Response

## Example Usage

```typescript
import { AccountsListAvailableEnrollments1Response } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: AccountsListAvailableEnrollments1Response = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `httpMeta`                                                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)                                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `listAvailableEnrollmentsResponse`                                                                           | [components.ListAvailableEnrollmentsResponse](../../models/components/listavailableenrollmentsresponse.md)   | :heavy_minus_sign:                                                                                           | OK                                                                                                           |
| `status`                                                                                                     | [components.Status](../../models/components/status.md)                                                       | :heavy_minus_sign:                                                                                           | INVALID_ARGUMENT: The request is not valid, additional information may be present in the BadRequest details. |