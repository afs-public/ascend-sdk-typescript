# BankRelationshipsReissueMicroDepositsResponse

## Example Usage

```typescript
import { BankRelationshipsReissueMicroDepositsResponse } from "@apexfintechsolutions/ascend-sdk/models/operations";

let value: BankRelationshipsReissueMicroDepositsResponse = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `httpMeta`                                                                 | [components.HTTPMetadata](../../models/components/httpmetadata.md)         | :heavy_check_mark:                                                         | N/A                                                                        |
| `bankRelationship`                                                         | [components.BankRelationship](../../models/components/bankrelationship.md) | :heavy_minus_sign:                                                         | OK                                                                         |
| `status`                                                                   | [components.Status](../../models/components/status.md)                     | :heavy_minus_sign:                                                         | INVALID_ARGUMENT: The request has an invalid argument.                     |